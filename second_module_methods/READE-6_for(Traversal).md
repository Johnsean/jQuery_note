# [jQuery中文文档](https://www.jquery123.com/hover/) [菜鸟教程笔记](https://www.runoob.com/jquery/jquery-tutorial.html)

two _ 遍历

同胞（拥有相同的父元素）。

> 通过 jQuery 遍历，您能够从被选（当前的）元素开始，轻松地在家族树中向上移动（祖先），向下移动（子孙），水平移动（同胞）。这种移动被称为对 DOM 进行遍历。

![](https://www.runoob.com/images/img_travtree.png)

​	jQuery 提供了多种**遍历 DOM**的方法。遍历方法中**最大的种类是树遍历**（tree-traversal）。

 #### 向上遍历DOM树  ---祖先

- parent()		返回被选元素的**直接**父元素。该方法只会向上一级对 DOM 树进行遍历。
- parents()              返回被选元素的**所有祖先**元素，它一路向上**直到文档的根元素** (\<html\>)。
- parentsUntil()      方法返回介于两个给定元素之间的所有祖先元素。[selecotr]元素---👉（arg）

```javascript
$("span").parent();        // 返回所有span元素 的直接父元素
$("span").parents();      //返回所有span元素 的所有祖先元素们
$("span").parents("ul");  //过滤，返回所有span元素 的所有祖先元素中为ul的元素们

$("span").parentsUntil("div"); //返回span与div元素之间的所有祖先元素(不包括span/div)
```



#### 向下遍历DOM树  ---后代

- children()		返回被选元素的**所有直接**子元素。 该方法只会向下一级对 DOM 树进行遍历。
- find()                       返回被选元素的**后代元素**，一路向下直到最后一个后代。必有参数

```javascript
 $("div").children();       //返回所有div元素的所有直接子元素
 $("div").children("p.1"); //过滤, 返回类名为1的所有p元素 并且他们是div的直接子元素

 $("div").find("*");      //返回div元素的所有后代
 $("div").find("span");  //返回所有的span元素们  并且它们是div的后代 (不包括span的子元素)
```



#### 同级遍历  ---同胞（siblings）  同胞拥有相同的父元素。

在 DOM 树进行水平遍历：

- siblings()             返回被选元素的**所有**同胞元素。 可用可选参数来过滤

- next()                  返回被选元素的**下一个**同胞元素。该方法只返回一个元素(们)。

- nextAll()             返回被选元素的**所有跟随**的同胞元素。(返回被选元素之后的所有同胞元素)

- nextUntil()         返回介于两个给定参数之间的所有跟随的同胞元素

- prev()  prevAll()  prevUntil()  他们与上面的工作方向相反

  它们返回的是前面的同胞元素（在 DOM 树中沿着**同胞之前元素**遍历，而不是之后元素遍历）。 

  ```javascript
  $("h2").siblings();  //返回除自己外的所有同胞元素 当有多个h2时 每个h2返回一次则全部都获取了别的h2中包括这个h2
  $("h2").siblings("p");   //过滤 ,选择同胞元素中p元素
  $("h2").next();          //返回h2元素下一个同胞元素们
  
  $("h2").nextAll();       //返回h2元素之后的所有同胞元素
  $("h2").nextUntil("h6"); // 返回h2-h6们之间的所有元素们 h2-h6成对匹配不能重用
  ```

#### 遍历-- 过滤

​    缩小搜索元素的范围：最基本**first(), last() 和 eq() **

​							允许基于其在一组元素中的位置来选择一个特定的元素

​     其他过滤方法，比如 **filter() / not() **允许选取匹配/不匹配某项指定标准的元素。

```javascript
$("div p").first();   //返回被选元素的首个元素 返回第一组div>p 的p元素 
$("div p").last();    //返回被选元素的最后一个元素。
$("p").eq(1);         // 返回被选元素中带有指定索引号的元素。返回第二个p元素
```

```javascript
//filter()方法允许规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。
 $("p").filter(".url");  //返回类名为url的所有 <p> 元素

//not() 方法与 filter() 相反。   返回不匹配标准的所有元素。
 $("p").not(".url");     //返回不带有类名 "url" 的所有 <p> 元素
```

