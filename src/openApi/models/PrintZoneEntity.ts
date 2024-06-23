/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobEntity } from './JobEntity';
import type { PrinterEntity } from './PrinterEntity';
export type PrintZoneEntity = {
    id: number;
    zone_name: string;
    lo: string;
    la: string;
    address: string;
    printers: Array<PrinterEntity>;
    jobs: Array<JobEntity>;
    modifyDate: string;
    createDate: string;
};

