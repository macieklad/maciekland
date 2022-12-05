export function dateHeader(date: Date | string) {
  return (date instanceof Date ? date : new Date(date)).toLocaleDateString(
    "en-GB",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
}

export function redirect(req: Request, to: string) {
  const url = new URL(req.url);
  return Response.redirect(`${url.protocol}${url.host}${to}`);
}
