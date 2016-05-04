$(function(){
	

	//banner轮播图
	var bannerbox=$(".ban")[0]
	//console.log(bannerbox);
	var as=$("a",bannerbox);
	//console.log(as);
	var btnbox=$(".btnbox")[0];
	//console.log(btnbox);
	var lis=$("li",btnbox);
	var banner=$(".banner")[0];
	//console.log(banner)
    var arr=["#bf0e06","#e70010","#855797","#ff4b9c","#f6ce21","#209fca","#c32607","#6a212c"];
	var index=0;
    var Leftbtn=$(".Leftbtn")[0];
    var Rightbtn=$(".Rightbtn")[0]
	var t=setInterval(wheel,2000);
	function wheel(){
		index++;
		//console.log(index)
		if(index==as.length){
          index=0;

		}
		for(var i=0;i<as.length;i++){
			//console.log(i)
			animate(as[i],{opacity:0});
			lis[i].className="";
			//banner.style.background=arr[i];
			
		}
		   animate(as[index],{opacity:1});
		   lis[index].className="btn";
		   //colorAnimate(banner,"background",arr[index],500)
		   banner.style.background=arr[index];
		  
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onmouseover=function(){
		for (var j = 0; j < as.length; j++) {
			animate(as[j],{opacity:0});
			lis[j].className="";

		};
		 animate(as[this.index],{opacity:1});
		 lis[this.index].className="btn";

		 index=this.index;
		}
	};
	banner.onmouseover=function(){
		clearInterval(t);
	    Leftbtn.style.cssText="background:rgba(0,0,0,0.2);display:block;color:#fff;cursor:pointer";
	   Rightbtn.style.cssText="background:rgba(0,0,0,0.2);display:block;color:#fff;cursor:pointer";
	}
	banner.onmouseout=function(){
		t=setInterval(wheel,2000);
		Leftbtn.style.display="none";
		Rightbtn.style.display="none"
	}
	Rightbtn.onclick=function(){
		wheel();
	}
	
     Leftbtn.onclick=function(){
    	index--;
		//console.log(index)
		if(index==-1){
          index=as.length-1;

		}
		for(var i=0;i<as.length;i++){
			//console.log(i)
			animate(as[i],{opacity:0});
			lis[i].className="";
			banner.style.background=arr[i];
			
		}
		   animate(as[index],{opacity:1});
		   lis[index].className="btn";
		   banner.style.background=arr[index];
    }
	 
//进口海购
var jinkoubox=$(".jinkoubox")[0];
//console.log(jinkoubox);
var tus=$("a",jinkoubox);
//console.log(tus);
var tusW=parseInt(getStyle(tus[0],"width"));
//console.log(tusW);
var changtiao=$(".changtiao")[0];
var liss=$("li",changtiao);
//console.log(liss)
var index1=0;
var t=setInterval(move,2000)
function move(){
	index1++;
	if(index1==tus.length){
        index1=0;
         
	}
	for (var i = 0; i < liss.length; i++) {
         	liss[i].className="";

         };
    animate(jinkoubox,{marginLeft:-index1*tusW});
    liss[index1].className="changtiao-color";             
}
   for (var i = 0; i < liss.length; i++) {
    	liss[i].index1=i;
    	liss[i].onmouseover=function(){
    		//console.log(this.index1)
           for (var j = 0; j < tus.length; j++) {
           	liss[j].className="";

           };
           	
           this.className="changtiao-color";
           animate(jinkoubox,{marginLeft:-this.index1*tusW});
           index1=this.index1
           };
    	}

   var jinkouBox=$(".jinkou-tu")[0];
   //console.log(jinkouBox);
   jinkouBox.onmouseover=function(){
      clearInterval(t);
   }
    jinkouBox.onmouseout=function(){
      t=setInterval(move,2000)
   }


})	
