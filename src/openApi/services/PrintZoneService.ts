/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetPrintZone } from '../models/GetPrintZone';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PrintZoneService {
    /**
     * @returns GetPrintZone
     * @throws ApiError
     */
    public static getZone(): CancelablePromise<Array<GetPrintZone>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/zone',
        });
    }
}
