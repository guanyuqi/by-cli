/* node改造函数为promise工具 */
const { promisify } = require("util");
const path = require("path");

/* 拉取git库 */
const download = promisify(require("download-git-repo"));
/* 打开浏览器 */
const open = require("open");
/* git地址配置 */
const { myRepo } = require("../config/repo-config");
/* 终端配置 */
const { commandSpawn } = require("../utils/terminal");
/* 导入utils */
const { compile, writeToFile, createDirSync } = require("../utils/utils");

//callback  ==>  promisify ==> promise ==> async await

//创建项目的action
const createProjectsAction = async (project) => {
  console.log("八友脚手架正在执行中....");

  //1.clone项目
  await download(myRepo, project, { clone: true });

  //2.执行npm install
  const command = process.platform == "win32" ? "npm.cmd" : "npm";
  await commandSpawn(command, ["install"], { cwd: `./${project}` }); //cwd 进入目录

  //3.执行npm run serve
  commandSpawn(command, ["run", "serve"], { cwd: `./${project}` });

  //4.打开浏览器
  open("http://localhost:8080/");
};

//添加组件的action
const addComponentAction = async (name, dest) => {
  //1.编译ejs模板
  const result = await compile("vue-component.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });

  //2.写入文件
  const targetPath = path.resolve(dest, `${name}.vue`);
  console.log(targetPath);
  writeToFile(targetPath, result).catch((err) => {
    console.log(err);
  });
};

//添加页面和路由的action
const addPageAndRouteAction = async (name, dest) => {
  //1.编译ejs模板
  const data = {
    name,
    lowerName: name.toLowerCase(),
  };
  const pageResult = await compile("vue-component.ejs", data);
  const routerResult = await compile("vue-router.ejs", data);
  //2.写入文件
  const targetDest = path.resolve(dest, name);
  if (createDirSync(targetDest)) {
    const targetPagePath = path.resolve(targetDest, `${name}.js`);
    const targetRouterPath = path.resolve(targetDest, "types.js");
    writeToFile(targetPagePath, pageResult).catch(() => {});
    writeToFile(targetRouterPath, routerResult).catch(() => {});
  }
};

//添加store的action
const addStoreAction = async (name, dest) => {
  //1.编译ejs模板
  const storeResult = await compile("vuex-store.ejs", data);
  const typesResult = await compile("vuex-types.ejs", data);
  //2.写入文件
  const targetDest = path.resolve(dest, name);
  if (createDirSync(targetDest)) {
    const targetStorePath = path.resolve(targetDest, `${name}.js`);
    const targetTypesPath = path.resolve(targetDest, "types.js");
    writeToFile(targetStorePath, storeResult).catch(() => {});
    writeToFile(targetTypesPath, typesResult).catch(() => {});
  }
};

module.exports = {
  createProjectsAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAction,
};
