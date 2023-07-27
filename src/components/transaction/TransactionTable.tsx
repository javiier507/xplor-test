'use client';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
    Box,
    TableContainer,
    Badge,
} from '@chakra-ui/react';

import { Transaction } from '../../dtos/Transaction';

type TransactionTableProps = {
    columns: Array<string>;
    rows: Array<Transaction>;
    handleRowOnClick?: (id: string) => void;
};

export const TransactionsTable = ({
    columns,
    rows = [],
    handleRowOnClick,
}: TransactionTableProps) => {
    return (
        <Stack>
            <Box overflowX="scroll">
                <TableContainer>
                    <Table size={'sm'} variant="striped" colorScheme="gray">
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
                                    /* onClick={() => handleRowOnClick(item.id.toString())} */
                                    data-testid={item.id}
                                >
                                    <Td>{item.id}</Td>
                                    <Td>{item.identification}</Td>
                                    <Td>{item.idCYOE}</Td>
                                    <Td>{item.transaccion}</Td>
                                    <Td>
                                        <Badge color={'gray.900'}>{item.tramite}</Badge>
                                    </Td>
                                    <Td>{item.recibo}</Td>
                                    <Td>{item.dateDevice}</Td>
                                    <Td>
                                        <Badge colorScheme="orange">{item.estado}</Badge>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Stack>
    );
};
