# [jQuery中文文档](https://www.jquery123.com/hover/) [菜鸟教程笔记](https://www.runoob.com/jquery/jquery-tutorial.html)

two days -Ajax

### AJAX

AJAX是**与服务器交换数据**的技术，它在**不重载全部页面**的情况下，实现了**对部分网页的更新**。

​		AJAX = 异步 Js和 XML (Asynchronous JavaScript and XML)

​		是一种**使用现有标准**的**新方法**。

简短地说，在不重载整个页面的情况下，AJAX通过后台加载数据，并在网页上显示。

AJAX 不需要任何浏览器插件，但需要用户**允许JavaScript在浏览器上执行**。。

#### jQuery 与 AJAX

通过 jQuery AJAX 方法，能够使用**HTTP Get 和 HTTP Post**从远程服务器上**请求**文本、HTML、XML 或 JSON - 同时您能够把这些**外部数据直接载入网页**的被选元素中。

1. jQuery load() 方法是简单但强大的 AJAX 方法。

​     **load()** 方法从服务器加载数据，并把返回的数据放入被选元素中。

**语法:**  $(selector).load(URL,data,callback);    必需的 *URL* 参数规定希望加载的 URL。

​		可选的 *data* 参数规定与请求一同发送的查询字符串键/值对集合。

​                可选的 *callback* 参数是 load() 方法完成后所执行的函数名称。

Ex:

```javascript
<h2>jQuery AJAX 是个非常棒的功能！</h2>
<p id="p1">这是段落的一些文本。</p>
//示例文件（"demo_test.txt"）的内容 👆👆👆
$("#div1").load("demo_test.txt"); // 把文件的内容加载到指定元素中
$("#div1").load("demo_test.txt #p1"); //可以把 jQuery 选择器添加到 URL 参数中去。
                                     //把文件内id=p1的元素  加载进div1中去
```

回调函数可以设置不同的参数：

- *responseTxt* - 包含调用成功时的结果内容

- *statusTXT* -     包含调用的状态

- *xhr* -                包含 XMLHttpRequest 对象

  ```javascript
    $("#div1").load("demo_test.txt",function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")      //调用Load加载成功 
        alert("外部内容加载成功!");
      if(statusTxt=="error")       //调用Load加载失败
        alert("Error: "+xhr.status+": "+xhr.statusText);
    });
  ```

  #### Q:

  为了**避免多页面情形下的代码重复**，可以利用 load() 方法，将重复的部分（例如导航栏）放入单独的文件，使用下列方法进行导入：

  ```javascript
  //1.当前文件中要插入的地方使用此结构：
  <div class="include" file="***.html"></div>
  
  //2.***.html中放入内容，用html格式仅仅因为会有编辑器的书写辅助。。
  
  //3.代码：
  $(".include").each(function() {
      if (!!$(this).attr("file")) {
          var $includeObj = $(this);
          $(this).load($(this).attr("file"), function(html) {
              $includeObj.after(html).remove(); //加载的文件内容写入到当前标签后面并移除当前标签
          })
      }
  });
  或者在index文件里只写重复部分，剩下的一股脑放各自单独文件 load() 进来~
  ```

  

  jQuery **get() 和 post()**方法用于通过 HTTP GET 或 POST 请求从服务器请求数据。

- *GET* - 从指定的资源**请求**数据
- *POST* - 向指定的资源**提交**要处理的数据

GET 基本上用于从服务器获得（取回）数据。注释：GET 方法可能返回缓存数据。

POST 也可用于从服务器获取数据。POST 方法不会缓存数据，常用于连同请求一起发送数据。

>[http方法 get与 post对比](https://www.runoob.com/tags/html-httpmethods.html)
>
>Form 中的 get 和 post 方法，在数据传输过程中分别对应了 HTTP 协议中的 GET 和 POST 方法。二者主要区别如下：
>
>-  1、Get 是用来从服务器上获得数据，而 Post 是用来向服务器上传递数据。
>-  2、Get 将表单中数据的按照 variable=value 的形式，添加到 action 所指向的 URL 后面，并且两者使用“?”连接，而各个变量之间使用“&”连接；Post 是将表单中的数据放在 form 的数据体中，按照变量和值相对应的方式，传递到 action 所指向 URL。
>-  3、Get 是不安全的，因为在传输过程，数据被放在请求的 URL 中，而如今现有的很多服务器、代理服务器或者用户代理都会将请求URL记录到日志文件中，然后放在某个地方，这样就可能会有一些隐私的信息被第三方看到。另外，用户也可以在浏览器上直接看到提交的数据，一些系统内部消息将会一同显示在用户面前。Post 的所有操作对用户来说都是不可见的。
>-  4、Get 传输的数据量小，这主要是因为受 URL 长度限制；而 Post 可以传输大量的数据，所以在上传文件只能使用 Post（当然还有一个原因，将在后面的提到）。
>-  5、Get 限制 Form 表单的数据集的值必须为 ASCII 字符；而 Post 支持整个 ISO10646 字符集。
>-  6、Get 是 Form 的默认方法。
>
>使用 Post 传输的数据，可以通过设置编码的方式正确转化中文；而 Get 传输的数据却没有变化。在以后的程序中，我们一定要注意这一点。

---

​	$.get(*URL*,*callback*);     $.post(*URL,data,callback*);   //可选的 *data* 参数规定连同请求发送的数据。

​	必需的 *URL* 参数规定您希望请求的 URL。 可选的 *callback* 参数是请求成功后所执行的函数名。

```javascript
$.get("demo_test.php",function(data,status){
    alert("数据: " + data + "\n状态: " + status);
  });  //第一个回调参数存有被请求页面的内容，第二个回调参数存有请求的状态。
// demo_test.php 文件代码类似这样：
<?php                       
echo '这是个从PHP文件中读取的数据。';  
?>
```

```javascript
 $.post("/try/ajax/demo_test_post.php",     //希望请求的 URL
    {  name:"菜鸟教程",
        url:"http://www.runoob.com"         //连同请求（name 和 url）一起发送数据
    },           // "demo_test_post.php" 中的 PHP 脚本读取这些参数，对它们进行处理，然后返回结果。
        function(data,status){      //data存有被请求页面的内容，status存有请求的状态。 
        alert("数据: \n" + data + "\n状态: " + status);
    });

// php 文件类似这样：
<?php
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$url = isset($_POST['url']) ? htmlspecialchars($_POST['url']) : '';
echo '网站名: ' . $name;
echo "\n";
echo 'URL 地址: ' .$url;
?>
```

