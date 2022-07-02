import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const body = Deno.readTextFileSync("./README.md");
  return new Response(body);
};
