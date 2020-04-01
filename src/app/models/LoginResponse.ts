import { BaseResponse } from '../framework/BaseResponseModel';
import { Type } from 'class-transformer';

export class LoginDetResponse extends BaseResponse
{
    @Type(() => LoginDetail)
    data: LoginDetail[];
}

export class LoginDetailResponse extends BaseResponse
{
    response : LoginDetResponse
}
export class LoginDetailsResponse extends BaseResponse
{
    response : Login
}
 
export class Login {
    @Type(() => LoginDetail)
    data: LoginDetail;
}


export class LoginDetail {

        id: number;
        created: string;
        updated: string;
        createdBy?: any;
        updatedBy?: any;
        pincode?: any;
        deviceToken: string;
        fcmToken: string;
        cityId: number;
        deviceType: string;
        mobile: string;
        name: string;
        token: string;
        app_project_path: string;
        phone: boolean;
        anonymous: boolean;
        active: boolean;
    }
