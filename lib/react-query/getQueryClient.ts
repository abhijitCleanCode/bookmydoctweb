import { isServer, QueryClient } from '@tanstack/react-query'

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    })
}

// using outside of React life cycle rendering
let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient() {
    if (isServer) {
        // always make a new query client on server
        return makeQueryClient()
    } else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient()
        return browserQueryClient
    }
}
