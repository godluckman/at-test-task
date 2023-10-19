export interface BalanceResponse {
    currency: string;
    amount: number;
}
export interface AccountInfo {
    code: number;
    data: {
        balance: BalanceResponse[];
        paymaster: { id: string; title: string }[];
        stripe: { id: string; title: string }[];
    };
}
