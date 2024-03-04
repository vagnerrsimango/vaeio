// pages/article/[id].js

import { useRouter } from "next/router";

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch article data based on the ID
  // You can use this ID to fetch data from your API or database

  return (
    <div>
      <h1>Article {id}</h1>
      {/* Display article content here */}
    </div>
  );
};

export default ArticlePage;
