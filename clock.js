const clockContainer = document.querySelector(".js-clock"),
clockTitle = document.querySelector("h1");
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    console.log(minutes);
    clockTitle.innerText =`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds <10 ? `0${seconds}` : seconds}`;
}
function init(){
    getTime();
    setInterval(getTime,1000);
}
init();

//첫번째 인자는 function 두번째 인자는 실행할 시간 간격