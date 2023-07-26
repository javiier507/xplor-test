import { GenericResponse } from './Generics';

export type Montitor = {
    _id: number;
    name: string;
    ip: string;
    platform: string;
    orientation: string;
    latitud: number;
    longitud: number;
    status: string;
    createdAt: Date;
    lastSincronization: string;
};

export interface MontitorsResponse extends GenericResponse {
    data: Array<Montitor>;
}
