## 灵动计算器APP说明文档

### 开发工具
- Cordova v7.0.1
- Android Studio
- Webpack v2.6.1
- NodeJS v6.10.1

### APP类型
这是一个采用JS编写的Hybrid APP，使用的前端框架为Framework7，打包工具为Cordova/PhoneGap，可以同时编译打包为Android、IOS以及其他平台的应用，由于是使用前端H5、CSS、JS等语言开发，所以能做到一次开发，多平台使用。

### 目录说明
- **/www/**：目录里面包含本项目所有的前端程序以及资源文件；
- **.gitignore**：git版本控制忽略设置，将一些没必要的文件不纳入版本控制中；
- **config.xml**：Cordova工程的配置信息，当用命令行创建一个Cordova工程后，会自动生成这个配置文件，开发过程中根据需求对这个文件做出相应配置；
- **package.json**：npm(Node Package Manager)是nodejs的包管理和分发工具，而package.json文件就是一个项目的说明文档，有了这个文件，项目之间的分享就很容易，项目所用的依赖等等信息都在此文件内。
- **webpack.config.js**：webpack打包的配置文件。

### 代码使用说明
>这是一个Cordova的工程，所以需要首先安装好Cordova的开发环境，这个网上有很多教程，如果是第一次配置开发环境可能需要多折腾一下。以下为我个人实际开发时的操作步骤，大家根据自己实际情况操作即可。

- 1.创建Cordova的HelloWorld工程
    >如果是Windows，在cmd下面使用 ``` cd ``` 命令进入工程要存放的文件夹（不能有中文）,然后使用Cordova命令 ```cordova create calculator com.lingdongkuaichuan.calculator 灵动计算器``` 创建一个新的名为calculator的工程。
- 2.连上真机（Android）测试
    >工程创建完成后，连上Android手机，使用 ```cordova run android``` 命令，程序能正常编译并运行在手机上，说明以上操作都成功了，下面可以正式开发了。
- 3.分析Cordova工程的目录结构
    >00000
- 4.配置webpack打包
    >11111
- 5.将本项目代码迁移到自己本地
    >222

### 使用的Cordova插件列表
1. cordova-plugin-x-toast
2. cordova-plugin-whitelist