'use client';

import { Stack, Box } from '@chakra-ui/react';

export const GenericContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Stack>
            <Box p={4} bg="white">
                {children}
            </Box>
        </Stack>
    );
};
