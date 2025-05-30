import { compile, run } from "@mdx-js/mdx";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import rehypePrism from "rehype-prism-plus";
import readingTime from "remark-reading-time";
import readingMdxTime from "remark-reading-time/mdx";

declare module "react/jsx-runtime" {
  const Fragment: unknown;
  const jsx: unknown;
  const jsxs: unknown;
}

export async function evaluate(mdxFile: string) {
  const file = await compile(await Deno.readTextFile(mdxFile), {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [readingTime, readingMdxTime],
    outputFormat: "function-body",
  });

  const { default: Content, ...frontMatter } = await run(file, {
    Fragment,
    jsx,
    jsxs,
  });

  const readingTimeValues = file.data?.readingTime as {
    text: string;
    minutes: number;
    time: number;
    words: string;
  };

  return {
    Content,
    frontMatter: {
      ...frontMatter,
      readingTime: readingTimeValues.text,
    },
  } as {
    Content: React.ComponentType;
    frontMatter: {
      title?: string;
      description?: string;
      publishedAt?: Date;
      readingTime: string;
    };
  };
}

export async function writePostDatabase() {
  const postFiles = Array.from(Deno.readDirSync("./posts"))
    .filter((entry) => entry.isFile && entry.name.endsWith("mdx"))
    .filter((entry) => !entry.name.startsWith("_"))
    .map((entry) => entry.name);

  const contents = await Promise.all(
    postFiles.map((post) => evaluate(`./posts/${post}`))
  );

  let database = [];

  for (const index of contents.keys()) {
    const postSlug = postFiles[index].slice(0, -4);
    const frontMatter = contents[index].frontMatter;
    const { title, description, publishedAt, readingTime } = frontMatter;

    if (!title) {
      throw new Error(`Post ${postSlug} does not have title defined`);
    }

    if (!description) {
      throw new Error(`Post ${postSlug} does not have description defined`);
    }

    if (!publishedAt) {
      throw new Error(
        `Post ${postSlug} does not have publication datte defined`
      );
    }

    if (publishedAt instanceof Date && publishedAt.getTime() > Date.now()) {
      continue;
    }

    database.push({
      slug: postSlug,
      title,
      description,
      publishedAt,
      readingTime,
    });
  }

  database = database.sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
  );

  await Deno.writeTextFile(
    "./posts/database.json",
    JSON.stringify(database, null, 2)
  );
}
