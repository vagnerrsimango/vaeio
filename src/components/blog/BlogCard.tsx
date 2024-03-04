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
    <Link href={`/article/`}>
      <div className="block bg-blue-500 bg-opacity-75 rounded-lg shadow-xl overflow-hidden border-4 border-blue-400 transition duration-300 transform hover:scale-105 cursor-pointer">
        <div className="relative h-48">
          <Image
            src={post.image}
            alt="Blog Post"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Blog Content */}
        <div className="p-6">
          {/* Blog Title */}
          <h2 className="text-2xl font-semibold text-white mb-2">
            {post.title}
          </h2>
          {/* Blog Meta */}
          <div className="flex items-center text-white mb-2">
            <FaUser className="mr-1" />
            <span>{post.author}</span>
          </div>
          {/* Blog Date */}
          <p className="text-sm text-white mb-4">{post.date}</p>
          {/* Blog Excerpt */}
          <p className="text-white">{post.content}</p>
          {/* Read More Button */}
          <button className="mt-4 bg-white text-blue-500 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded">
            Ler Mais
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
