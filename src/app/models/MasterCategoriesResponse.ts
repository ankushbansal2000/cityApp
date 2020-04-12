import { BaseResponse } from '../framework/BaseResponseModel';
import { Type } from 'class-transformer';

export class MasterCategoryResponse extends BaseResponse
{
    @Type(() => MasterCategories)
    data: MasterCategories[];
}

export class MasterCategorResponse extends BaseResponse
{
    response : MasterCategoryResponse
}

export class MasterCategorysResponse extends BaseResponse
{
    response : MasterCategoriesResponse
}

export class MasterCategoriesResponse extends BaseResponse
{
    @Type(() => MasterCategories)
    data: MasterCategories;
} 
export class MasterCategories {
    id: number;
    text:string;
    title: string;
    subTitle: string;
    description: string;
    entity: string;
    iconUrl: string;
    bgImage: string;
    master_json_key: string;
}