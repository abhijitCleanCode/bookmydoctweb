export interface ApiErrorResponse {
    success: boolean;
    message: string;
    // error stack is optional as in prod env backend often hides it for security reasons
    error?: {
        name: string;
        stack?: string;
    };
    path: string;
    timestamp: string;
}

export class ApiError extends Error {
    public data: ApiErrorResponse;

    constructor(data: ApiErrorResponse) {
        super(data.message); // sets the standard error message
        this.data = data;
        this.name = "ApiError";
    }
}
