'use client';

import { useState } from 'react';
import { Flex, Stack, useColorModeValue, Box } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useSearchParams, useRouter } from 'next/navigation';

import { LoginRequest } from '../dtos/Login';

import { LoginForm } from '../components/login/LoginForm';
import { Message } from '../components/elements/Message';

export const LoginContainer = () => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const handleLogin = async (values: LoginRequest) => {
        try {
            setLoading(true);

            const response = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
                callbackUrl,
            });

            if (!response?.error) {
                router.push(callbackUrl);
            } else {
                setError('Invalid email or password!');
            }
        } catch (e) {
            setError('Sorry, something has gone wrong. Please try again later');
        } finally {
            setLoading(false);
        }
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
                    {loading ? <Message status="info" text="Autenticando..." /> : null}
                    {error ? <Message status="error" text={error} /> : null}
                </Box>
            </Stack>
        </Flex>
    );
};
