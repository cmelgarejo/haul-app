import { API_BASE_URL } from "@web/config/config";

const headers = { "Content-Type": "application/json" };
const options = { headers } as RequestInit;

export async function GET(req: Request, { params }: { params: { vin: string } }) {
  try {
    const vin = params.vin;
    if (process.env.NODE_ENV !== "development") options.next = { revalidate: 86400 }; // 24h cache revalidation
    else options.cache = "no-cache";
    const result = await fetch(`${API_BASE_URL}decode-vin/${vin}`, options);
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
