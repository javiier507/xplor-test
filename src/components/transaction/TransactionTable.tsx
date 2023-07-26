'use client';

import { Table, Thead, Tbody, Tr, Th, Td, Stack, Box } from '@chakra-ui/react';

import { Transaction } from '../../dtos/Transaction';

type TransactionTableProps = {
    columns: Array<string>;
    rows: Array<Transaction>;
    handleRowOnClick: (id: string) => void;
};

export const TransactionsTable = ({
    columns,
    rows = [],
    handleRowOnClick,
}: TransactionTableProps) => {
    return (
        <Stack>
            <Box overflowX="scroll">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            {columns.map((item) => (
                                <Th key={item}>{item}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {rows.map((item) => (
                            <Tr
                                key={item.id}
                                _hover={{
                                    backgroundColor: 'gray.50',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleRowOnClick(item.id.toString())}
                                data-testid={item.id}
                            >
                                <Td>{item.id}</Td>
                                <Td>{item.identification}</Td>
                                <Td>{item.idCYOE}</Td>
                                <Td>{item.transaccion}</Td>
                                <Td>{item.tramite}</Td>
                                <Td>{item.recibo}</Td>
                                <Td>{item.dateDevice}</Td>
                                <Td>{item.estado}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Stack>
    );
};
