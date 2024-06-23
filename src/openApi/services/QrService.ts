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
export class QrService {
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
}
