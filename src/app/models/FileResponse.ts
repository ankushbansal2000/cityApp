import { BaseResponse } from './../framework/BaseResponseModel';

import { Type } from 'class-transformer';

export class FileResponse extends BaseResponse {
    @Type(() => FileUrl)
    response: FileUrl;
}
export class FileUrl {
    data: string;
}
