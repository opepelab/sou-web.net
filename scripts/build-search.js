// build-search.js
const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");

async function getAllBlogPosts() {
  // write your code to fetch your data
}

function transformPostsToSearchObjects(posts) {
  const transformed = posts.map((post) => {
    return {
      objectID: post.sys.id,
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      topicsCollection: { items: post.topicsCollection.items },
      date: post.date,
      readingTime: post.readingTime,
      body: richTextPlainTextRenderer.documentToPlainTextString(post.body.json),
      codeBlocks: transformCodeBlocks(post.body.links?.entries?.block),
    };
  });

  return transformed;
}
(async function () {
  dotenv.config();

  try {
    const posts = await getAllBlogPosts();
    const transformed = transformPostsToSearchObjects(posts);

    // initialize the client with your environment variables
    const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_ADMIN_KEY);

    // initialize the index with your index name
    const index = client.initIndex("sou");

    // save the objects!
    const algoliaResponse = await index.saveObjects(transformed);

    // check the output of the response in the console
    console.log(
      `🎉 Sucessfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join("\n")}`
    );
  } catch (error) {
    console.log(error);
  }
})();
