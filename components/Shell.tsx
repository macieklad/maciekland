export default function Shell(
  { children, head }: React.PropsWithChildren<{ head?: React.ReactNode }>,
) {
  return (
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/styles.css" />
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
          {children}
        </div>
      </body>
    </html>
  );
}
