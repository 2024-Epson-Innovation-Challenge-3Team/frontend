/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserEntity } from './UserEntity';
export type FileEntity = {
    id: number;
    orgFileName: string;
    fileName: string;
    fileSize: number;
    fileExtension: string;
    uploader: UserEntity;
    upload: UserEntity;
    modifyDate: string;
    createDate: string;
};

