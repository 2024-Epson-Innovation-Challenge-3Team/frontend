/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetUploadedFilesRes } from '../models/GetUploadedFilesRes';
import type { UploadFileRes } from '../models/UploadFileRes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UploadService {
    /**
     * @param formData
     * @returns any
     * @throws ApiError
     */
    public static postUploads(
        formData: UploadFileRes,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/uploads',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @returns number
     * @throws ApiError
     */
    public static getUsersUploadsCount(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/uploads/count',
        });
    }
    /**
     * @returns GetUploadedFilesRes
     * @throws ApiError
     */
    public static getUsersUploads(): CancelablePromise<Array<GetUploadedFilesRes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/uploads',
        });
    }
    /**
     * @param uploadId
     * @returns boolean
     * @throws ApiError
     */
    public static deleteUsersUploads(
        uploadId: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/uploads/{uploadId}',
            path: {
                'uploadId': uploadId,
            },
        });
    }
}
