import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/lib/auth';
import { executeRequest } from '@/src/utils/request';
import { FetchChart } from '@/src/api/resources';
import { ChartResponse, ChartOptions, ChartData } from '@/src/dtos/Chart';

import { GenericContainer } from '@/src/components/elements/Container';
import { ChartComponent } from '@/src/components/elements/Chart';

async function getData() {
    const session = await getServerSession(authOptions);
    const user = session?.user || ({ apiJWT: null } as any);
    return executeRequest<ChartResponse>(FetchChart(user.apiJWT));
}

export default async function DashboardPage() {
    const response = await getData();

    const chartOtions: ChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            title: {
                display: true,
                text: 'Indicadores',
            },
        },
    };

    const chartData: ChartData = {
        labels: response?.data?.options?.xaxis?.categories || [],
        datasets: response?.data?.series?.map((item, index) => ({
            label: item.name,
            data: item.data,
            backgroundColor: response?.data?.options?.colors[index] || '',
        })),
    };

    return (
        <GenericContainer>
            <ChartComponent options={chartOtions} data={chartData} />
        </GenericContainer>
    );
}
