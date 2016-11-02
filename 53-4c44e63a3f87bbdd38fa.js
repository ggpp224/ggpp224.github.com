webpackJsonp([53],{3:function(n,e,t){n.exports=t(2)(148)},219:function(n,e){n.exports="# Web应用在移动设备上调试的烦恼\n\n我们的应用开始已经有一阵了，我们写了一堆的代码，我们通过浏览器Run起来了，嗯，看起来效果不错，整个应用已经准备就绪，我们要把项目放到手机里运行，程序猿们满怀憧憬地把应用打好包放到移动设备环境中，OK，见证奇迹的时刻到来了，…… …… 纳尼，为什么一片空白，什么都没有？发生了什么情况，为什么没有任何界面，问题出在那里，哪个部分报错了？天哪，我应该怎么调试？移动设备上无法看到控制台，看不到出错信息，无法设置断点跟踪代码的执行等，怎么办？\n\n是不是已经开始抓狂了？下面介绍如何在移动设备上进行调试。\n  \n首先来了解我们的运行环境，目前我们的移动设备主流的系统为 IOS 和 Android，显然在两个不同的系统下，调试的操作和过程也是不同的，但有两点是共同：\n\n- 需要使用数据线将移动设备和电脑连接到一起\n- 需要在电脑上打开相应的浏览器进行调试\n  - IOS 的调试需要使用 Safari\n  - Android 的调试需要使用 Chromea\n\n　　做好这两个步骤之后，我们来开始调试程序，首先是比较容易的Android:\n  \n## Android调试：\n\n\n- ### step1: 打开Android设备的开发者调试模式  \n\n  只有打开 Android 设备的开发者调试功能才能进行调试，通用的步骤如下：\n  1. 进入设备设置界面\n  2. 进入开发人员选项\n  3. 找到USB调试选项，打开选项\n\n\n- ### step2: 使用数据线连接Android设备和电脑\n\n  1. 使用数据线连接设备和电脑\n  2. 连接完毕后，设备上会显示一个提示框，需要获得连接调试授权，这个时候确定就好了\n\n- ### step3: 在电脑上打开Chrome，进入监视模式  \n\n  1. 打开chrome，在地址栏输入 `chrome://inspect`\n  2. chrome中会显示检查到的当前连接设备名称，如果当前有应用打开一个页面，设备名称下方就会显示这些应用列表以及该应用访问的网页地址，每个地址下面还有4个链接，分别是：`inspect`，`focus tab`，`reload`，`close`\n\n\n- ### step4: 从Chrome打开Android设备上访问的页面的调试窗口进行调试\n\n  1. 从上一步的列表项中选择你要调试的页面，点击该页面连接下的`inspect`，打开监视窗口进入调试\n  2. 监视窗口分为左右两部分，左边有地址栏和页面显示，右边就是调试开发工具栏，就跟在电脑调试页面一样了，可以查看控制台日志，打断点等。   \n  ps: 这里需要注意的是：打开监视窗口会首先访问google的一些资源，然后才会显示调试窗口，如果访问google失败，就会显示白屏，什么都没有，所以请使用代理或者别的方式让访问google通过。\n  \n  \n \n## IOS 调试：\n\n\n- #### step1:\n- #### step2:\n\n\n"},545:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(1),d=o(r),i=t(3),u=o(i),s=t(219),c=o(s),l=function(){return d.default.createElement("div",null,d.default.createElement(u.default,{text:c.default}))};e.default=l}});