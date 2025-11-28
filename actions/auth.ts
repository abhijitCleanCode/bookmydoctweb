"use server"

import { cookies } from "next/headers";
import { ApiError, ApiErrorResponse } from "@/utils/ApiError";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function me() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const response = await fetch(`${baseUrl}/api/v1/auth/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });

    const data = await response.json();

    if (!response.ok) {
        const errorData = data as ApiErrorResponse;

        throw new ApiError(errorData);
    }

    return data;
}
