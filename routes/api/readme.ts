import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  const body = await Deno.readTextFile("./README.md");
  return new Response(body);
};
