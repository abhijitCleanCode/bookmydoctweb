import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../services/auth.api";

export function useSignUp() {
    return useMutation({
        mutationFn: signUpApi,
        onSuccess: (data) => {
            console.log("Sign up successful :: data: ", data);
            // handle success: redirect, show toast, open otp model
        },
        onError: (error) => {
            console.log("Sign up failed :: error: ", error);
            // handle error: show toast
        },
    })
}
