import { renderToStaticMarkup } from "react-dom/server";
import { serve } from "std/http/server.ts";
import { extname, resolve } from "std/path/mod.ts";
import { contentType } from "std/media_types/mod.ts";
import { router } from "rutt";

import Home from "./components/Home.tsx";
import Post from "./components/Post.tsx";
import { evaluate } from "./mdx.ts";
import { redirect } from "./utils.ts";
import About from "./components/About.tsx";

async function asset(path: string) {
  let content: Uint8Array;
  const realPath = resolve("./public", path);

  try {
    content = await Deno.readFile(realPath);
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return new Response("Not found", { status: 404 });
    }

    console.error(error);
    return new Response("Server error", { status: 500 });
  }

  const mime = contentType(extname(realPath)) ?? "binary/octet-stream";
  const isLongCacheable = mime?.startsWith("font") ||
    mime?.startsWith("image") || mime.startsWith("text/css");

  return new Response(content, {
    headers: {
      "content-type": mime,
      ...(isLongCacheable &&
        { "cache-control": "public, max-age=15552000, immutable" }),
    },
  });
}

async function post(slug: string) {
  try {
    return view(
      Post({ post: await evaluate(`./posts/${slug}.mdx`) }),
    );
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return new Response("Not found", { status: 404 });
    }

    console.error(error);
    return new Response("Server error", { status: 500 });
  }
}

function view(Component: JSX.Element) {
  return new Response(`<!DOCTYPE html>${renderToStaticMarkup(Component)}`, {
    headers: { "content-type": "text/html" },
  });
}

serve(
  router({
    "/": () => view(<Home />),
    "/about": () => view(<About />),
    "/blog": (req) => redirect(req, ""),
    "/blog/:slug": async (_req, _ctx, match) => await post(match.slug),
    "/:asset*": (_req, _ctx, match) => asset(match.asset),
  }),
);
