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
      <div className="prose__header">
        <span className="prose__date">{dateHeader(publishedAt!)}</span>
        <span className="prose__reading-time">{readingTime}</span>
      </div>
      <h1 className="prose__title">{title}</h1>
      <p className="prose__description">{description}</p>

      <div className="prose">
        <Content />
      </div>
      <Squiggle className="prose__squiggle" />
    </Shell>
  );
}
