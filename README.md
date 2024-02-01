# 尚医通前端项目学习

## 项目介绍

该项目是一个基于Vue.js的前端项目，用于实现医院预约挂号系统的前端部分。

## 项目结构

```
src
├── api                      # 封装的接口请求方法
│   ├── home                 # 首页相关接口请求方法
│   └── hospital             # 医院相关接口请求方法
├── assets                   # 静态资源文件夹
│   └── images               # 图片文件夹
├── components               # 组件文件夹
│   ├── hospital_bottom      # 封装的全局组件底部
│   ├── hospital_top         # 封装的全局组件头部
├── pages                    # 页面文件夹
│   ├── home                 # 首页相关页面
│   └── hospital             # 医院相关页面
├── router                   # 路由配置文件夹
│   └── index.ts             # 路由配置文件
├── style                    # scss样式
│   └── reset.scss           # scss样式配置文件
├── utils                    # 工具文件夹
│   └── request.ts           # 封装的axios请求工具文件