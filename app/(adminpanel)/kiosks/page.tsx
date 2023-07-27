import { executeRequest } from '@/src/utils/request';
import { MontitorsResponse } from '@/src/dtos/Monitor';
import { MONITORS_COLUMNS } from '@/src/constants/';

import { GenericContainer } from '@/src/components/elements/Container';
import { MonitorsTable } from '@/src/components/monitor/MonitorTable';

async function getData() {
    return executeRequest<MontitorsResponse>(
        fetch('http://127.0.0.1:8080/device/monitor', {
            method: 'POST',
            cache: 'no-store',
        }),
    );
}

export default async function KiosksPage() {
    const data = await getData();

    return (
        <GenericContainer>
            <MonitorsTable
                columns={MONITORS_COLUMNS}
                rows={data.data}
                handleRowOnClick={null as any}
            />
        </GenericContainer>
    );
}
