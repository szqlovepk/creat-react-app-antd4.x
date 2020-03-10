/*
 * File: config-overrides
 * Desc: 对 create-react-app 进行自定义配置
 * File Created: 2020/3/10
 * Author: SZQ
 * ------
 * Last Modified: 2020/3/10
 * Modified By: SZQ at <2167622337@qq.com>
 * ------
 * Copyright 2019 - present, karakal
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
       fixBabelImports('import', {
           libraryName: 'antd',
           libraryDirectory: 'es',
           style: true,
      }),
        addLessLoader({
           javascriptEnabled: true,
           modifyVars: { '@primary-color': '#1DA57A' },
     }),
);
