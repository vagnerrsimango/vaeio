import React from "react";
import BlogCard from "./blog/BlogCard";

const ArticleModal = ({ blogData, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Todos os Artigos</h2>
        <div className="grid grid-cols-1 gap-4">
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ArticleModal;
