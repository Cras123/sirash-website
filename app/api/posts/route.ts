import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import connectDB from "@/lib/mongodb";
import Post from "@/models/post";
import { generateUniqueSlug } from "@/lib/blog";

export async function GET() {
  await connectDB();
  const posts = await Post.find().sort({ createdAt: -1 });
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();
  const body = await req.json();
  const slug = await generateUniqueSlug(body.title, async (candidate) => {
    const existing = await Post.findOne({ slug: candidate }).lean();
    return Boolean(existing);
  });
  const post = await Post.create({ ...body, slug });
  return NextResponse.json(post, { status: 201 });
}
