# [jQuery中文文档](https://www.jquery123.com/hover/) [菜鸟教程笔记](https://www.runoob.com/jquery/jquery-tutorial.html)

## 1-1 安装。

网页中添加： 1. 从jquery.com下载jQuery库

​				* Production version用于实际网站  * Development version测试开发 这两个版本

​			2.从CDN载入jQuery。

<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js">

### 1-2语法。

​				选取元素,对元素执行操作 

``` 
$(selector).action()
```

  文档就绪事件：

```javascript
	$(document).ready(function()) {

}
//或者 $(function()){ }
```



### 1-3选择器：

jQuery 选择器允许对 HTML**元素组**或单个元素进行操作。

 1. 元素名 ：$("p")

 2. id 选择器 $("#test")

 3. .class 选择器 $(".test")

    . 表示class       #  id    ：类型(type)    [ ]  属性

    **:** 即为 jQuery 的过滤选择器，语法类似于 css 中的伪类选择器；其过滤选择器大概可以分为基本过滤（p:first 之类）、内容过滤（:empty）、子元素过滤(:first-child)和属性过滤 **[href]** 选择器。

| $("p:first")           |                   选取第一个 <p> 元素                   |
| ---------------------- | :-----------------------------------------------------: |
| $("ul li:first")       |         选取第一个 <ul> 元素的第一个 <li> 元素          |
| $("ul li:first-child") |          选取每个 <ul> 元素的第一个 <li> 元素           |
| $("[href]")            |                选取带有 href 属性的元素                 |
| $("tr:even")           |           选取偶数位置的 <tr> 元素  odd 奇数            |
| $(":button")           | 选取所有 type="button" 的 <input> 元素 和 <button> 元素 |

```javascript
$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  });
});
```

```scss
$("#id", ".class")  复合选择器
$(div p span)       层级选择器 //div下的p元素中的span元素
$(div>p)            父子选择器 //div下的所有p元素
$(div+p)            相邻元素选择器 //div后面的p元素(仅一个p)
$(div~p)            兄弟选择器  //div后面的所有p元素(同级别)
$(.p:last)          类选择器 加 过滤选择器  第一个和最后一个（first 或者 last）
$("#mytable td:odd")      层级选择 加 过滤选择器 奇偶（odd 或者 even）
$("div p:eq(2)")    索引选择器 div下的第三个p元素（索引是从0开始）
$("a[href='www.baidu.com']")  属性选择器
$("p:contains(test)")        // 内容过滤选择器，包含"text内容"的p元素
$("div:has(p)")         //					含有"p标签"的div标签
$(":empty")        //内容过滤选择器，所有空标签（不包含子标签和内容的标签）parent 相反
$(":hidden")       //所有隐藏元素 visible 
$("input:enabled") //选取所有启用的表单元素
$(":disabled")     //所有不可用的元素
$("input:checked") //获取所有选中的复选框单选按钮等
$("select option:selected") //获取选中的选项元素
```



### 1-4 事件

	> 页面对不同访问者的响应 叫做事件
	>
	> > > 事件处理程序：当html中发生某些事件时所调用的方法

 **语法**：1. 为元素指定点击事件：

​	    2. 定义什么时间出发事件(事件函数)实现：

```javascript
$("p").click(); //1
$("p").click(function(){       //2
    // 动作触发后执行的代码!!
});              
```

​	**获取触发事件的说明** ：

```javascript
$(document).ready(function(){
    $(window).keypress(function(event){    
       console.log(event); //获取事件对象，里面包含各种有用的信息。
//keypress中event.which是获取ASCII码，前面的函数是将ASCII码转换成字符，空格键和Enter键输出均为空白。 
       console.log(String.fromCharCode(event.which));
//从event对象中key属性获取字符，但是Enter键的key值为"Enter"，空白键还是空白" "。
       console.log(event.key);
    });
});
```

##### 常用事件方法：  [事件方法档案](https://www.runoob.com/jquery/jquery-ref-events.html)

 **$(document).ready()** 方法允许我们在文档完全加载完后执行函数。

>以下介绍是 `x方法触发y事件/触发被选元素的y事件`，或`添加当发生x事件时运行的函数y（可选项）。`
>
>​				除了hover 不是👆

> ##### **Ex:  **
>
> ```javascript
>   $("p").mouseover(function(){	$("p").css("background-color","yellow");});  //over事件运的函数
>   $("p").mouseout(function(){	$("p").css("background-color","lightgray");}); //同👆
>   $("#btn1").click(function(){  $("p").mouseover();});  //click方法触发 x over事件
>   $("#btn2").click(function(){  $("p").mouseout();});  //click方法触发x out事件
> ```

----

*  **click()** 方法 在用户点击html元素时执行。 【点击按下松开的这一过程结束。】

* **`dbl`click()** 方法 ，**双击**元素时发生

  ---

> **hide**和 **fadeOut**都可以带有参数：

```javascript
$(selector).hide(speed,callback);  //隐藏   show 显示   hide隐藏的效果是从下至上或从右下到左上的慢慢折叠缩小
$(selector).fadeOut(speed,callback); //淡出  fadeIn淡入  fadeOut的淡出效果是整体淡化直至消失。
```

---

- **mouse`enter`**() 方法  当鼠标指针**`穿过`**元素时发生, **mouse`leave`**() 鼠标指针**`离开`**时发生
  - 区别于mouse**`over`**,鼠标移动元素及其子元素上时都会触发，而`enter`只在选取的元素上时才触发     ~~~mouse`out`  mouse`leave` 类似👆~~~

- **mouse`down`**() 方法  当鼠标指针移动到**`元素`**上方并**按**下鼠标`左右按键`时发生, **mouse`up`**与之相反

- **hover**() 方法 用于模拟光标**`悬停`**事件 .  (`.hover()`方法是同时绑定 `mouseenter`和 `mouseleave`事件)    **注意:** 如果只指定一个函数，则 mouseenter 和 mouseleave 都执行这个函数。---

> 当鼠标`移动`到元素上时，会触发指定的第一个函数(mouse`enter`);
>
> 当鼠标`移出`这个元素时，会触发指定的第二个函数(mouse`leave`)。

> ​		$("#p1").`hover`( `function()`{ alert("你进入了 p1!"); }`,`
> ​    					 `function()`{alert("拜拜! 现在你离开了 p1!"); });

>  语法：$(*selector*).hover(*inFunction,outFunction*) 等同于 `$( selector ).mouseover( handlerIn ).mouseout( handlerOut );`
>
> `$(selector).hover(handlerInOut)`等同于`$( selector ).on( "mouseover mouseout", handlerInOut );`

---

+ **focus**()方法   当元素**获得焦点**时，发生 focus 事件。

  当通过**鼠标**点击**选中**元素或通过**tab **键**定位**到元素时，该元素就会获得焦点。

- **blur**()方法 当元素失去焦点时，发生blur事件  

  ```javascript
  $("input").focus(function(){ $(this).css("background-color","#ff0000");})；
  $("input").blur(function(){ $(this).css("background-color","#ffffff");});
  		// $(selecotr).css("attribute","value");
  ```

  ---

 #### 余下的：  键盘类。表单类。文档/窗口类

​	**keypress()** - 键被按下  **keydown**- 键被按下的过程(用于检测按哪个键)   **keyup**-键被松开

​        **keypress()**与**click** 有区别：

​		在Input内输入时 keypress 计数的是输入的个数而不是按下到起来算一次。( ALT、CTRL、SHIFT、ESC等这些按键不会触发 keypress事件) （**检测不到汉字输入法输入？**）

​			`i = 0 ;  $("span").text(i+=1); `span内 从0开始计数

​	**keydown**: 使用event.which 属性返回哪个键盘键（或鼠标按钮用mousedown)被按下。

​		`$("div").html(" " + event.which);`//div显示 键盘数字码，event来自事件绑定函数

#####   	**keypress,keydown,keyup的区别:**

-  1.keydown：一直按着则会不断触发（opera浏览器除外）, 它返回的是键盘代码;

-  2.keypress：按下一个按键，并产生一个字符时发生, 返回ASCII码。注意: **shift、alt、ctrl**等键按下并不会产生字符，所以监听无效 ,换句话说, 只有按下能在屏幕上输出字符的按键时keypress事件才会触发。若一直按着某按键则会不断触发。

- 3.keyup：用户松开某一个按键时触发, 与keydown相对, 返回键盘代码.

  ​	案例1:获取按键代码或字符的ASCII码

  ```javascript
  $(window).keydown( function(event){
     // 通过event.which可以拿到按键代码.  如果是keypress事件中,则拿到ASCII码.
  } );
  ```

  ​       案例2:传递数据给事件处理函数:

  `jQueryObject.keydown( [[ data ,]  handler ] );`

  data: 通过event.data传递给事件处理函数的任意数据; handler: 指定的事件处理函数;

  Ex: 

  ```javascript
  // 只允许按下的字母键生效, 65~90是所有小写字母的键盘代码范围.
  var validKeys = { start: 65, end: 90  };
  $("#keys").keydown( validKeys, function(event){
      var keys = event.data;  //拿到validKeys对象.
      return event.which >= keys.start && event.which <= keys.end;
  } );
  ```

···················································

​	**submit**  提交表单时会发送该事件，该事件只适用于<form>元素。 阻止表单提交：

​                           ` $("form").submit(function(event){`
​                              ` event.preventDefault();});`

​        **change** 当元素的值改变时发生，仅适用于表单字段。 (input 、select >option)

>  **注意：**当用于 select 元素时，change 事件会在选择某个选项时发生。当用于 text field 或 text area 时，change 事件会在元素失去焦点时发生。

---

​	**load 在jQuery1.8版本中已废弃**

---

>load() 方法添加事件处理程序到 load 事件。当指定的元素已加载时，会发生 load 事件。

> 该事件适用于任何带有 URL 的元素（比如图像、脚本、框架、内联框架）以及 window 对象。

> 根据不同的浏览器（Firefox 和 IE），如果图像已被缓存，则也许不会触发 load 事件。

> **注意：**还存在一个名为 load() 的 jQuery [AJAX](https://www.runoob.com/jquery/jquery-ref-ajax.html) 方法。根据不同的参数决定调用哪个方法。

---

​	**resize**方法 当调整浏览器窗口大小时，发生 resize 事件。

​		`$(window).resize(function(){});`

​	**scroll**方法 当用户滚动指定的元素时 

​		 scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。

​	**unload**  方法在 jQuery 版本 **1.8 中[被废弃](https://www.runoob.com/jquery/NewWindow('deprecated.htm'))，在 3.0 版本**被移除。 该方法只应用于 window 对象。

---

> Firefox 与 Chrome 会阻止弹窗，所以没办法看到效果。
>
> ​	当用户离开页面时，会发生 unload 事件。
>
> 当发生以下情况下，会触发 unload 事件：
>
> - 点击某个离开页面的链接
>
> - 在地址栏中键入了新的 URL
>
> - 使用前进或后退按钮
>
> - 关闭浏览器窗口
>
> - 重新加载页面
>
>   unload 事件在不同浏览器中效果不一样，请确保使用前在所有浏览器测试该方法。

---

