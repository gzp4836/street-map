## 街区地图项目

### 查看项目操作
浏览器打开项目index.html文件即可。

### 进入开发模式：
* 1.项目根目录执行 npm install
* 2.完成后执行 gulp
* 3.样式文件使用sass编写，编译命令：gulp sass

### 功能介绍
* 根据初始化数据，页面标记显示7个地理位置点。
* 点击每个地理位置点，异步查询维基百科数据显示并且标记点会跳动。
* 点击菜单列表显示地理位置的列表数据，点击列表数据，与点击地理位置标记展现相同
* 菜单搜索框可根据数据过滤地理位置名称，相应地图位置也会过滤
* 支持响应式设计

### 注意：项目使用Google Map API 国内网络可能访问受阻，还请自行解决。