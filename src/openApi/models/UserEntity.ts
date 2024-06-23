/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileEntity } from './FileEntity';
import type { JobEntity } from './JobEntity';
import type { UploadEntity } from './UploadEntity';
export type UserEntity = {
    id: number;
    name: string;
    uploadFiles: Array<FileEntity>;
    uploads: Array<UploadEntity>;
    jobs: Array<JobEntity>;
    modifyDate: string;
    createDate: string;
};

