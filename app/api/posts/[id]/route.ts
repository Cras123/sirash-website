import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import connectDB from "@/lib/mongodb";
import Post from "@/models/post";
import { generateUniqueSlug } from "@/lib/blog";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();
  const body = await req.json();
  let slugUpdate = {};
  if (typeof body.title === "string" && body.title.trim()) {
    const slug = await generateUniqueSlug(body.title, async (candidate) => {
      const existing = await Post.findOne({ slug: candidate, _id: { $ne: id } }).lean();
      return Boolean(existing);
    });
    slugUpdate = { slug };
  }

  const post = await Post.findByIdAndUpdate(id, { ...body, ...slugUpdate }, { new: true });
  return NextResponse.json(post);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();
  await Post.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
