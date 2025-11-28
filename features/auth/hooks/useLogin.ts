import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "../services/auth.api";

export function useLogin() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            console.log("Login successful :: data: ", data);
            queryClient.setQueryData(['auth', 'me'], data);
        },
        onError: (error) => {
            console.log("Login failed :: error: ", error);
            // handle error: show toast
        },
    });
}
