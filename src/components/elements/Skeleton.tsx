import { SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react';

export const Skeleton = () => (
    <Box padding="6" boxShadow="lg" bg="white" data-testid={'skeleton'}>
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={8} spacing="4" />
    </Box>
);
