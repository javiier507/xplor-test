'use client';

import { Box, Stack } from '@chakra-ui/react';

import { makeRequest } from '../../../src/utils/request';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

async function getData() {
    return makeRequest<Post[]>(
        fetch('https://jsonplaceholder.typicode.com/posts', {
            cache: 'no-store',
        }),
    );
}

export default async function KiosksPage() {
    const { data, error } = await getData();
    return (
        <Stack px={8}>
            <h1>Kiosks Page!</h1>
            {error ? (
                <strong>Lo sentimos ha ocurrido un error</strong>
            ) : (
                <ol>
                    {data?.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ol>
            )}
        </Stack>
    );
}
