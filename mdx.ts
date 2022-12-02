import { evaluate as mdxEvaluate } from "@mdx-js/mdx";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import rehypePrism from "rehype-prism-plus";

declare module "react/jsx-runtime" {
  const Fragment: unknown;
  const jsx: unknown;
  const jsxs: unknown;
}

export async function evaluate(mdxFile: string) {
  const { default: Content, ...frontMatter } = await mdxEvaluate(
    await Deno.readTextFile(mdxFile),
    { Fragment, jsx, jsxs, rehypePlugins: [rehypePrism] },
  );

  return {
    Content,
    frontMatter,
  };
}
