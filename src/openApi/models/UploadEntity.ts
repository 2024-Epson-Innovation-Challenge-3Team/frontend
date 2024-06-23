/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileEntity } from './FileEntity';
import type { JobEntity } from './JobEntity';
import type { UPLOAD_STATUS } from './UPLOAD_STATUS';
import type { UserEntity } from './UserEntity';
export type UploadEntity = {
    id: number;
    media_size: ;
    media_type: any;
    borderless: boolean;
    print_quality: any;
    source: ;
    color_mode: ;
    '2_sided': any;
    reverse_order: boolean;
    copies: number;
    collate: boolean;
    status: UPLOAD_STATUS;
    printerJobId: string;
    page_cnt?: number;
    files: Array<FileEntity>;
    user: UserEntity;
    userId: number;
    job?: JobEntity;
    modifyDate: string;
    createDate: string;
};

