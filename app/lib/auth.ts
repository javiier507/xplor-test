import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { executeRequest } from '@/src/utils/request';
import { LoginResponse } from '@/src/dtos/Login';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@example.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const response = await executeRequest<LoginResponse>(
                        fetch('http://127.0.0.1:8080/auth/login', {
                            method: 'POST',
                            body: JSON.stringify({
                                email: credentials?.email,
                                password: credentials?.password,
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        }),
                    );

                    return {
                        id: response.data.user._id.toString(),
                        name: response.data.user.name,
                        email: response.data.user.name,
                        apiJWT: response.data.token,
                    };
                } catch (e) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    apiJWT: token.apiJWT,
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    apiJWT: u.apiJWT,
                };
            }
            return token;
        },
    },
};
