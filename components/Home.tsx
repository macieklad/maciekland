import Shell from "./Shell.tsx";
import { Squiggle } from "./Squiggle.tsx";

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
        <div className="post">
          <p className="post__date">October 10, 2022</p>
          <h2 className="post__title">Laravel config explained</h2>
          <p className="post__description">
            Hello. When something interesting comes to my mind I will sometimes
            write about it. Day-to-day I focus on web development, but do not
            expect any particular theme. Enjoy!
          </p>
        </div>
        <div className="post">
          <p className="post__date">October 10, 2022</p>
          <h2 className="post__title">Laravel config explained</h2>
          <p className="post__description">
            Hello. When something interesting comes to my mind I will sometimes
            write about it. Day-to-day I focus on web development, but do not
            expect any particular theme. Enjoy!
          </p>
        </div>
        <div className="post">
          <p className="post__date">October 10, 2022</p>
          <h2 className="post__title">Laravel config explained</h2>
          <p className="post__description">
            Hello. When something interesting comes to my mind I will sometimes
            write about it. Day-to-day I focus on web development, but do not
            expect any particular theme. Enjoy!
          </p>
        </div>
      </div>
      <Squiggle className="home-squiggle mx-auto" />
    </Shell>
  );
}
