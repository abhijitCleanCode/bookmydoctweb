import { LoginPayload, LoginResponse, SignUpPayload, SignUpResponse, VerifyEmailPayload } from "@/types/auth";
import { ApiError, ApiErrorResponse } from "@/utils/ApiError";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function signUpApi ({name, email, password}: SignUpPayload): Promise<SignUpResponse> {
    const response = await fetch(`${baseUrl}/api/v1/user/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password})
    });

    const data = await response.json();

    if (!response.ok) {
        const errorData = data as ApiErrorResponse;

        // throwing an error here trigger the onError call back in tanstack query
        throw new ApiError(errorData);
    };

    return data as SignUpResponse;
}

export async function verifyEmailApi ({ otpId, otp, userId }: VerifyEmailPayload) {
    const response = await fetch(`${baseUrl}/api/v1/user/verify-email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ otpId, otp, userId })
    });

    const data = await response.json();

    if (!response.ok) {
        const errorData = data as ApiErrorResponse;

        throw new ApiError(errorData);
    }

    return data;
}

export async function loginApi({email, password }: LoginPayload): Promise<LoginResponse> {
    const response = await fetch(`${baseUrl}/api/v1/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    });

    const data = await response.json();

    if (!response.ok) {
        const errorData = data as ApiErrorResponse;

        throw new ApiError(errorData);
    }

    return data;
}
