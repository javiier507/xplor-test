'use client';

import { useState } from 'react';
import { Flex, Stack, useColorModeValue, Box } from '@chakra-ui/react';

import { makeRequest } from '../../src/utils/request';
import { LoginRequest, LoginResponse } from '../../src/dtos/Login';

import { LoginForm } from '../../src/components/login/LoginForm';
import { Message } from '../../src/components/elements/Message';

async function login(values: LoginRequest) {
    return makeRequest<LoginResponse>(
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    );
}

export default function Page() {
    const [loginError, setErrorLogin] = useState<boolean>(false);

    const handleLogin = async (values: LoginRequest) => {
        const { data, error } = await login(values);
        setErrorLogin(!!error);
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
                <Box>
                    {loginError ? (
                        <Message status="error" text={'Lo sentimos, no se ha podido acceder'} />
                    ) : null}
                </Box>
            </Stack>
        </Flex>
    );
}
