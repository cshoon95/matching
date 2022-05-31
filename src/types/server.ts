export interface TRunInfo {
    errorPass: boolean;
    tranName: tranNameType
}

export type tranNameType = keyof typeof interfaces;