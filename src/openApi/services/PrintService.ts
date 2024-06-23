/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AreaQRTagRes } from '../models/AreaQRTagRes';
import type { PrinterZoneType } from '../models/PrinterZoneType';
import type { QRTagReq } from '../models/QRTagReq';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PrintService {
    /**
     * @param requestBody
     * @returns AreaQRTagRes
     * @throws ApiError
     */
    public static postAreaQr(
        requestBody: QRTagReq,
    ): CancelablePromise<AreaQRTagRes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/area/QR',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns AreaQRTagRes
     * @throws ApiError
     */
    public static postPrintQr(
        requestBody: PrinterZoneType,
    ): CancelablePromise<AreaQRTagRes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/print/QR',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param
     * @returns number
     * @throws ApiError
     */
    public static getQueueSeq(
       v : QRTagReq,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/queue/seq',
            query: {
                '__0': v,
            },
        });
    }
    /**
     * @param requestBody
     * @returns boolean
     * @throws ApiError
     */
    public static postPrintExecute(
        requestBody: PrinterZoneType,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/print/execute',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
