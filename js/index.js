

const array = [1,2,3,4,5];
for (var index = 0; index < array.length; index++) {
   (function(i){
     setTimeout(() => {
       console.log(i);
     }, 1000);
   })(index)
  
}
(function(){

})()