import { GenericResponse } from './Generics';

export type Transaction = {
    id: number;
    uuidRequest: string;
    deviceId: number;
    deviceUuid: string;
    companyId: number;
    companyToken: string;
    identification: string;
    dateDevice: string;
    idCYOE: string;
    tramite: string;
    transaccion: string;
    recibo: string;
    estado: string;
    createdAt: Date;
    updatedAt: Date;
};

type TransactionDataResponse = {
    count: number;
    items: Array<Transaction>;
};

export interface TransactionsReponse extends GenericResponse {
    data: TransactionDataResponse;
}
