import { Stack, Button } from '@chakra-ui/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { PaginationBase } from '../../dtos/Generics';

// the currentPage start in zero

export interface PaginationProps extends PaginationBase {
    handleSetPage: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, handleSetPage }: PaginationProps) => {
    const setFirstPage = () => {
        handleSetPage(0);
    };

    const setPrevPage = () => {
        let page = currentPage - 1;
        page = page < 0 ? 0 : page;
        handleSetPage(page);
    };

    const setNextPage = () => {
        let page = currentPage + 1;
        page = page >= totalPages ? totalPages - 1 : page;
        handleSetPage(page);
    };

    const setLastPage = () => {
        handleSetPage(totalPages - 1);
    };

    return (
        <Stack direction="row">
            <Button
                colorScheme="cyan"
                size="sm"
                onClick={setFirstPage}
                disabled={currentPage === 0}
            >
                {1}
            </Button>
            <Button
                colorScheme="cyan"
                size="sm"
                leftIcon={<FiArrowLeft />}
                onClick={setPrevPage}
                disabled={currentPage === 0}
                data-testid={'buttonPrev'}
            >
                {''}
            </Button>
            <Button colorScheme="cyan" size="sm" variant="outline" disabled={true}>
                {currentPage + 1}
            </Button>
            <Button
                colorScheme="cyan"
                size="sm"
                leftIcon={<FiArrowRight />}
                onClick={setNextPage}
                disabled={currentPage === totalPages - 1}
                data-testid={'buttonNext'}
            >
                {''}
            </Button>
            <Button
                colorScheme="cyan"
                size="sm"
                onClick={setLastPage}
                disabled={currentPage === totalPages - 1}
            >
                {totalPages}
            </Button>
        </Stack>
    );
};
