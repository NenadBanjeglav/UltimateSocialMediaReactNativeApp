import dummyPosts from "@/dummyPosts";
import { neon } from "@neondatabase/serverless";

const sql = neon(
  "postgresql://neondb_owner:npg_9ONaURlAw0DL@ep-crimson-darkness-a2dj0y9m-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require"
);

export async function GET(request: Request) {
  //read posts from db
  const posts = dummyPosts;

  //test db connectiong

  const result = await sql`SELECT version()`;
  console.log(result);

  return Response.json({ posts });
}

export async function POST(request: Request) {
  const { content } = await request.json();

  try {
    const newPost = {
      id: 123,
      content,
      user_id: "user_id",
    };

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response("Error creating a post", { status: 500 });
  }
}
