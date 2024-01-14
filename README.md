# 日历组件测试

- 示例代码：[index.html](https://github.com/iuroc/test-calendar/blob/master/demo/index.html)
- 访问预览：[test-calendar](https://iuroc.github.io/test-calendar/)

![iuroc_github](https://github.com/iuroc/test-calendar/assets/61752998/d427bdc3-9bef-48b4-9906-99d186f2e446)


## 使用方法
1. 导入库文件
    ```html
    <link rel="stylesheet" href="./index-714556c8.css">
    <script src="./index-3e83eeb9.js"></script>
    ```
2. 创建容器元素
    ```html
    <body>
        <div id="app"></div>
    </body>
    ```
2. 创建 DOM 元素，然后添加到容器元素中
    ```js
    const year = 2024  // 年份
    const month = 1  // 月份
    const element = Daily(year, month)
    const app = document.getElementById('app')
    app.appendChild(element)
    ```
