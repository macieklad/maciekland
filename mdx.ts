import { evaluateSync } from "@mdx-js/mdx";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

declare module "react/jsx-runtime" {
  const Fragment: unknown;
  const jsx: unknown;
  const jsxs: unknown;
}

export async function evaluate(mdxFile: string) {
  const { default: Content, ...frontMatter } = evaluateSync(
    await Deno.readTextFile(mdxFile),
    { Fragment, jsx, jsxs },
  );

  return {
    Content,
    frontMatter,
  };
}
