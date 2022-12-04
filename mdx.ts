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

export async function writePostDatabase() {
  const postFiles = Array.from(Deno.readDirSync("./posts"))
    .filter((entry) => entry.isFile && entry.name.endsWith("mdx"))
    .map((entry) => entry.name);

  const contents = await Promise.all(
    postFiles.map((post) => evaluate(`./posts/${post}`)),
  );

  let database = [];

  for (const index of contents.keys()) {
    const postSlug = postFiles[index].slice(0, -4);
    const frontMatter: {
      title?: string;
      description?: string;
      publishedAt?: Date;
    } = contents[index].frontMatter;
    const { title, description, publishedAt } = frontMatter;

    if (!title) {
      throw new Error(`Post ${postSlug} does not have title defined`);
    }

    if (!description) {
      throw new Error(`Post ${postSlug} does not have description defined`);
    }

    if (!publishedAt) {
      throw new Error(
        `Post ${postSlug} does not have publication datte defined`,
      );
    }

    database.push({
      slug: postSlug,
      title,
      description,
      publishedAt,
    });
  }

  database = database
    .sort((a, b) => a.publishedAt.getTime() - b.publishedAt.getTime());

  await Deno.writeTextFile(
    "./posts/database.json",
    JSON.stringify(database, null, 2),
  );
}
