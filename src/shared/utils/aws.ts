import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { AwsCredentials, AwsParamsSchema } from '../interface'

/**
 * getS3UploadParams - generates s3-upload parameters
 * @param file - file
 * @param id - ID
 * @param bucket - bucket
 */
export const getS3UploadParams = (file: File, type: string, id: string, bucket: string): AwsParamsSchema => {
    // const timestamp = new Date().getTime();
    // const fileName = `${id}/${type}/${timestamp}_${file.name.slice(file.name.search('.'), file.name.length)}`;
    const fileName = `${uuidv4()}.csv`;

    return {
        Body: file,
        Bucket: bucket,
        ContentType: file.type,
        Key: fileName
    };
};

/**
 * updateAwsConfig - updates aws configuration
 * @param awsCreds - credentials retrieved from server
 */
export const updateAwsConfig = (awsCreds: AwsCredentials) => {
    AWS.config.update({
        accessKeyId: awsCreds.accessKeyId,
        secretAccessKey: awsCreds.secretAccessKey,
        sessionToken: awsCreds.sessionToken,
        region: awsCreds.region
    });
    return AWS;
};

/**
 * manageUpload - returns a managedUpload object
 * @param params - aws s3 upload parameters
 */
export const manageUpload = (params: AwsParamsSchema) => {
    return new AWS.S3.ManagedUpload({ partSize: 5 * 1024 * 1024, params: params });
};
