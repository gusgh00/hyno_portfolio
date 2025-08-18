export interface AccountInfoInterface {
    account_number: string,
    bank_code: string,
    owner: string,
    masking: boolean
}

export interface AccountResultInterface {
    account_number: string,
    bank_name: string,
    result: string,
}

export interface BankListNumberInterface {
    number_count: number,
    structure: number[]
}

export interface BankListInterface {
    account_name: string,
    bank_code: string,
    account_number_list: BankListNumberInterface[],
}