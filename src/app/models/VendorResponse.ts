import { BaseResponse } from '../framework/BaseResponseModel';
import { Type } from 'class-transformer';

export class VendorsResponse extends BaseResponse
{
    @Type(() => Vendor)
    data: Vendor[];
}
export class VendorDetaResponse extends BaseResponse
{
    response : VendorsResponse
}

export class VendorDetailResponse extends BaseResponse
{
    response : VendoResponse
}

export class VendorResponse extends BaseResponse
{
    @Type(() => Vendors)
    data: Vendors;
}
export class VendoResponse extends BaseResponse
{
    @Type(() => Vendors)
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
    categories: Category[];
    password: string;
    lat: string;
    lng: string;
}
export class Vendors {
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
    categories: Array<number> = [];
    password: string;
    lat: string;
    lng: string;
}
export class Category {
    image: string;
    id: number;
    title: string;
    desc: string;
}

