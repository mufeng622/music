# music

一个仿网易音乐h5的应用，使用vue脚手架搭建，最终需要实现简单的音乐播放效果；

本地开发及发布：
安装依赖：
npm install
默认端口8080：
npm run dev
上线打包：
npm run build

此应用目的是练习vue相关方法，通过调用网易api获取歌曲及列表等相关信息，

主要配置文件在build文件夹内；
样式及本地mock数据在static文件夹内；
组件、异步获取数据、router、vuex、filters等相关方法位于src文件夹下；

进度记录：
2019/05/03  由于调用api涉及到跨域问题，现阶段所有数据都是本地mock假数据，实现一些基础效果；下阶段计划，修改webpack和dev相关配置获取数据后，进行相关交互的完善；
