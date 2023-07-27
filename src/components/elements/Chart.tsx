'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { ChartOptions, ChartData } from '@/src/dtos/Chart';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type ChartComponentProps = {
    options: ChartOptions;
    data: ChartData;
};

export const ChartComponent = ({ options, data }: ChartComponentProps) => (
    <Line options={options as any} data={data} />
);
