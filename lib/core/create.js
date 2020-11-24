const program = require("commander");
/* 引入创建函数 */
const {
  createProjectsAction,
  addComponentAction,
  addPageAndRouteAction,
  addStoreAction,
} = require("./actions");

const createCommands = () => {
  /* 创建项目 */
  program
    .command("create <project> [others...]")
    .description("把项目导入文件夹")
    .action(createProjectsAction);

  /* 创建组件 */
  program
    .command("addcpn <name>")
    .description("创建组件,例如 bycli addcpn Header[-d src/components]")
    .action((name) => {
      addComponentAction(name, program.dest || "src/components");
    });

  /* 创建页面 */
  program
    .command("addpage <name>")
    .description("创建页面,例如 bycli addpage Home[-d src/view]")
    .action((name) => {
      addPageAndRouteAction(name, program.dest || "src/pages");
    });

  /* 创建store */
  program
    .command("addstore <name>")
    .description("创建页面,例如 bycli addstore Car[-d src/store/modules]")
    .action((name) => {
      addPageAndRouteAction(name, program.dest || "src/store/modules");
    });
};

module.exports = createCommands;
