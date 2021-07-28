export interface ResponseObj<T> {
    code: number;
    message: string;
    errorMessages: { [key: string]: string[] };
    data: T;
}

export interface AwsCredentials {
    bucketURL?: string;
    region: string;
    bucket: string;
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string;
    expiration: Date;
}

export interface AwsParamsSchema {
    Key: string;
    ContentType: string;
    Body: File;
    Bucket: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    tokenType: string;
}

export interface UserProfileResponse {
    user: {
        email: string;
        name: string;
        permissions: {
            [key: string]: boolean;
        };
        roles: string[];
        status: number;
        language: string;
    };
}
export type Method =
    | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'
    | 'purge' | 'PURGE'
    | 'link' | 'LINK'
    | 'unlink' | 'UNLINK'