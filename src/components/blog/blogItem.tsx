"use server";
import Image from "next/image";
import author from "@/lib/img/miacouto.jpg";
import db from "@/db";

export default async function BlogItem() {
  const posts = await db.post.findMany();
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col items-center h-30 w-60 m-10 p-4 bg-gradient-radial"
        >
          <Image
            src={author}
            alt="logo"
            width={300}
            height={300}
            className="mb-2"
          />{" "}
          <div className="text-center">
            <p className="text-primary-0 mt-2 text-sm">20/20/20</p>
            <p className="text-primary-0 mt-2 font-bold text-sm">
              {post.title}
            </p>
          </div>
          <div className={`mt-2 p-2 mb-4 text-center`}>
            <p className="text-gray-30 text-xs">{post.description}</p>
          </div>
          <div className="flex items-center mt-2 text-primary-0">
            <div className="rounded-full overflow-hidden mr-2">
              <Image src={author} alt="author icon" className="w-8 h-8" />
            </div>
            <div className="text-left">
              <p className="text-xs">VAE.IO</p>
              <p className="text-xs">Tech</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
