
const richTextPlainTextRenderer = require("@contentful/rich-text-plain-text-renderer");

const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");

const entries = await client.getEntries({
  content_type: "blog",
  order: "-fields.date",
  limit: 1000,
});

function All(blogs) {
  entries.items.map((blog) => {
    return {
      title: blog.fields.title,
      description: blog.fields.description,
      body: richTextPlainTextRenderer.documentToPlainTextString(blog.fields.body),
      date: new Date(blog.fields.date),
      url: `https://sou-web.net/${`/docs/${blog.fields.slug}`}`,
    };
  });

  return entries;
}

(async function () {
  dotenv.config();

try {
  const blogs = await client.getEntries();
  const entries = All(blogs);

  // initialize the client with your environment variables
  const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_ADMIN_KEY);

  // initialize the index with your index name
  const index = client.initIndex("sou");

  // save the objects!
  const algoliaResponse = await index.saveObjects(entries);

  // check the output of the response in the console
  console.log(
    `🎉 Sucessfully added ${
      algoliaResponse.objectIDs.length
    } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join("\n")}`
  );
} catch (error) {
  console.log(error);
}
