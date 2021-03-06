import axios, { AxiosResponse } from 'axios';
import { ResponseObj, Method } from '../interface';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';
// import AuthService from './auth.service';
// import { getUrl } from 'shared/constants/constants';
const axiosInstance = axios.create();
const CancelToken = axios.CancelToken;
let cancel_req: any;

const API_URL = `${process.env.REACT_APP_BASE_URL}`;

const getUrl = (url: string, params = {}) => {
    let urlString = `${API_URL}/${url}`;
    if (params && !isEmpty(params)) {
        urlString += `?${queryString.stringify(params)}`;
    }
    return urlString;
}

export {
    cancel_req
};

export interface AxiosParams {
    method: Method;
    url: string;
    data?: any;
    contentType?: string;
}

export interface MiscellaneousRequestParams {
    isAccessTokenRequire?: boolean;
    contentType?: string;
}

/**
 * get method
 * @param request object containing axios params
 */
const get = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
    return commonAxios({ method: 'GET', url: getUrl(url, params), ...otherData });
};

/**
 * post method
 * @param request object containing axios params
 */
const post = (url: string, params: any = {}, queryParams = {}, otherData: MiscellaneousRequestParams = {}) => {
    return commonAxios({ method: 'POST', url: getUrl(url, queryParams), data: params, ...otherData });
};

/**
 * put method
 * @param request object containing axios params
 */
const put = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
    return commonAxios({ method: 'PUT', url: getUrl(url), data: params, ...otherData });
};

/**
 * deleteRequest method
 * @param request object containing axios params
 */
const deleteRequest = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
    return commonAxios({ method: 'DELETE', url: getUrl(url), data: params, ...otherData });
};

/**
 * patch method
 * @param request object containing axios params
 */
const patch = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
    return commonAxios({ method: 'PATCH', url: getUrl(url), data: params, ...otherData });
};

/**
 * commonAxios
 * @param object containing method, url, data, access token, content-type
 */
const commonAxios = ({
    method,
    url,
    data,
    contentType = 'application/json',
}: AxiosParams): Promise<any> => {
    let headers: any = {
        'Content-Type': contentType
    };
    const token = localStorage.getItem("token") || null;
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    } else {
        // headers['x-request-language'] = localStorage.getItem('lang');
    }
    let body: any = null;
    if (contentType === 'application/json') {
        body = JSON.stringify(data);
    } else {
        body = data;
    };
    return new Promise((resolve, reject) => {
        axiosInstance({
            method: method,
            url: url,
            headers: headers,
            data: body
        }).then((response: AxiosResponse<ResponseObj<any>>) => {
            resolve(response.data.data);
        }).catch((error) => {
            reject(error);
        });
    });
}

const httpService = {
    get: get,
    post: post,
    put: put,
    deleteRequest: deleteRequest,
    patch: patch
};

export {
    axiosInstance
}

export default httpService;
