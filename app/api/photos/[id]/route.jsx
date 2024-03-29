import { getPhotosById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params.id;
  const photo = getPhotosById(id);
  return NextResponse.json(photo);
}
