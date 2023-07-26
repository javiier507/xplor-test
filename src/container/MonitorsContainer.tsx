'use client';

import { Stack, Box } from '@chakra-ui/react';

import { MONITORS_COLUMNS } from '../constants/';
import { Montitor } from '../dtos/Monitor';

import { MonitorsTable } from '../components/monitor/MonitorTable';

type MonitorContainerProps = {
    monitors: Array<Montitor>;
};

export const MonitorsContainer = ({ monitors }: MonitorContainerProps) => {
    return (
        <Stack>
            <Box p={4} bg="white">
                <MonitorsTable
                    columns={MONITORS_COLUMNS}
                    rows={monitors}
                    handleRowOnClick={() => {}}
                />
            </Box>
        </Stack>
    );
};
