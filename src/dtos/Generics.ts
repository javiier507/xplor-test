export interface GenericResponse {
    success: boolean;
}

export interface PaginationBase {
    currentPage: number;
    totalRecords: number;
    totalPages: number;
}

export interface PaginationResponse<T> extends PaginationBase {
    items: Array<T>;
}

export interface JwtResponse {
    exp: number;
    iat: number;
    sub: string;
}

export interface AttachmentResponse {
    id: number;
    filename: string;
}
