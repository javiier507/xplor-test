type HttpResponse<T> = {
    data: T | null;
    error?: any;
};

export async function makeRequest<T>(promiseRequest: Promise<Response>): Promise<HttpResponse<T>> {
    return new Promise((resolve) => {
        promiseRequest
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Server Error: ${response.status}`);
                }
                return response.json();
            })
            .then((data) =>
                resolve({
                    data: data as T,
                    error: null,
                }),
            )
            .catch((error) =>
                resolve({
                    data: null,
                    error,
                }),
            );
    });
}

export async function executeRequest<T>(promiseRequest: Promise<Response>): Promise<T> {
    return new Promise((resolve, reject) => {
        promiseRequest
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Server Error: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => resolve(data as T))
            .catch((error) => reject(error));
    });
}
