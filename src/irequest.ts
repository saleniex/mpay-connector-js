export interface IRequest {
    serviceId: string;
    amount: number;
    currency: string;
    summary: string;
    returnUrl: string;
    resultUrl: string;
    firstName: string;
    lastName: string;
    email: string;
    language: string;
    user?: string;
    timestamp?: string;
    signature?: string;
}
