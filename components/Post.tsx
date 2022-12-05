import { dateHeader } from "../utils.ts";
import Shell from "./Shell.tsx";
import { Squiggle } from "./Squiggle.tsx";

interface Post {
  Content: React.ComponentType;
  frontMatter: {
    title?: string;
    description?: string;
    publishedAt?: Date;
    readingTime: string;
  };
}

export default function Post(
  { post }: React.PropsWithChildren<{ post: Post }>,
) {
  const { Content, frontMatter } = post;
  const { title, description, publishedAt, readingTime } = frontMatter;

  return (
    <Shell title={title}>
      <div>
        {dateHeader(publishedAt!)}
        {readingTime}
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Content />
      <Squiggle />
    </Shell>
  );
}
