/**
 * Simplified Accounting System (SAS)
 * <h3>How to generate API clients and server stubs:</h3>java -jar <a href='http://119.15.88.122:8989/swagger-codegen-cli-2.3.1.jar' target='_blank'>swagger-codegen-cli-2.3.1.jar</a> generate -l typescript-angular -i http://119.15.88.122:8989/v2/api-docs -o /Users/sangkhim/Desktop/swagger<h3>LANGUAGES:</h3>-l typescript-angular (Angular)<br />-l javascript (React)<br />-l java (Android)<br />-l kotlin (Android)<br />-l objc (Objective C)<br />-l swift4 (Swift 4)
 *
 * OpenAPI spec version: API
 * Contact: info@udaya-tech.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Filter } from '../model/filter';
import { ResponseMessageListUser } from '../model/responseMessageListUser';
import { ResponseMessageUser } from '../model/responseMessageUser';
import { ResponseMessagestring } from '../model/responseMessagestring';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UserControllerService {

    protected basePath = 'http://119.15.88.122:8989';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * deleteUser
     * 
     * @param username username
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingPOST2(username: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessagestring>;
    public deleteUsingPOST2(username: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessagestring>>;
    public deleteUsingPOST2(username: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessagestring>>;
    public deleteUsingPOST2(username: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling deleteUsingPOST2.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<ResponseMessagestring>(`${this.basePath}/api/v1/secure/user/delete/${encodeURIComponent(String(username))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getPublicUsers
     * 
     * @param filter filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPublicUsersUsingPOST(filter: Filter, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessageListUser>;
    public getPublicUsersUsingPOST(filter: Filter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessageListUser>>;
    public getPublicUsersUsingPOST(filter: Filter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessageListUser>>;
    public getPublicUsersUsingPOST(filter: Filter, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling getPublicUsersUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<ResponseMessageListUser>(`${this.basePath}/api/v1/public/user/list`,
            filter,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getUser
     * 
     * @param username username
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserUsingPOST(username: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessageUser>;
    public getUserUsingPOST(username: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessageUser>>;
    public getUserUsingPOST(username: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessageUser>>;
    public getUserUsingPOST(username: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling getUserUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<ResponseMessageUser>(`${this.basePath}/api/v1/secure/user/find/${encodeURIComponent(String(username))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getUsers
     * 
     * @param filter filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsersUsingPOST(filter: Filter, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessageListUser>;
    public getUsersUsingPOST(filter: Filter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessageListUser>>;
    public getUsersUsingPOST(filter: Filter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessageListUser>>;
    public getUsersUsingPOST(filter: Filter, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling getUsersUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<ResponseMessageListUser>(`${this.basePath}/api/v1/secure/user/list`,
            filter,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * addUser
     * 
     * @param name 
     * @param password 
     * @param username 
     * @param description 
     * @param file file
     * @param gender 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST2(name: string, password: string, username: string, description?: string, file?: Blob, gender?: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessagestring>;
    public saveUsingPOST2(name: string, password: string, username: string, description?: string, file?: Blob, gender?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessagestring>>;
    public saveUsingPOST2(name: string, password: string, username: string, description?: string, file?: Blob, gender?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessagestring>>;
    public saveUsingPOST2(name: string, password: string, username: string, description?: string, file?: Blob, gender?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling saveUsingPOST2.');
        }
        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling saveUsingPOST2.');
        }
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling saveUsingPOST2.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (description !== undefined) {
            queryParameters = queryParameters.set('description', <any>description);
        }
        if (gender !== undefined) {
            queryParameters = queryParameters.set('gender', <any>gender);
        }
        if (name !== undefined) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (password !== undefined) {
            queryParameters = queryParameters.set('password', <any>password);
        }
        if (username !== undefined) {
            queryParameters = queryParameters.set('username', <any>username);
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) || formParams;
        }

        return this.httpClient.post<ResponseMessagestring>(`${this.basePath}/api/v1/secure/user/add`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateUser
     * 
     * @param name 
     * @param description 
     * @param file file
     * @param gender 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPOST2(name: string, description?: string, file?: Blob, gender?: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessagestring>;
    public updateUsingPOST2(name: string, description?: string, file?: Blob, gender?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessagestring>>;
    public updateUsingPOST2(name: string, description?: string, file?: Blob, gender?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessagestring>>;
    public updateUsingPOST2(name: string, description?: string, file?: Blob, gender?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling updateUsingPOST2.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (description !== undefined) {
            queryParameters = queryParameters.set('description', <any>description);
        }
        if (gender !== undefined) {
            queryParameters = queryParameters.set('gender', <any>gender);
        }
        if (name !== undefined) {
            queryParameters = queryParameters.set('name', <any>name);
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) || formParams;
        }

        return this.httpClient.post<ResponseMessagestring>(`${this.basePath}/api/v1/secure/user/update`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
