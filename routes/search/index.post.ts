import algoliasearch from "algoliasearch";
export default defineEventHandler(async (e) => {
  const client = algoliasearch(
    "7RC58V1YX8",
    "057e31cae71e01dd2377af87dd1e8f17",
  );
  const index = client.initIndex("dia_data");
  const body = await readBody(e);
  const re = await index
    .search(`${body.key}`, { hitsPerPage: 10 })
    .then(({ hits }) => hits);
  const data = re.map((item) => {
    delete (item as any)._highlightResult;
    return item;
  });
  return data;
});
