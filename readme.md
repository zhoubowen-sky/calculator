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
- **.gitignore**：文件为git版本控制忽略设置，将一些没必要的文件不纳入版本控制中；
- **config.xml**：文件位Cordova工程的配置信息，当用命令行创建一个Cordova工程后，会自动生成这个配置文件，工程后期开发过程中根据需求做出相应更改；
- **package.json**：npm(Node Package Manager)是nodejs的包管理和分发工具，而package.json文件就是一个本地项目的说明文档，有了这个文件，项目之间的分享就很容易，项目所用的依赖等等信息都在此文件内。
- **webpack.config.js**：webpack打包的配置文件。

### 代码使用说明
待完善...

### 使用的Cordova插件列表
1. cordova-plugin-x-toast
2. cordova-plugin-whitelist