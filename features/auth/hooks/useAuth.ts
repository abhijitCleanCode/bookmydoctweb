import { me } from "@/actions/auth";
import { useQuery } from "@tanstack/react-query";

export function useAuth() {
    const query = useQuery({
        queryKey: ["auth", "me"], // single source of truth for auth state
        queryFn: me,
        retry: false,          // avoid infinite ping when not logged in
        staleTime: 5 * 60_000, // tune as needed
    })

    return {
        user: query.data ?? null,
        isAuthenticated: !!query.data,
        isLoading: query.isLoading,
        error: query.error,
    };
}
