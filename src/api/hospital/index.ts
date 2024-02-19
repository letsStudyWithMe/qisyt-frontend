//引入二次封装axios
import request from '@/utils/request.ts';
import {DeparmentResponseData, HospitalDetail} from "./type.ts";
//枚举请求地址
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    //获取某一个医院的科室的数据
    HOSPITALDEPARMENT_URL = '/hosp/hospital/department/',
}
//获取医院详情的接口
export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetail>(API.HOSPITALDETAIL_URL + `${hoscode}`);
//获取医院科室的接口
export const reqHospitalDeparment = (hoscode: string) => request.get<any, DeparmentResponseData>(API.HOSPITALDEPARMENT_URL + hoscode);
