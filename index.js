#!/usr/bin/env node

/* 导入commander库 */
const program = require("commander");
/* 导入自己的模块 */
const helpOpthions = require("./lib/core/help");
const createCommands = require("./lib/core/create");

//查看版本号
program.version(require("./package.json").version);

//帮助
helpOpthions();

//创建其他的指令
createCommands();

program.parse(process.argv);
