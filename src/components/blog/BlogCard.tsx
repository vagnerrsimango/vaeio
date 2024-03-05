import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  content: string;
}

const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link href={`/article/${post.id}`}>
      <div className="block bg-gray-100 text-black bg-opacity-90 rounded-lg shadow-lg overflow-hidden border border-gray-300 transition duration-300 transform hover:scale-105 cursor-pointer text-left w-80 h-96">
        <div className="relative h-32">
          <Image
            src={post.image}
            alt="Blog Post"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        {/* Blog Content */}
        <div className="p-4">
          {/* Blog Title */}
          <h2 className="text-xl font-semibold text-black mb-2">
            {post.title}
          </h2>
          {/* Blog Meta */}
          <div className="flex items-center text-black mb-2">
            <FaUser className="mr-1 text-sm" />
            <span className="text-sm">{post.author}</span>
          </div>
          {/* Blog Date */}
          <p className="text-xs text-black mb-4">{post.date}</p>
          {/* Blog Excerpt */}
          <p className="text-black overflow-hidden line-clamp-3">
            {post.content}
          </p>
          {/* Read More Button */}
          <button className="mt-4 bg-blue-500 text-white hover:bg-blue-600 font-semibold py-1 px-2 rounded">
            Ler Mais
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
