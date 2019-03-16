function loadXMLDoc(){   //通过AJAX，js无需等待服务器响应而是等待响应时执行器脚本，响应就绪后对响应进行处理
    //XHR创建对象,各浏览器内置对象
    //XMLHttpRequest对象用于和服务器交换数据
   var request1;
    if(window.XMLHttpRequest()){
        //iE7+ ff,chrome,Safari Opera 浏览器执行代码
         request1=new XMLHttpRequest();
    }else{
        //iE 5,6 执行代码
         request1=new ActiveXObject("Msxml2.XMLHTTP")
    }
   //发送请求给服务器 使用该对象的open(method,url,async)与send(string)方法
   //open方法规定请求的类型(get|post),url(文件在服务器的位置)及是否异步(true|false)
   //send()方法将请求发送到服务器。string参数仅用于post请求
   request1.onreadystatechange=function(){  //readyState status及该事件为xmlhttprequset对象的三个属性，每当readyState改变时会触发该事件。readyState存有该对象的状态0-4，未开始/已连接/接收结束处理中/请求完成响应就绪。status 200-ok 404未找到页面
        if(request1.readyState==4&&request1.status==200){ 
            document.getElementById("myDiv").innerHTML=request1.responseText;  //获得来自服务器的响应使用XMLHTTPRequest对象的responseText或responseXML属性。分别是字符串/XML形式的响应数据。xml需要作为对象来解析
        // xmlDoc=xmlhttp.responseXML;
        // txt="";
        // x=xmlDoc.getElementsByTagName("ARTIST");
        // for (i=0;i<x.length;i++)
        // {
          //  txt=txt + x[i].childNodes[0].nodeValue + "<br>";
         //}
         // document.getElementById("myDiv").innerHTML=txt;
        }  //当async为true则异步时，要规定在响应处于onreadystatechange事件中的就绪状态时执行的函数           
   }    //当open中async为false则同步时，将本事件内执行的函数移至send方法即发出后(末尾)执行.


   request1.open("GET","ajax_info.txt",true);   
   //get方法会获得缓存结果，为避免这样的情况给url一个唯一id
   //如xmlhttp.open("GET","demo_get.php?t=" + Math.random(),true);
   //若希望您希望通过 GET 方法发送信息，请向 URL 添加信息：
   //xmlhttp.open("GET","demo_get2.php?fname=Henry&lname=Ford",true);
   request1.send();
  //以上open,send为普通方式。若post需要像html表单那样提交数据，则使用setRequestHeader(header_name,header_value)来添加HTTP头。然后send方法中添加想要发送的数据
  //xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
  //xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  //xmlhttp.send("fname=Henry&lname=Ford");

 }