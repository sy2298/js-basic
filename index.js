const title = document.querySelector("#title");

const CLIKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLIKED_CLASS);
    
}
function init(){
    title.addEventListener("click",handleClick);
}
init();

//title.addEventListener("click",handleClick);
//handleResize() : 함수 즉시 호출
//handleResize : 함수를 즉시 호출하지는 않는다.