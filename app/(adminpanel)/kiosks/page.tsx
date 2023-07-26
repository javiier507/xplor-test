import { executeRequest } from '../../../src/utils/request';
import { MontitorsResponse } from '../../../src/dtos/Monitor';

import { MonitorsContainer } from '../../../src/container/MonitorsContainer';

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

    return <MonitorsContainer monitors={data.data} />;
}
