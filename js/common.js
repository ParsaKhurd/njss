//privent right click
document.oncontextmenu = () => {
 // alert("हमें पता था आप Inspect जरूर करोगे.")
   return false
}

//f12
document.onkeydown=e=>{
   if(e.key == "F12"){
   return false
}
//ctrl u
 if(e.ctrlKey && e.key == "u") {
 //  alert("चुटिया Source Code कोड नहीं मिलेगा")
   return false
}
}
/* if(e.ctrlKey && e.key == "c") {
   //alert("chutiya text copy nhi hoga")
   return false 
 }
    if(e.ctrlKey && e.key == "v") {
   //alert("don'n try to paste anything")
   return false 
}
} */




var stick_show_height = 100;
var navbar_height_minus = 82;
window.onscroll = function() {myFunction()};
var navbar_sticky = document.getElementById("navbar_sticky");
var sticky = navbar_sticky.offsetTop;
var navbar_height = document.querySelector('.navbar').offsetHeight;

function myFunction() {
	
  if ((window.pageYOffset >= sticky + navbar_height+stick_show_height)) {
	 // console.log('IF window.pageYOffset:'+window.pageYOffset+'   sticky:'+sticky+'   navbar_height : '+navbar_height+'  flag:'+ flag);
    navbar_sticky.classList.add("sticky")
	document.body.style.paddingTop = (navbar_height-navbar_height_minus) + 'px';
	
  } else {
	  //console.log('ELSE window.pageYOffset:'+window.pageYOffset+'   sticky:'+sticky+'   navbar_height : '+navbar_height+'  flag:'+ flag);
    navbar_sticky.classList.remove("sticky");
	document.body.style.paddingTop = '0'
	
  }
}


$(document).ready(function () { 
            $('.dropdown').hover(function () { 
                $(this).addClass('show'); 
                $(this).find('.dropdown-menu').addClass('show'); 
            }, function () { 
                $(this).removeClass('show'); 
                $(this).find('.dropdown-menu').removeClass('show'); 
            }); 
        }); 