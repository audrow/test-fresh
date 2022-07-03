import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  // const body = Deno.readTextFileSync("README.md");
  const body = Deno.readTextFileSync("./static/text-file.md");
  return new Response(body);
};
