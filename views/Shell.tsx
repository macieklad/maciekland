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
        {children}
      </body>
    </html>
  );
}
