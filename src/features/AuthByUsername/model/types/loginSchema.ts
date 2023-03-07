export interface LoginSchema {
    username: string;
    password: string;
    isLoggingIn: boolean;
    error?: string;
}
