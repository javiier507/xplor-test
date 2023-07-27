import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/lib/auth';
import { executeRequest } from '@/src/utils/request';
import { FetchKioks } from '@/src/api/resources';
import { MontitorsResponse } from '@/src/dtos/Monitor';
import { MONITORS_COLUMNS } from '@/src/constants/';

import { GenericContainer } from '@/src/components/elements/Container';
import { MonitorsTable } from '@/src/components/monitor/MonitorTable';

async function getData() {
    const session = await getServerSession(authOptions);
    const user = session?.user || ({ apiJWT: null } as any);
    return executeRequest<MontitorsResponse>(FetchKioks(user.apiJWT));
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
