import { Alert, AlertIcon } from '@chakra-ui/react';

interface RequestMessageProps {
    isLoading: boolean;
    isError: boolean;
    data: any;
}

export const RequestMessage = ({ isLoading, isError, data }: RequestMessageProps) => {
    if (isLoading) {
        return (
            <Alert status="info">
                <AlertIcon />
                <p>Cargando...</p>
            </Alert>
        );
    }

    if (isError) {
        return (
            <Alert status="error">
                <AlertIcon />
                <p>Lo sentimos, ha ocurrido un error!</p>
            </Alert>
        );
    }

    if (!data) {
        return (
            <Alert status="error">
                <AlertIcon />
                <p>Lo sentimos, no podemos mostrar la información</p>
            </Alert>
        );
    }

    return null;
};
