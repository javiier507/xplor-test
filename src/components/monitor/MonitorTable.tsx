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
    Badge,
    TableContainer,
} from '@chakra-ui/react';

import { Montitor } from '../../dtos/Monitor';

type MonitorProps = {
    columns: Array<string>;
    rows: Array<Montitor>;
    handleRowOnClick?: (id: string) => void;
};

export const MonitorsTable = ({ columns, rows = [], handleRowOnClick }: MonitorProps) => {
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
                            {rows.map((item, index) => (
                                <Tr
                                    key={item._id}
                                    _hover={{
                                        /* backgroundColor: 'gray.50', */
                                        cursor: 'pointer',
                                    }}
                                    /* onClick={() => handleRowOnClick(item._id.toString())} */
                                    data-testid={item._id}
                                >
                                    <Td>{index + 1}</Td>
                                    <Td>{item.name}</Td>
                                    <Td>{item.ip}</Td>
                                    <Td>{item.platform}</Td>
                                    <Td>{item.orientation}</Td>
                                    <Td>
                                        {item.latitud}
                                        <br />
                                        {item.longitud}
                                    </Td>
                                    <Td>
                                        {item.status === 'offline' ? (
                                            <Badge colorScheme="red">{item.status}</Badge>
                                        ) : (
                                            <Badge>{item.status}</Badge>
                                        )}
                                        <br />
                                        {item.lastSincronization}
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
