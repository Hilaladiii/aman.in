import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { useTokenServer } from "@/shared/usecase/useTokenServer";

export async function POST(req: NextRequest) {
  const { tag, path } = await req.json();
  const token = useTokenServer();
  if (!token) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  if (!tag || !path) {
    return NextResponse.json("Invalid revalidate tag & path", { status: 400 });
  }

  revalidateTag(tag);
  revalidatePath(path, "page");

  return NextResponse.json("Success Revalidate", { status: 200 });
}
