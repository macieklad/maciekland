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
            enjoy the tech in general - a good talk about new compiler, web performance,
            or improving tech team goes a long way for me.
            <br />
            <br />
            In my free time I do quite a bit of volunteering as a scouting
            leader - so you probably have guessed that I enjoy topics around education,
            music, hiking and camping.
            <br />
            <br />
            If you want to steal my heart though, good company and food accompanied with
            interesting discussions is the way to go.
            <br />
            <br />
            If you have any questions, drop a line!
          </p>
          <div className="about__links">
            <a href="mailto:maciej@lados.dev">Email</a>
            <a href="mailto:maciej.lados@zhp.net.pl">Email for scouts!</a>
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
