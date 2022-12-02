export default function Shell({ children }: React.PropsWithChildren) {
  return (
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/styles.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
