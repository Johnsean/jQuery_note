# [jQuery中文文档](https://www.jquery123.com/hover/) [菜鸟教程笔记](https://www.runoob.com/jquery/jquery-tutorial.html)

two days;      [中文文档2]

### jQuery 效果:

#### 	隐藏、显示、切换，滑动，淡入淡出，以及动画

​    这些方法内的两个参数：speed 或 *duration*,callback 作为可选参数

​		speed 规定效果显示的速度，可以取以下值："slow"、"fast" "nomal" 或毫秒。

​		callback 是执行效果**完成后**所去执行的函数名称。(未完成则不执行)

```javascript
$("div").hide(1000,"linear",function(){ //带有speed参数的hide()方法，并使用回调函数：
	alert("Hide() 方法已完成!"); //第二个参数是一个字符串,表示过渡使用哪种缓动函数
});					//：jQuery自身提供"linear" 和 "swing"，其他可以使用相关的插件
```
对于可选的 **callback** 参数，有以下两点说明：

   * $(*selector*)选中的元素的个数为n个，则callback函数会执行n次；
   * 函数名后加括号，会立刻执行函数体且只会调用一次；
        * ​	而不是等到(效果如显示/隐藏)完成后才执行；
   * callback既可以是函数名，也可以是匿名函数；



#### hide  隐藏  show 显示，toggle 家族是有则使用无，无则使用有

	> toggle() 方法来切换 hide() 和 show() 方法 ,显示被隐藏的元素，并隐藏已显示的元素.		

****

#### Fading 方法： fadeIn 淡入 fadeOut 淡出 fadeToggle 淡入淡出 

#### fadeTo :  *语法不一 三个参数*。 前两个参数必须。

> 渐变为给定的不透明度。 （值介于 0 与 1 之间）
>
> 语法：`$(selector).fadeTo(speed,opacity,callback);`

####  滑动方法  ： slideDown 向下滑 slideUP slideToggle

> 猜： 以上这些方法上下滑动或者隐藏显示 需要设置隐藏，滑动让元素处于隐藏/未隐藏的状态

---

### 动画  animate 方法运行创建自定义动画

1.**语法**：$(*selector*).animate**({*params*}*,speed,callback*);**

* 必需的 **params** 参数定义形成动画的 CSS 属性。 后面两个参数可选

* 默认情况下，所有 HTML 元素都有一个**静态位置**，且无法移动。
  如需对**位置**进行操作，要把元素的 CSS position 属性设置为 relative、fixed 或 absolute！

* 生成动画的过程中可同时使用多个属性，**逗号**隔开

  > 可以用 animate() 方法来操作几乎所有 CSS 属性，(色彩动画不包含在核心 jQuery 库中,若要生成颜色动画，需要从 [jquery.com](http://jquery.com/download/) 下载 [颜色动画](http://plugins.jquery.com/color/) 插件）
  >
  > 当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名。例如：是paddingLeft 而不是 padding-left

#### 2.属性值的设置： 可以使用相对值，可以使用预定义的值

 相对值 Ex: `{ left:'250px', height:'+=150px',}`  

​		//定义相对值（该值相对于元素的当前值）。需要在值的前面加上 += 或 -=：

 预定义的值 Ex: `{ height:'toggle'}`  

​		// 把属性的动画值设置为 "show"、"hide" 或 "toggle"

#### 3. 使用队列功能 (篇幅极长，放置末尾)

  默认地，jQuery 提供针对动画的队列功能。

>  编写多个 animate() 调用，jQuery 会创建包含这些方法调用的"内部"队列。然后逐一运行这些 animate 调用。

 Ex:   	 

``` javascript
  var div=$("div");
  div.animate({left:'100px'},"slow");  //div 右移100px ;相对x轴屏幕的左边100px 位置 可以正负号
  div.animate({fontSize:'3em'},"slow"); //之后div 文字大小变为3倍
```

#### 动画回调函数 : 

​		如果想在最后一步切换css样式 .链式写法css()方法会被提前调用。

```javascript
$(this).animate({top:"40px"},500).css("border","5px solid blue");
```

​	原因是，**css()方法不会加入到动画队列中，而是立即执行**。

​	可以使用回调函数对非动画方法实现排队。正确的相关代码如下：

```javascript
$(this).animate({top:"40px"},500,function(){
$(this).css("border","5px solid blue")});
```

#### 停止动画:   stop() 方法 用于在动画或效果完成前对它们进行停止。

​	stop() 方法适用于**所有 jQuery 效果函数**，包括滑动、淡入淡出和自定义动画。

**语法**：$(*selector*).stop(*stopAll,goToEnd*);   参数布尔值 均为可选 默认false

 	stopAll 规定是否应该**清除动画队列**。

*  默认是 false，即**仅停止活动**的动画，允许任何排入**队列的动画向后执行**。

  goToEnd 规定是否**立即完成当前**动画的动作。默认是 false。

#### Callback :在当前动画 100% 完成之后执行。

​	以下实例没有回调函数，警告框会在隐藏效果完成前弹出：

```javascript
$("button").click(function(){
  $("p").hide(1000);
  alert("段落现在被隐藏了");
});
```

​	`被立即停止的动画不会触发回调，被立即完成的动画会触发回调。`

#### 链(Chaining) :  通过 jQuery，可以把动作/方法链接在一起。

​		Chaining 允许我们在一条语句中运行多个 jQuery 方法（在**相同的元素**上）。

> 这样的话，浏览器就不必多次查找相同的元素。如需链接一个动作，只需简单地把该动作追加到之前的动作上

```javascript
$("#p1").css("color","red").slideUp(2000).slideDown(2000);  // Ex
```

jQuery 语法不是很严格；jQuery 会抛掉多余的空格(包含换行和缩进)，并当成一行长代码来执行上面的代码行。







------------------------------------------------------------以下拓展-----------------------------------------------------------

---

**[队列操作]** (https://www.cnblogs.com/webFrontDev/p/3265568.html)  

jquery中有一个Queue队列的接口，这个模块没有单独拿出来作为一个章节是因为这个是内部专门为动画服务的，Queue队列如同data数据缓存与Deferred异步模型一样，都是jQuery库的内部实现的基础设施

Queue队列

队列是一种特殊的线性表，只允许在表的前端（队头）进行删除操作（出队），在表的后端（队尾）进行出入操作（入队），队列的特点是先进先出，最先插入的元素最先被删除。

为什么要引入队列

```javascript
var a = 1;
setTimeout(function(){
　　a=2;
},0)
alert(a);
```

我们一直习惯于线性的编写代码逻辑，但是在JavaScript编程几乎总是伴随着异步操作：

setTImeout，css3Transition/Animation,ajax,dom的绘制，postmessage，web Database 等等，大量异步操作所带来的回调函数会把我们的算法分解，**对于“异步+回调”的模式，怎么“拉平”异步操作使之跟同步一样，因为异步操作进行流程控制的时候无非避免的要嵌套大量的回调逻辑，所以就会出现 promises 约定了。**

那么 jQuery 引入队列其实从一个角度上可以认为：**允许一系列函数被异步地调用而不会阻塞程序**。

看一个代码段：

```javascript
$("#Aaron").slideUp().fadeIn()
```

这是 jQuery 的一组动画链式序列，它的内部其实就是一组队列 Queue，所以队列和 Deferred 地位类似，是一个内部使用的基础设施。

- 当 slideUp 运行时，fadeIn 被放到 fx 队列中
- 当 slideUp 完成后，从队列中被取出运行

Queue 函数允许直接操作这个链式调用的行为，同时 Queue 可以指定队列名称获得其他能力而不局限于 fx 队列。

jQuery 提供了 2 组队列操作的 API：

```javascript
jQuery.queue/dequeue
jQuery.fn.queue/dequeue
```

但是不同与普通队列定义的是：

- jQuery.queue 和 jQuery.fn.queue 不仅执行出队操作返回队头元素，还会自动执行返回的队头元素
- fn 是扩展在原型上的高级API是提供给实例使用的
- .queue/.dequeue 其内部是调用的 .queue，.dequeue 静态的底层方法实现入列与出列

---

#### 动画调度

对于 jQuery 的动画的设计我们要分 2 个层面理解：

1. 每一个动画效果可以看作一个独立的动画对象，每个对象都实现了针对自己这个动画的生命周期的控制
2. 动画对象与动画对象之间其实是没有直接关系，但是为了做到连续调用就需要引入一套队列机制也就是 Queue 来控制对象之间的转换的控制

动画的源码：

```javascript
animate: function(prop, speed, easing, callback) {
   doAnimation = function() {
      var anim = Animation(this, args, optall);
   };
   this.queue(optall.queue, doAnimation);
}
```

这个代码缩减了，但是我们上面提到的最重要的 2 点这里都涉及到了：通过 queue 调度动画的之间的衔接，Animation 方法执行单个动画的封装。

jQuery 在 queue 的调度上涉及了一个关键的处理：同步与异步代码同时执行，同步收集动画序列，异步调用序列，看看整个调用的流程是这样的：

1. 通过多个 animate 方法形成动画链，那么这个动画链其实都是会加入到 queue 队列里面
2. 在每一次 queue 方法中会把动画数据写到队列中，然后取出队列中的第一个序列通过 dequeue 方法执行
3. 开始执行之前写一个进程锁“inprogress”到 queue 里面，代表这个动画还在执行中，防止同个序列的多个动画重复执行，这个就是异步执行同步收集的处理方案
4. 此时动画开始了，这里注意动画是在异步执行的同步的代码，继续调用下一个 animate
5. 执行同样的 animate 方法逻辑但是此时问题来了，动画可能还在执行可是后续的 animate 还在继续调用，所以这个时候后面的动画代码就需要等待了（进程锁）
6. 队列头是有一把“inprogress”进程锁的，那么这时候动画只需要加入队列，但是可以通过 inprogress 是否存在来判断是否执行
7. 所有的 animate 方法在加入队列都是按照以上的逻辑依次执行，动画执行完毕了就会有一个结束通知，然后从 queue 取出第一个队列继续执行了，如此循环

以上是整个动画的调度一个流程，其实都是利用队列异步的空闲然后执行同步的代码，这样在处理上是没有浪费资源的，而且精确度也是最高的。

---

--------------------------------------------------------end----------------------------------------------------------------