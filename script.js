const hello = document.getElementById("clock")
const date = new Date().toLocaleDateString();

setInterval(
    function ready (){
   hello.innerHTML = new Date().toLocaleTimeString();
},1000)
ready();







console.log(date)
console.log(time)

