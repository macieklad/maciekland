import Shell from "./Shell.tsx";

export default function About() {
  return (
    <Shell title="About" description="Some personal info">
      <div className="container">
        <div className="intro">
          <h1 className="intro__title">About me</h1>
          <p className="intro__description">
            I'm a software engineer currently stationed in Cracow. I'm mostly
            working with the web platform and supporting technologies, but I
            enjoy the tech in general - a good talk about new compiler
            optimization, web performance improvement or a way of building a
            tech team goes a long way for me.
            <br />
            <br />
            In my free time I hike, do some volunteering as a scouting
            instructor, play games or consume books.
          </p>
          <div className="about__links">
            <a href="mailto:maciej@lados.dev">Email</a>
            <a href="https://www.linkedin.com/in/maciej-%C5%82ado%C5%9B-31673a134/">
              Linkedin
            </a>
            <a href="https://github.com/macieklad">Github</a>
          </div>
        </div>
      </div>
    </Shell>
  );
}
