# vue-show-picture

> 为移动端使用，技术栈：vue2.0 + vue-router + vue-awesome-swiper（轮播）<br>
应用场景：<br>
1，在H5开发中，有图片列表，点击需全屏弹出，可左右滑动，点击返回当前页面<br>
2，在新闻页面，点击图片可弹出全屏，可左右滑动，点击返回当前页面（手机新闻里都是这个效果）<br>
考虑到要兼容手机的物理返回键，全屏图片做成了一个新页面，这样就达到了返回的效果，同时避免了监听兼容性问题<br>
## Build Setup


``` bash
# install dependencies
clone https://github.com/fangdown/vue-show-picture.git
cd vue-show-picture 
npm install

# serve with hot reload at localhost:3333
npm run dev

