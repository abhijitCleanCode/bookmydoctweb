import { useMutation } from "@tanstack/react-query";
import { verifyEmailApi } from "../services/auth.api";

export function useVerifyEmail() {
    return useMutation({
        mutationFn: verifyEmailApi,
        onSuccess: (data) => {
            console.log("Verify email successful :: data: ", data);
            // handle success: redirect, show toast
        },
        onError: (error) => {
            console.log("Verify email failed :: error: ", error);
            // handle error: show toast
        },
    })
}
