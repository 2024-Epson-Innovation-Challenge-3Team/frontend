/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobEntity } from './JobEntity';
import type { PrintZoneEntity } from './PrintZoneEntity';
export type PrinterEntity = {
    id: string;
    printerName: string;
    printerAlarmFlag: boolean;
    printZone: PrintZoneEntity;
    jobs: Array<JobEntity>;
    modifyDate: string;
    createDate: string;
};

