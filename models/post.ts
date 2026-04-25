import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  createdAt: Date;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    readTime: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.models.Post ||
  mongoose.model<IPost>("Post", PostSchema);
