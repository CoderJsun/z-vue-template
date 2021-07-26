### z-vue-template

`z-vue-template` based on vue@next template

### 前置说明

只需要在 terminer 中使用 addCpn 、addpage 即可自动生成路由以及其他配置，无法手动处理，其相关依赖都会加载好，可查看代码实现原理

### 配置项

##### 1.1 pages

ejs 模板会依据命令自己生成 <name>.js、router.js 两个文件

#### 1.2 compoents

ejs 模板会依据 <name> 自动生成 name.vue 模板

#### 1.3 router

此文件会自动生成并且被合并到 routes 无需手动配置

#### 1.4 services

自动生成 config.js 和 request.js 两个文件

#### 1.5 store

自动依据规则生成 moudle ，每个 module 自动生成 index.js 、types.js 文件 ，此模板文件会自动合并到 store 下的 index.js 中 ，无需手动配置
