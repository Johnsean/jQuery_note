# [jQuery中文文档](https://www.jquery123.com/hover/) [菜鸟教程笔记](https://www.runoob.com/jquery/jquery-tutorial.html)

 two — CSS:



### jQuery - 获取并设置CSS类

jQuery 拥有若干进行 CSS 操作的方法:

- addClass()	 -	 向被选元素**添加**一个或多个类
- removeClass() -          从被选元素**删除**一个或多个类
- toggleClass() -            对被选元素进行**添加/删除类的切换**操作
- css() -                          **设置或返回一个或多个样式属性**

```css
.blue{ color:blue;}    //css 样式 
.important
{ font-weight:bold;
  font-size:xx-large;
}
```

```javascript
$("h1,h2,p").addClass("blue");  //选择 添加blue类
$("body div:first").addClass("important blue"); //可以规定多个类 
							//该选择器是选择第一个body下的第一个div
//删除指定的 class 属性：
$("h1,h2,p").removeClass("blue");  //同上、👇可以规定多个类

// toggleClass()
 $("h1,h2,p").toggleClass("blue");  //切换 没有的就加上bule类 有的就删去

```

####  CSS方法： 

**返回CSS属性** : 使用该语法：`css("propertyname");`返回指定的属性的值

```javascript
$("p").css("background-color");  //将返回首个匹配元素的属性的值 
 若要匹配第二个第三个 则在selector 中写清楚
 栗子：
$("p:nth-child(2)") //  伪类 ,但不推荐。①数/②页面动态
$("p").eq(N) // N 是索引号，从 0 开始  选取第几个 p 的方法
```

**设置指定的css属性**：使用该语法:  `css("propertyname","value");` 将为所有匹配元素设置 属性的值：

```javascript
$("p").css("background-color","yellow");  //所有的p设置一个css属性背景黄色

$("p").css({"background-color":"yellow","font-size":"200%"}); //设置多个属性,格式同attr()
```

**设置多个css属性**：使用该语法:   将为所有匹配元素设置多个属性👆👆`css({"propertyname":"value","propertyname":"value",...});`

---



### jQuery尺寸方法：

通过 jQuery，很容易处理元素和浏览器窗口的尺寸。

jQuery 提供多个处理尺寸的重要方法：![](https://www.runoob.com/images/img_jquerydim.gif)

- width()                                content               
- height()                               content
- innerWidth()                      content+2*padding
- innerHeight()
- outerWidth()                      content+2\*padding+2\*border_width
- outerHeight()

width() /height() 方法设置或返回元素的宽/高度（不包括内边距、边框或外边距）。

innerWidth()/innerHeight()  方法返回元素的宽/高度（包括内边距）。

outerWidth()/outerHeight() 方法返回元素的宽/高度（包括内边距和边框）。

**注意**：  css中元素设置了**box-sizing** 后: `box-sizing:border-box;`

width()获取的大小与css中设置的width(相当于jq中的outerWidth)大小(差边框+内边距)*2

```javascript
$("button").click(function(){
  var txt="";
  txt+="div 宽度，包含内边距和边框: " + $("#div1").outerWidth() + "</br>";
  txt+="div 高度，包含内边距和边框: " + $("#div1").outerHeight();
  $("#div1").html(txt);  //显示盒子各个属性值👆👆
});
```

- [ ] [从其中的**box-sizing:border-box;**的属性入手，来重新认识一下盒模型在实际项目中的运用。](https://blog.csdn.net/qq_26780317/article/details/80736514)

- [ ] [框模型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Box_model)  

- [ ] [聊聊几乎已成为现代事实标准的“box-sizing: border-box”](https://www.jianshu.com/p/006a422afb8e)

