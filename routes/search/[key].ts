export default defineEventHandler((e) => {
  const name = getRouterParam(e, "key");

  return { hello: `${name}` };
});
