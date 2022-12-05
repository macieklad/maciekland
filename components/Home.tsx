import Shell from "./Shell.tsx";
import { Squiggle } from "./Squiggle.tsx";
import posts from "../posts/database.json" assert { type: "json" };
import { dateHeader } from "../utils.ts";

export default function Home() {
  return (
    <Shell>
      <div className="intro">
        <h1 className="intro__title">You have landed, hello!</h1>
        <p className="intro__description">
          I'm Maciej. When something interesting comes to my mind I will
          sometimes scribble about it. I mostly focus on web development, but do
          not expect any concrete theme. Enjoy!
        </p>
      </div>
      <div className="posts">
        {posts.map(({ slug, title, description, publishedAt }) => (
          <div className="post">
            <p className="post__date">
              {dateHeader(publishedAt)}
            </p>
            <h2 className="post__title">
              <a href={`/blog/${slug}`}>
                {title}
              </a>
            </h2>
            <p className="post__description">
              {description}
            </p>
          </div>
        ))}
      </div>
      <Squiggle className="home-squiggle mx-auto" />
    </Shell>
  );
}
