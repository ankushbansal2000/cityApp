import { BaseResponse } from '../framework/BaseResponseModel';
import { Type } from 'class-transformer';

export class VendorsResponse extends BaseResponse
{
    @Type(() => Vendor)
    data: Vendor[];
}

export class VendorResponse extends BaseResponse
{
    @Type(() => Vendor)
    data: Vendor;
}

export class Vendor {
    id:number;
    name: string;
    businessName: string;
    contactNumber: string;
    altContactNumber: string;
    address: string;
    latLong: string;
    houseNumber: string;
    startTime: string;
    endTime: string;
    workingDays: string[];
    pincode: string;
    city: number;
    rangeOfDelivery: string;
    categories: number[];
    password: string;
    lat: string;
    lng: string;
}
