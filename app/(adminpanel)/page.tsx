import { executeRequest } from '@/src/utils/request';
import { ChartResponse, ChartOptions, ChartData } from '@/src/dtos/Chart';

import { GenericContainer } from '@/src/components/elements/Container';
import { ChartComponent } from '@/src/components/elements/Chart';

async function getData() {
    return executeRequest<ChartResponse>(
        fetch('http://127.0.0.1:8080/transaction-device/dashboard-device-chart', {
            method: 'POST',
            cache: 'no-store',
        }),
    );
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
