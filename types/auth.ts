import { ApiResponse } from "@/utils/ApiResponse";

export interface SignUpPayload {
    name: string;
    email: string;
    password: string;
}

// user entity matches the data object returned by the backend
export interface User {
    newUser: {
        _id: string;
        name: string;
        email: string;
        password?: string;
        phoneNumber?: string;
        isEmailVerified: boolean;

        role: string; //* make it union: "admin" | "user"

        city?: string;
        pincode?: number;
        state?: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };

    otpId?: string;
}

export type SignUpResponse = ApiResponse<User>;

export interface VerifyEmailPayload {
    otpId: string;
    otp: string;
    userId: string;
}
