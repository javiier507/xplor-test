'use client';

import { Button } from '@chakra-ui/react';

import { Message } from '@/src/components/elements/Message';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div>
            <Message status="error" text="Something went wrong!" />
            <Button bg="gray.300" mt={8} onClick={() => reset()}>
                Try again
            </Button>
        </div>
    );
}
