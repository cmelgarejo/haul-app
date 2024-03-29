import { NextRequest } from "next/server";
import { API_BASE_URL } from "@web/config/config";
export const dynamic = "force-dynamic"; // https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic

const headers = { "Content-Type": "application/json" };
const options = { headers } as RequestInit;

export async function GET(req: NextRequest) {
  try {
    if (process.env.NODE_ENV !== "development") options.next = { revalidate: 86400 }; // 24h cache revalidation
    else options.cache = "no-cache";
    const qs = req.nextUrl.searchParams.toString();
    const result = await fetch(`${API_BASE_URL}inspections${qs ? `?${qs}` : ""}`, options);
    return Response.json(await result.json());
  } catch (error: any) {
    console.error(error);
    const error_response = {
      status: error.name,
      message: error.message,
    };
    return new Response(JSON.stringify(error_response), {
      status: 500,
      headers,
    });
  }
}
