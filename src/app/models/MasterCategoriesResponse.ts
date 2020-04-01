import { BaseResponse } from '../framework/BaseResponseModel';
import { Type } from 'class-transformer';

export class MasterCategoryResponse extends BaseResponse
{
    @Type(() => MasterCategories)
    data: MasterCategories[];
}

export class MasterCategoriesResponse extends BaseResponse
{
    @Type(() => MasterCategories)
    data: MasterCategories;
}


export class MasterCategories {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    entity: string;
    iconUrl: string;
    bgImage: string;
    master_json_key: string;
}