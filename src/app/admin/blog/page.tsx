import { submitPost } from "@/actions/blogAction";
import Header from "@/components/admin/Header";
import db from "@/db";
import {
  Button,
  Divider,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";

export default async function AdminBlog() {
  const posts = await db.post.findMany(); //select*from all posts
  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-2 px-8 py-4">
        <div className="col-span-3">
          {posts.map((post) => (
            <div className="border border-gray-20 max-w-2xl p-2 " key={post.id}>
              <h2 className="font-bold">{post.title} </h2>
              <p>{post.description}</p>

              <p>20/02/2023</p>
            </div>
          ))}
        </div>
        <div>
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button>Criar</Button>
            </PopoverTrigger>

            <PopoverContent className="py-8 px-12 w-full">
              <form action={submitPost}>
                <Input
                  name="title"
                  placeholder="Titulo"
                  label="Insira o titulo do blog"
                  labelPlacement="outside"
                />
                <Textarea
                  name="description"
                  placeholder="Descricao"
                  label="Insira a descricao do blog"
                  labelPlacement="outside"
                />
                <Button type="submit">Submeter</Button>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
