"use server";

import db from "@/db";
import { redirect } from "next/navigation";

export async function submitPost (inputs: FormData){
    const title = inputs.get('title') as string;
    const description = inputs.get('description') as string;
    console.log(title, description);

    await db.post.create({
        data:{
            title: title,
            description: description        }
    })

    redirect('/admin/blog')
}