### vue2中 注册全局方法&属性

- ###### 第一种方法（直接添加到Vue实例原型上）

  - ###### 定义 js/ts 文件

    ```typescript
    interface SettingTypes {
      fixedHeader: boolean; // 是否固定头部
    }
    
    const setting:SettingTypes = {
      fixedHeader: true,
    };
    
    export default setting;
    ```

  - ###### 在 main.ts引入

    ```typescript
    import Vue from 'vue';
    import setting from '@/setting';
    
    Vue.prototype.$setting = setting;
    ```

  - ###### 使用

    ```js
    // 在组件页面中，需要使用的话，就是this.$$setting.xxx就行了
    methods: {
    	fn() {
    		console.log(this.$setting)
    	}
    }
    ```

  - ###### 缺点

    - 绑定的东西多了会使vue实例过大
    - 每次调用都需要this.$ 使用，否则会报错，
    - 报错场景：直接在html标签上使用$setting，会抛出Vue上不存在该属性问题.

  - ###### 优点

    - 定义&使用 简单

- ###### 第二种方法 （团队推荐使用）

  - ###### **使用`webpack.ProvidePlugin`全局引入**，在 vue.config.js 中

    ```js
    // 首先在vue.config中引入webpack和path，然后在module.exports的configureWebpack对象中定义plugins，引入你需要的js文件
    const webpack = require("webpack");
    const path = require("path");
    module.exports = {
      configureWebpack: {
        plugins: [
          new webpack.ProvidePlugin({
            SETTINGS: [path.resolve(__dirname, "./src/setting.ts"), "default"] // 定义的全局函数类
          })
        ]
      }
    }
    ```

  - ###### 注意：如果项目中使用了Eslint，需要在根目录的`.elintrc.js` 中加入一个`globals`对象，把定义的全局函数类的属性名启用一下，不然会报错找不到该属性。

    ```js
    module.exports = {
      'globals':{
        "SETTINGS":true,
      }
    }
    ```

  - ###### 使用（需重启项目）

    ```js
    methods: {
    	fn() {
    		console.log(SETTINGS)
    	}
    }
    ```

- ###### 另：（解决第一种方法 在标签上调用报错问题）

  - ###### 在src下新建types文件夹，继续创建*.d.ts文件 用来声明类型

    ```typescript
    import Vue from 'vue';
    declare module 'vue/types/vue' {
      interface Vue {
        $setting: any
      }
    }
    ```

  - ###### 在 `tsconfig.json` 中添加配置

    ```json
    {
        "include": [
            "src/**/*.ts",
            "src/**/*.d.ts",
            "src/**/*.tsx",
            "src/**/*.vue",
      	],
    }
    ```

    配置include属性字段：让自定义的xx.d.ts类型文件全局生效。这样在标签上调用的全局属性就不会抛出异常问题

    注意：配置后，如果编辑器仍显示类型报错，记得关闭并**重启**下vscode即可！
    
    