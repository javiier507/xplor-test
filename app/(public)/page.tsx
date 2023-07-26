'use client';

import { useState } from 'react';
import { Flex, Stack, useColorModeValue, Box } from '@chakra-ui/react';
/* import { useMutation, useQueryClient } from 'react-query';
import axios, { AxiosResponse, AxiosError } from 'axios'; */

/* import { useAuth } from '../hooks/useAuth'; */
import { LoginRequest, LoginResponse } from '../../src/dtos/Login';
/* import { LoginApi, GetAuthUserApi } from '../api/resources';
import { ROLES } from '../constants';
import { AuthorizationError } from '../utils/exceptions'; */

import { LoginForm } from '../../src/components/login/LoginForm';
import { Message } from '../../src/components/elements/Message';

export default function Page() {
    /* const queryClient = useQueryClient();
    const [authErrorMessage, setAuthErrorMessage] = useState<string>();

    const loginMutation = useMutation<AxiosResponse<LoginResponse>, unknown, LoginRequest>(
        (loginData) => LoginApi(loginData),
    ); */

    const handleLogin = async (values: LoginRequest) => {
        /* try {
            const { data } = await loginMutation.mutateAsync(values);
            handleSetToken(data.accessToken); */
        /** @todo: get status and role from accessToken */
        /* const { data: authUser } = await queryClient.fetchQuery('authUser', GetAuthUserApi);

            if (!authUser.status) {
                throw new AuthorizationError('Su cuenta esta deshabilitada');
            }
            if (ROLES.ADMIN !== authUser.role) {
                throw new AuthorizationError('Su rol no esta autorizado para acceder');
            }
            handleSetUser(authUser);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                const statusError = e as AxiosError;
                if (statusError.response?.status === 401) {
                    setAuthErrorMessage('Credenciales Incorrecta. Intente nuevamente');
                } else {
                    setAuthErrorMessage('Lo sentimos. No se puede acceder');
                }
            } else {
                if (e instanceof AuthorizationError) {
                    setAuthErrorMessage(e.message);
                } else {
                    setAuthErrorMessage('Lo sentimos. No se puede acceder');
                }
            }
        } */
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <LoginForm handleForm={handleLogin} />
                {/* <Box>
                    {loginMutation.isLoading ? (
                        <Message status="info" text="Autenticando..." />
                    ) : null}
                    {authErrorMessage ? <Message status="error" text={authErrorMessage} /> : null}
                </Box> */}
            </Stack>
        </Flex>
    );
}
