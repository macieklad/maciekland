import { renderToStaticMarkup } from "react-dom/server";
import { serve } from "std/http/server.ts";
import { extname, resolve } from "std/path/mod.ts";
import { contentType } from "std/media_types/mod.ts";
import { router } from "rutt";

import Home from "./views/Home.tsx";
import { evaluate } from "./mdx.ts";
import Post from "./views/Post.tsx";

function view(Component: JSX.Element) {
  return new Response(renderToStaticMarkup(Component), {
    headers: { "content-type": "text/html" },
  });
}

async function asset(path: string) {
  const realPath = resolve("./public", path);
  try {
    return new Response(await Deno.readFile(realPath), {
      headers: { "content-type": contentType(extname(realPath)) ?? 'binary/octet-stream' },
    });
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return new Response("Not found", { status: 404 });
    }

    console.error(error)
    return new Response("Server error", { status: 500 }); 
  }
}

serve(
  router({
    "/": () => view(<Home />),
    "/blog/:post": () => view(<Post />),
    "/:asset": (_req, _ctx, match) => asset(match.asset),
  }),
);
