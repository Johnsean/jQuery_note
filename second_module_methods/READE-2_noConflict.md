# [jQuery中文文档](https://www.jquery123.com/hover/) [菜鸟教程笔记](https://www.runoob.com/jquery/jquery-tutorial.html)

two days;      [中文文档2](http://www.365mini.com/doc/page/7)

 jQuery是为了**处理HTML事件**而特别设计的，遵循以下原则，代码更易维护：

 * 把所有jQuery代码置于事件处理函数中

 * 把所有事件处理函数置于文档就绪事件处理器中

 * 把jQuery代码置于单独的.js文件中

 * 如果存在**名称冲突** 则**重命名jQuery库**

   Query是有良好的封装，全局只有一个jQuery对象，不污染[顶级域名](https://www.baidu.com/s?wd=%E9%A1%B6%E7%BA%A7%E5%9F%9F%E5%90%8D&tn=SE_PcZhidaonwhc_ngpagmjz&rsv_dl=gh_pc_zhidao)。

### jQuery 名称冲突  （多库共存问题）

​       `jQuery.noConfilct();` // 使jQuery让出"$" ，使用变量jQuery。

​	该函数会返回jQuery对象本身，于是可以用来取别名 `var j = jQuery.noConfilt();`//如果单纯地想取别名，使用var j = jQuery;就可以

​       该方法的原理: 提前把$的原本对象保存起来，调用该方法的时候再恢复。

##### `源码：`

```javascript
// Map over jQuery in case of overwrite
_jQuery = window.jQuery,
// Map over the $ in case of overwrite
_$ = window.$,
jQuery.extend({noConflict: function( deep ) {  //noConflict如果指定deep为true，是可以把jQuery的全局对象也让出来，这种用法可以用于多个jQuery版本的替换。
					if ( window.$ === jQuery ) {
								window.$ = _$;}
					if ( deep && window.jQuery === jQuery ) {
								window.jQuery = _jQuery;}
								return jQuery;}
```

#### [jQuery.noConflict() 函数详解](http://www.365mini.com/page/jquery_noconflict.htm)

​       该函数用于**让出jQuery库**对变量$(和变量jQuery)的控制权。函数参数为布尔值 removeAll，真则全移出，假则移出变量$，默认值为假 

> 一般情况下，在jQuery库中，变量`$`是变量`jQuery`的别名，它们之间是等价的。
>
> 该函数属于全局`jQuery`对象。语法:静态函数:jQuery.noConflict( [ removeAll ] )
>
>  			返回值:jQuery类型，返回变量`jQuery`的引用。

---

#### **多库共存:**  

  1.  **其他JS库**也使用变量$ ，如Prototype库。这时候由于变量$可能发生冲突 →让出$控制权

  2.  **不同版本**的jQuery库共存    → 让出  **$**  &  jQuery  控制权.

     > *注意*：多个可能存在全局变量重名冲突的JS库，变量的实际控制权一般取决于JS库的加载顺序。栗:三个版本的jQuery库的，后加载的jQuery库的变量覆盖了之前版本的变量，因此每次让出变量的控制权，控制权就会交给上一个JS库。

代码如下:

```javascript
 栗子1 ： jQuery库在其他库之后引入 jQuery获得“$"使用权 ，//若之前引用则不会占用“$”
<script type="text/javascript" src="prototype.js"></script>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript">
// 让出对变量$的控制权
jQuery.noConflict();  //var j = jQuery.noConflict();  自定义变量名操作jQuery
						//并让出对变量$的控制权					
// 使用jQuery进行DOM操作
jQuery("#uname").hide(); 	//j("#uname").hide();   基于jQuery进行DOM操作

// 使用Prototype进行DOM操作
$("myDiv").setStyle( {color: "#ffffff"} );
</script>
```

```javascript
 栗子2: 将局部变量$作为jQuery的别名使用  //在jQuery.ready()的回调函数或其他自定义函数中
jQuery.noConflict();  // 让出jQuery库对变量$的控制权

jQuery(document).ready(function($){    // 使用局部变量$进行jQuery操作
  $("p").css("color", "");  });

(function($){     // 使用局部变量$进行jQuery操作
		 $("ul li").addClass("item");    
}(jQuery));
```

```javascript
 栗子3:  三个版本的jQuery库共存
 <script type="text/javascript" src="jquery-1.4.2.js"></script>
<script type="text/javascript" src="jquery-1.8.3.js"></script>
<script type="text/javascript" src="jquery-1.11.1.js"></script>
<script type="text/javascript">
// 让出jQuery-1.11.1对变量$和变量jQuery的控制权，使用变量j来控制
var j = jQuery.noConflict( true );

jQuery.noConflict();		// 让出jQuery-1.8.3对变量$的控制权

document.writeln( j.fn.jquery ); // 1.11.1
document.writeln( jQuery.fn.jquery ); // 1.8.3
document.writeln( $.fn.jquery ); // 1.4.2
</script>
```

- [ ]   疑问： 完全将 jQuery 移到一个新的[命名空间](https://blog.csdn.net/liu__hua/article/details/44853677)：👈

```javascript
var dom = {};
dom.query = jQuery.noConflict(true);
结果：
dom.query("div p").hide();	// 新 jQuery 的代码
$("content").style.display = "none";	// 另一个库 $() 的代码  ？
jQuery("div > p").hide();	// 另一个版本 jQuery 的代码     ？ 他得让出￥$的控制权
```

---

