import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../services/auth.api";

export function useLogin() {
    return useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            console.log("Login successful :: data: ", data);
            // handle success: redirect, show toast
        },
        onError: (error) => {
            console.log("Login failed :: error: ", error);
            // handle error: show toast
        },
    });
}
