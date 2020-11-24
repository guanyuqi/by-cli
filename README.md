# 介绍

By Cli 是八友前端vue脚手架



# 基础

## 安装

```shell
npm install bycli -g
```



## 创建项目

你可以使用 `bycli create` 命令进行快速生成vue项目模板

```shell
bycli create  example
```

## 基础命令

```shell
Options:
  -V, --version                 output the version number
  -b --by                       一个脚手架
  -d --dest <dest>              a destination floder,例如 -d /src/components
  -f --framework                your framework 你的框架
  -h, --help                    display help for command

Commands:
  create <project> [others...]  把项目导入文件夹
  addcpn <name>                 创建组件,例如 bycli addcpn Header[-d src/components]
  addpage <name>                创建页面,例如 bycli addpage Home[-d src/view]
  addstore <name>               创建页面,例如 bycli addstore Car[-d src/store/modules]
  help [command]                display help for command

Other:
other options~
```



## 创建组件

使用 `bycli addcpn`命令创建组件模板，默认生成地址为 `src/components`

```shell
bycli addcpn example
```



## 创建页面

使用 `bycli addpage`命令创建组件模板，默认生成地址为`src/page`

```shell
bycli addpage example
```

或者使用详细路径

```
bycli addpage example -d src/view
```



# 配置

## 模板仓库配置

模板仓库配置文件位于`lib/config/repo-config.js` 粘贴上自己的模板git地址即可

## 组件配置

组件配置文件位于`lib/templates` 自行定制相关ejs