// 首页模块接口
import request from '@/utils/request.ts';

// 通过枚举管理首页模块的接口地址
enum API{
    // 获取已有的医院的数据接口地址
    HOSPITAL_URL = '/hosp/hospital/',
    // 获取医院等级的数据接口地址
    HOSPITALLEVEL_URL = '/cmn/dict/findByDictCode/',
}
//获取医院的数据
export const reqHospital = (page:number,limit:number) => request.get(API.HOSPITAL_URL+`${page}/${limit}`);
//获取医院等级的数据
export const reqHospitalLevelAndRegion = (dictCode:string) => request.get(API.HOSPITALLEVEL_URL+`${dictCode}`);