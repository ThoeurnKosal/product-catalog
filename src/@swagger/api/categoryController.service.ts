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
import { ResponseMessageCategory } from '../model/responseMessageCategory';
import { ResponseMessageListCategory } from '../model/responseMessageListCategory';
import { ResponseMessagestring } from '../model/responseMessagestring';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CategoryControllerService {

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
     * deleteCategory
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingPOST(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessagestring>;
    public deleteUsingPOST(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessagestring>>;
    public deleteUsingPOST(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessagestring>>;
    public deleteUsingPOST(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingPOST.');
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

        return this.httpClient.post<ResponseMessagestring>(`${this.basePath}/api/v1/secure/category/delete/${encodeURIComponent(String(id))}`,
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
     * getCategories
     * 
     * @param filter filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCategoriesUsingPOST(filter: Filter, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessageListCategory>;
    public getCategoriesUsingPOST(filter: Filter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessageListCategory>>;
    public getCategoriesUsingPOST(filter: Filter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessageListCategory>>;
    public getCategoriesUsingPOST(filter: Filter, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling getCategoriesUsingPOST.');
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

        return this.httpClient.post<ResponseMessageListCategory>(`${this.basePath}/api/v1/secure/category/list`,
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
     * getCategory
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCategoryUsingPOST(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessageCategory>;
    public getCategoryUsingPOST(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessageCategory>>;
    public getCategoryUsingPOST(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessageCategory>>;
    public getCategoryUsingPOST(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCategoryUsingPOST.');
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

        return this.httpClient.post<ResponseMessageCategory>(`${this.basePath}/api/v1/secure/category/find/${encodeURIComponent(String(id))}`,
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
     * getPublicCategories
     * 
     * @param filter filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPublicCategoriesUsingPOST(filter: Filter, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessageListCategory>;
    public getPublicCategoriesUsingPOST(filter: Filter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessageListCategory>>;
    public getPublicCategoriesUsingPOST(filter: Filter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessageListCategory>>;
    public getPublicCategoriesUsingPOST(filter: Filter, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling getPublicCategoriesUsingPOST.');
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

        return this.httpClient.post<ResponseMessageListCategory>(`${this.basePath}/api/v1/public/category/list`,
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
     * addCategory
     * 
     * @param name 
     * @param description 
     * @param file file
     * @param productIds 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST(name: string, description?: string, file?: Blob, productIds?: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessagestring>;
    public saveUsingPOST(name: string, description?: string, file?: Blob, productIds?: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessagestring>>;
    public saveUsingPOST(name: string, description?: string, file?: Blob, productIds?: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessagestring>>;
    public saveUsingPOST(name: string, description?: string, file?: Blob, productIds?: Array<number>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling saveUsingPOST.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (description !== undefined) {
            queryParameters = queryParameters.set('description', <any>description);
        }
        if (name !== undefined) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (productIds) {
            productIds.forEach((element) => {
                queryParameters = queryParameters.append('productIds', <any>element);
            })
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

        return this.httpClient.post<ResponseMessagestring>(`${this.basePath}/api/v1/secure/category/add`,
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
     * updateCategory
     * 
     * @param id 
     * @param name 
     * @param description 
     * @param file file
     * @param productIds 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPOST(id: number, name: string, description?: string, file?: Blob, productIds?: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<ResponseMessagestring>;
    public updateUsingPOST(id: number, name: string, description?: string, file?: Blob, productIds?: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseMessagestring>>;
    public updateUsingPOST(id: number, name: string, description?: string, file?: Blob, productIds?: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseMessagestring>>;
    public updateUsingPOST(id: number, name: string, description?: string, file?: Blob, productIds?: Array<number>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateUsingPOST.');
        }
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling updateUsingPOST.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (description !== undefined) {
            queryParameters = queryParameters.set('description', <any>description);
        }
        if (id !== undefined) {
            queryParameters = queryParameters.set('id', <any>id);
        }
        if (name !== undefined) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (productIds) {
            productIds.forEach((element) => {
                queryParameters = queryParameters.append('productIds', <any>element);
            })
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

        return this.httpClient.post<ResponseMessagestring>(`${this.basePath}/api/v1/secure/category/update`,
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
