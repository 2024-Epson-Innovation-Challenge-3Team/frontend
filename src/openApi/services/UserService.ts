/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserEntity } from '../models/UserEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * @returns UserEntity
     * @throws ApiError
     */
    public static getUsers(): CancelablePromise<Array<UserEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }
}
