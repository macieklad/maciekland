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
        <link rel="stylesheet" type="text/css" href="/styles.css" />
        {head}

        <title>{title ?? "The land of maciek"}</title>
        <meta
          name="description"
          content={description ?? "Where maciek lives"}
        />
        <meta
          name="keywords"
          content={keywords ??
            "Web, Javascript, JS, TS, React, Node, Deno, Rust, Laravel, PHP"}
        />
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
          {children}
        </div>
      </body>
    </html>
  );
}
