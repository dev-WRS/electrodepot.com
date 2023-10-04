//<!-- Hide code

var objDiv;
var arrLink = new Array();
var arrContent = new Array();
var arrNav = new Array();

function popUp(URL) {
   day = new Date();
   id = day.getTime();
   eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=500,left = 300,top = 120');");
}

function popUpA(URL) {
   day = new Date();
   id = day.getTime();
   eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=1,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=650,height=500,left = 200,top = 50');");
}

function openWindow(URL) {
   day = new Date();
   id = day.getTime();
   eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=1,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1');");
}

function enlarge(URL) {
   day = new Date();
   id = day.getTime();
   eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=580,height=480,left=360,top=130');");
}

function InitLinks(){
   var i;
   var bIsLink;
   var bIsContent;
   var objElements;

   if (document.all){
      for(i = 0; i < document.all('LinkContainer').all.length; i++){
         bIsLink = (document.all('LinkContainer').all[i].className == 'LinkType');
         if (bIsLink){
            arrLink[arrLink.length] = document.all('LinkContainer').all[i];
         }
      }
      for(i = 0; i < document.all('ContentContainer').all.length; i++){
         bIsContent = (document.all('ContentContainer').all[i].className == 'ContentType');
         if (bIsContent){
            arrContent[arrContent.length] = document.all('ContentContainer').all[i];
         }
      }
   } 
   else if (document.getElementById && document.getElementsByTagName){
      objElements = document.getElementById('LinkContainer').getElementsByTagName('a');
      for(i = 0; i < objElements.length; i++){
         if (objElements[i].getAttribute('class') == 'LinkType'){
            arrLink[arrLink.length] = objElements[i];
         }
      }
      objElements = document.getElementById('ContentContainer').getElementsByTagName('a');
      for(i = 0; i < objElements.length; i++){
         if (objElements[i].getAttribute('class') == 'ContentType'){
            arrContent[arrContent.length] = objElements[i];
         }
      }
   }

   HideAllContent();

   // Show first item only
   arrContent[0].style.display = '';
   arrLink[0].style.color = '';

}

function HideAllContent(){
   var i;

   if (document.all){
      for(i = 0; i < arrContent.length; i++){
         arrContent[i].style.display = '';
         arrLink[i].style.color = '';
      }
   } 
   else// if (document.getElementById && document.getElementsByTagName)
   {
      objElements = document.getElementById('LinkContainer').getElementsByTagName('a');
      for(i = 0; i < objElements.length; i++){
         if (objElements[i].getAttribute('class') == 'LinkType'){
            arrContent[i].style.display = '';
            arrLink[i].style.color = '';
         }
      }
   }
}

function ShowItem(item){

   HideAllContent();

   if(arrLink.length){
      if (arrContent[item-1].style.display == 'none'){
         arrContent[item-1].style.display = '';
         arrLink[item-1].style.color = '';
      } 
      else {
         arrContent[item-1].style.display = 'none';
         arrLink[item-1].style.color = '';
      }
   }
}

function InitProdPage(){
//   InitToolbar();
   InitLinks();
}

// End hide code -->