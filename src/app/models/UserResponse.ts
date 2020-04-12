import { BaseResponse } from '../framework/BaseResponseModel';
import { Type } from 'class-transformer';

export class UsersResponse extends BaseResponse
{
    @Type(() => UserDetail)
    data: UserDetail[];
}

export class UserDetailResponse extends BaseResponse
{
    response : UsersResponse;
}
export class UserDetailsResponse extends BaseResponse
{
    response : UserData;
}
 
export class UserData {
    @Type(() => UserDetail)
    data: UserDetail;
}


export class UserDetail {
        id: number;
        deviceToken: string;
        deviceType: string;
        mobile: string;
        name: string;
        fcmToken: string;
        cityId : number;
        pincode: number;
}