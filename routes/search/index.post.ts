import algoliasearch from "algoliasearch";
// Connect and authenticate with your Algolia app
const client = algoliasearch("7RC58V1YX8", "37c59621e1c7b8bbba39d600a81f8399");

// Create a new index and add a record
const index = client.initIndex("dia_data_rec");

export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  const re = await index
    .search(`${body.key}`, { hitsPerPage: 10 })
    .then(({ hits }) => hits);

  return re;
});
