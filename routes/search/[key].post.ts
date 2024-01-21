export default defineEventHandler(async (e) => {
  const name = getRouterParam(e, "key");
  const body = await readBody(e);

  return { hello: `${name}${body.name}` };
});
