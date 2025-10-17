// lib/mongodb.ts
import "server-only";
import mongoose from "mongoose";

type Cached = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var _mongooseCache: Cached | undefined;
}

const cached: Cached = global._mongooseCache || { conn: null, promise: null };
if (!global._mongooseCache) global._mongooseCache = cached;

export default async function connectDB() {
  if (cached.conn) return cached.conn;

  const uri = process.env.MONGODB_URI; // <-- read **here**, not at top
  if (!uri) throw new Error("Missing MONGODB_URI"); // now thrown at runtime, not build

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, { bufferCommands: false });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
