import { GenericResponse } from './Generics';

export interface ChartResponse extends GenericResponse {
    data: Data;
}

export interface Data {
    titleSpanish: string;
    titleEnglish: string;
    title: string;
    options: Options;
    series: Series[];
}

export interface Options {
    chart: Chart;
    plotOptions: PlotOptions;
    dataLabels: DataLabels;
    xaxis: Xaxis;
    legend: Legend;
    fill: Fill;
    colors: string[];
}

export interface Chart {
    height: number;
    type: string;
    stacked: boolean;
    toolbar: Toolbar;
    zoom: DataLabels;
}

export interface Toolbar {
    show: boolean;
}

export interface DataLabels {
    enabled: boolean;
}

export interface Fill {
    opacity: number;
}

export interface Legend {
    position: string;
}

export interface PlotOptions {
    bar: Bar;
}

export interface Bar {
    horizontal: boolean;
    columnWidth: string;
    endingShape: string;
}

export interface Xaxis {
    categories: string[];
}

export interface Series {
    name: string;
    data: number[];
}

// Chart.js

export interface ChartOptions {
    responsive: boolean;
    plugins: Plugins;
}

export interface Plugins {
    legend: Legend;
    title: Title;
}

export interface Legend {
    position: string;
}

export interface Title {
    display: boolean;
    text: string;
}

type Dataset = {
    label: string;
    data: number[];
    backgroundColor: string;
};

export type ChartData = {
    labels: string[];
    datasets: Dataset[];
};
