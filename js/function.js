//解决getElementsByClassName
function getClass(classname,obj){
	var obj=obj||document;//如果传了第二个参数，obj就是传的参数,如果                            
	if(obj.getElementsByClassName){
		 //alert("支持");
         return obj.getElementsByClassName(classname);
        
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName("*");
		 for (var i = 0; i < alls.length; i++){
		 	  if(check(alls[i].className,classname)){

                  arr.push(alls[i])  
		 	  }
		 };
		 return arr;
	}
}

  function check(newclass,oldclass){
  	 var flag=false;
      var Nc=newclass.split(" ")
      for (var i = 0; i < Nc.length; i++) {
         if(Nc[i]==oldclass){
           flag=true;
         }   
      };
      return flag;
  }


//解决获取修改兼容问题
  function getText(obj,val){
	if(val==undefined){
	        if(typeof obj.textContent=='string'){
	        //console.log("f/c/ie9-11")
	     return obj.textContent;
	    }else{
	    	//alert("ie6-8/chorme")
	    	return obj.innerText;
	    	
	    }
	}else{
		 if(typeof obj.textContent=='string'){
	        //console.log("f/c/ie9-11")
	      obj.textContent=val;
	    }else{
	    	//alert("ie6-8/chorme")
	    	obj.innerText=val;
	    	
	    }
	}
    
}
////兼容浏览器行内样式和外部样式
function getStyle(obj,attr){
	if(!obj.currentStyle){
		return getComputedStyle(obj,null)[attr];

	}else{
		return obj.currentStyle.attr
	}
}

//简化获取元素方式  添加事件
function $(selector,obj){
	if(typeof selector==='string'){
		var obj=obj||document;
		if(selector.charAt(0)=='.'){
			return getClass(selector.substring(1),obj);
		}else if(selector.charAt(0)=='#'){
			return obj.getElementById(selector.substring(1));
		}else if(/^[a-z][a-z1-6]{0,9}$/g.test(selector)){
			return obj.getElementsByTagName(selector);
		}else if(/^<[a-z][a-z1-6]{0,9}>$/.test(selector)){
			return document.createElement(selector.slice(1,-1));
		}
	}else if(typeof selector=='function'){
		// selector();
		window.onload=function(){
			selector();
		}
	}
}
//获取子节点
function getChild(parent,t){
	var childs=parent.childNodes;
	var arr=[];
	var t=t||false;
	if(t==true){
		for (var i = 0; i < childs.length; i++) {
			if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s+|\s+$/g,'')!='')){
				arr.push(childs[i]);
			}
		};
	}else if(t==false){
		for (var i = 0; i < childs.length; i++) {
			if(childs[i].nodeType==1){
				arr.push(childs[i]);
			}
		};
	}
	return arr;
}
//获取第一个子节点
function getFirst(obj){
     return getChild(obj)[0];

}
//获取最后一个子节点
function getLast(obj){
	var allChild=getChild(obj);
	return allChild[allChild.length-1]
}
//获取下一个兄弟字节点
function getNext(objs){
    var next=objs.nextSibling;
    if(next==null){
      return false;
    }
    while(next.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s+|\s+$/g,'')=='')){
	  next=next.nextSibling;
	  if(next==null){
           return false;
	  }
    }
    return next;
}

//获取任意一个字节点
function getNum(obj,num){
    return getChild(obj)[num]
}
//获取上一个兄弟字节点
function getup(objs){
	var up=objs.previousSibling;
    if(up==null){
      return false;
    }
    while(up.nodeType==8||(up.nodeType==3&&up.nodeValue.replace(/^\+s+|\s+$/g,'')=='')){
	  up=up.previousSibling
	  if(up==null){
           return false;
	  }
    }
    return up;

}

//插入到之前的对象
function insettBefore(obj1,obj2){
     var parents=obj2.parentNode;
     parents.insertBefore(obj1,obj2)
}


//插入到之后的对象

function insertAfter(obj1,obj2){
	var next=obj2.nextSibling;
	next.insertBefore(obj1,obj2)
}