export default eventHandler(async (e) => {
  const t = getRouterParam(e, "name");

  console.log(t);
  return { nitro: "Is Awesome!" };
});
