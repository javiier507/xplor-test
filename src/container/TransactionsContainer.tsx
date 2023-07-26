'use client';

import { Stack, Box } from '@chakra-ui/react';

import { TRANSACTIONS_COLUMNS } from '../constants/';
import { Transaction } from '../dtos/Transaction';

import { TransactionsTable } from '../components/transaction/TransactionTable';

type MonitorContainerProps = {
    transactions: Array<Transaction>;
};

export const TransactionsContainer = ({ transactions }: MonitorContainerProps) => {
    return (
        <Stack>
            <Box p={4} bg="white">
                <TransactionsTable
                    columns={TRANSACTIONS_COLUMNS}
                    rows={transactions}
                    handleRowOnClick={() => {}}
                />
            </Box>
        </Stack>
    );
};
