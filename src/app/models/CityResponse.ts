import { BaseResponse } from '../framework/BaseResponseModel';
import { Type } from 'class-transformer';

export class CitiesResponse extends BaseResponse
{
    @Type(() => CityDetail)
    data: CityDetail[];
}

export class CityDetailResponse extends BaseResponse
{
    response : CitiesResponse
}
export class CityDetailsResponse extends BaseResponse
{
    response : CityData
}
 
export class CityData {
    @Type(() => CityDetail)
    data: CityDetail;
}


export class CityDetail {
        id: number;
        name: string;
        pincode: string;
        state: string;
        launched: boolean;
}