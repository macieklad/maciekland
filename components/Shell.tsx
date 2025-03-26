export default function Shell(
  { children, title, description, keywords, head }: React.PropsWithChildren<
    {
      head?: React.ReactNode;
      title?: string;
      description?: string;
      keywords?: string;
    }
  >,
) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>{title ?? "Maciej Ładoś"}</title>
        <meta
          name="description"
          content={description ??
            "Maciej Ładoś blog. Tech in general, loose thoughts from time to time."}
        />
        <meta
          name="keywords"
          content={keywords ??
            "Web, Javascript, JS, TS, React, Node, Deno, Rust, Laravel, PHP"}
        />
        <link rel="stylesheet" type="text/css" href="/styles.css" />
        <script
          async
          defer
          data-website-id="c3d29a4a-314b-41fe-829a-026efea27ac4"
          src="https://macieklad-umami.fly.dev/umami.js"
        />
        {head}
      </head>
      <body>
        <div className="container">
          <nav>
            <img
              src="/images/logo.png"
              className="nav__logo"
              alt="Website logo, a cartoon depiction of a planet with tiny home on it, with website title underneath"
            />
            <div className="nav__links">
              <a href="/">Home</a>
              <a href="/about">About</a>
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
