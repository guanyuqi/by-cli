const path = require("path");
const fs = require("fs");

const ejs = require("ejs");

/* 组装组件 */
const compile = (templateName, data) => {
  const templatePosition = `../templates/${templateName}`;
  const templatePath = path.resolve(__dirname, templatePosition);
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

/* 递归创建路径 */
const createDirSync = (pathName) => {
  if (fs.existsSync(pathName)) {
    return true;
  } else {
    if (createDirSync(path.dirname(pathName))) {
      fs.mkdirSync(pathName);
      console.log("正在创建", pathName);
      return true;
    }
  }
};

const writeToFile = (path, content) => {
  // 判断path是否存在, 如果不存在, 创建对应的文件夹

  return fs.promises.writeFile(path, content);
};

module.exports = {
  createDirSync,
  compile,
  writeToFile,
};
