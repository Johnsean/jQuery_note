# [jQuery中文文档](https://www.jquery123.com/hover/) [菜鸟教程笔记](https://www.runoob.com/jquery/jquery-tutorial.html)

 two — HTML:



### jQuery 捕获：获取内容和属性:

> Query 拥有可操作 HTML 元素和属性的强大方法。jQuery 提供一系列与 DOM 相关的方法，这使访问和操作元素和属性变得很容易。**DOM = Document Object Model（文档对象模型）**

​	DOM 定义访问 HTML 和 XML 文档的标准："W3C 文档对象模型独立于平台和语言的界面，允许程序和脚本动态访问和更新文档的内容、结构以及样式。"

#### 获得/设置内容  text、html、val 三个用于DOM操作的jQuery方法：

  * **text()**   ---设置或返回所选元素的文本内容  ` //（）内为空则是获取 反之设置  下面同样`
  * **html()**   ---                                    的 内容 (包括HTML标记) 
  * **val ()**     ---                     **表单字段的值 ** 

#### 获取/设置属性值 -attr()    ` //可同时设置多个属性  `

> **attr** 和 **prop** 的区别介绍：
>
> 对于 HTML 元素本身就带有的固有属性，在处理时，使用 **prop** 方法。
>
> 对于 HTML 元素我们自己自定义的 DOM 属性，在处理时，使用 **attr** 方法。
>
> **栗 子**：
>
> ```javascript
> <a href="//www." target="_self" class="btn" action="delete">菜鸟教程</a>
> //a本身元素DOM属性有：href、target 和 class
> //处理这些属性时，建议使用 prop 方法。
> 
> //自定义的DOM属性：action a元素本身没有它。
> //处理这些属性时，建议使用 attr 方法。
> ```
>
> **attr()函数的结果:**   如果有相应的属性，返回指定属性值。
>
> 如果没有相应的属性，返回值是**undefined**。
>
> **prop()函数的结果:**  如果有相应的属性，返回指定特性值。
>
> 如果没有相应的属性，返回值是**空字符串**。  具有 true 和 false 两个值的特性，如 checked, selected 或者 disabled 使用prop()

---



**设置html(): ** 

```javascript
$("#test2").html("<b>Hello world!</b>"); (标签也包含)
```



**设置多个属性-attr** ：

```javascript
 $("#runoob").attr({								//｛｝包起属性
        "href" : "http://www.runoob.com/jquery",   //“键” ： “值” 逗号隔开每对属性
        "title" : "jQuery 教程"
    });
 $("#runoob").attr(	"href","http://www.runoob.com/jquery"); //设置一个属性同css👇

//设置动画css多个属性：
$("div").animate({								//｛｝包起属性 单个属性也要该括号
    left:'250px',                          		//类.css格式书写，键无双引号
    opacity:'0.5'
  });
// CSS方法设置多个属性 :
 $("p").css("background-color","lightgray"); //"" 逗号相隔而非分号隔开该对属性
```



**回调函数**：

text()、html() 以及 val()，**attr() **   回调函数有两个参数： (i,origText)

​					被选元素列表中当前元素的下标，以及原始（旧的）值。

​					然后以函数新值返回希望使用的字符串。

i : 下标       origText:当前元素的文本内容(不含标签)。

```javascript
$(selector).text(function(i,origText){ return origText +i+""});
	...		.html  ...
    ...     .attr   ...
```



#### 添加元素/内容

添加新内容的四个 jQuery 方法： (生成文本/HTML)

- append() -    在被选元素的     **结尾**  插入内容    (仍然该元素的内部)
- prepend() -  在被选元素的     **开头**  插入内容
- after() -         在被选元素        **之后**  插入内容
- before() -      在被选元素        **之前**  插入内容

append 在元素内部的最后添加元素，作为子元素

prepend 在....              最前面添加元素，作为子元素:

![](https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=c6fb72daf8d3572c66b794daba234f1f/e7cd7b899e510fb3c30e52a4d333c895d1430ce9.jpg)

通过添加jQuery代码 `$("div").prepend("<p>我是通过prepend添加的</p>");` :

![](https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=39c9c11079f082022dc799397bcbd7d5/810a19d8bc3eb135a7789288ac1ea8d3fd1f4441.jpg)

before:在元素的前边，作为兄弟元素添加,如：![](https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=f676e8dfdb00baa1ba794fbd7720952a/55e736d12f2eb938f21b5fc1df628535e5dd6f8a.jpg)

通过jquery代码 `$(".base").before("<div>我是在前边添加的兄弟节点</div>");`：

![](https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=5a1bc140a74bd1130498bf346a9f8837/cdbf6c81800a19d82eb0a13639fa828ba61e4655.jpg)

after:在元素的后边，作为兄弟元素添加

**总结：**

append/prepend 是在选择元素内部嵌入。

after/before 是在元素外面追加

----

**三种方式创建新元素**： 

```javascript
 	var txt1="<p>text.</p>";    		  //使用HTML标签创建文本
    var txt2=$("<p></p>").text("text.");  //使用jQuery创建文本
    var txt3=document.createElement("p");  
				txt3.innerHTML="text.";	   //使用DOM创建文本text 
("body").append(txt1,txt2,txt3); //after/before/prepend 均可追加n个元素

//参数可以是个 list:
 $("img").after([txt1,txt2,txt3]);          // 在图片后添加文本
```



#### 删除元素和内容

   一般使用两个 jQuery 方法：

- **remove()** - 删除被选元素（**及其**子元素） 该方法可接受一个参数，允许对被删元素进行过滤。

  > *该参数可以是任何 jQuery 选择器的语法。*

- **empty()** - 从被选元素中删除**子元素**

```javascript
	$("#div1").remove();  
	$("#div1").empty();
	$("p").remove(".italic"); //接收类选择器 删除所有类为italic的p元素
								//$(selector) 语法的返回结果是一个元素的列表
```



# [jquery追加元素的几种方法](https://blog.csdn.net/xiangxiangw29/article/details/52460563)

![](https://img-blog.csdn.net/20160908101926119?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

