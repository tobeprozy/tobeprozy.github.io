import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([

  // 指定显示页面
  {  
    text: "📅工作笔记",
    icon: "daily",
    prefix: "/soph开发/",
    link: "",
    collapsible: true,
    children:  [
      "详情目录.md",
    ],
  },
  {  
    text: "📅每日一问",
    icon: "daily",
    prefix: "/00Daily_Question/",
    link: "",
    collapsible: true,
    children:  [
      "每日一问.md",
      "详情目录.md",
    ],
  },
  {
    text: "🎥传感器",
    icon: "sensor",
    prefix: "/01Sensor/",
    link: "",
    collapsible: true,
    children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🌅图像处理",
    icon: "",
    prefix: "/02Image_Processing/",
    link: "",
    collapsible: true,
    children:  [
      "详情目录.md",
    ],
  },
  {
    text: "👓计算机视觉",
    icon: "",
    prefix: "/03Computer_Vision/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "☁️点云处理",
    icon: "",
    prefix: "/04Point_Cloud_Processing/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🔍优化算法",
    icon: "",
    prefix: "/05Optimization_Algorithm/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🚀SLAM",
    icon: "",
    prefix: "/06SLAM/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🚗数学基础",
    icon: "",
    prefix: "/07Math_Basic/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🧠AI-机器学习-深度学习",
    icon: "",
    prefix: "/08AI_Machine_Learning_Deep_Learning/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "📟嵌入式开发",
    icon: "",
    prefix: "/09Embedded_Development/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🤖机器人",
    icon: "",
    prefix: "/10Robotics/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🚘自动驾驶篇",
    icon: "",
    prefix: "/11Automatic_Driving/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "💻C++",
    icon: "",
    prefix: "/12C_plus_plus/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🐍Python",
    icon: "",
    prefix: "/13Python/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🐧Matlab",
    icon: "",
    prefix: "/14Matlab/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🐋 Linux 服务",
    icon: "",
    prefix: "/15Linux/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🤖ROS",
    icon: "",
    prefix: "/16ROS/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "💻计算机基础",
    icon: "",
    prefix: "/17Computer_Basics/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "📊数据结构",
    icon: "",
    prefix: "/18Data_Structure/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🌐网络编程",
    icon: "",
    prefix: "/19Network_Programming/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🔧机械工程",
    icon: "",
    prefix: "/20Mechanical_Engineering/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "⚡电路电子",
    icon: "",
    prefix: "/21Circuit_Electronics/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🔊信号处理",
    icon: "",
    prefix: "/22Signal_Processing/",
    link: "",
    collapsible: true,
     children:  [
      "详情目录.md",
    ],
  },
  {
    text: "🧰 应用手册",
    icon: "",
    prefix: "/25apps/",
    link: "",
    collapsible: true,
    children: [
      "Applist.md",
      "ChatGPT.md",
      "design.md",
      "AppNotes.md",
      "Chrome.md",
      {
        text: "直播手册",
        icon: "load",
        prefix: "livestreaming/",
        link: "",
        collapsible: true,
        children: "structure",
      },
    ],
  },
  {
    text: "🌐 页面开发",
    icon: "",
    prefix: "/30web/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🏗️ 网站部署",
    icon: "",
    prefix: "/27deploy/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🚀 代码学习",
    icon: "",
    prefix: "/26code/",
    link: "",
    collapsible: true,
    children: [
      "README.md",
      {
        text: "Basic",
        icon: "emmet",
        collapsible: true,
        children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
      },
      {
        text: "FrondEnd",
        icon: "app",
        collapsible: true,
        children: ["Vue.md", "HTML.md", "JavaScript.md", "Python.md"],
      },
    ],
  },

  {
    
    text: "系统问题",
    icon: "windows",
    prefix: "/24Windows/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "😊生活记录",
    icon: "",
    prefix: "/28LifeNotes/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  "/DailyRoutine",
  "/Fitness",
  {
    text: "博客文章",
    icon: "blog",
    prefix: "/_blog/",
    link: "/blog.md",
    collapsible: true,
    children: "structure",
  },
   // 读书笔记架构更换到 docsify，不能使用相对链接
   { text: "读书笔记", icon: "read", link: "https://newzone.top/reading/" },
  
]);
