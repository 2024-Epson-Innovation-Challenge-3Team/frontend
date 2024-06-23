/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JOB_STATUS } from './JOB_STATUS';
import type { PrinterEntity } from './PrinterEntity';
import type { PrintZoneEntity } from './PrintZoneEntity';
import type { UploadEntity } from './UploadEntity';
import type { UserEntity } from './UserEntity';
export type JobEntity = {
    id: number;
    status: JOB_STATUS;
    printZone: PrintZoneEntity;
    printer?: PrinterEntity;
    uploads: Array<UploadEntity>;
    user: UserEntity;
    modifyDate: string;
    createDate: string;
};

