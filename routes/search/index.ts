export default defineEventHandler((e) => {
  const name = getRouterParam(e, "name");

  return { hello: `${name}` };
});
