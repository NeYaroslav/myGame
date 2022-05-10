let cardsDOM = document.querySelectorAll(".element")
let menu = document.querySelector(".menu")
let button = document.querySelector(".menu button")
let counter = 0
let activeCards = []
win = 0
getPOsition()

button.addEventListener('click', ()=> {
    cardsDOM.forEach(element => {
        element.classList.remove('hiden')
    });
    menu.classList.remove('act')
})


cardsDOM.forEach((element, index) => {
    element.addEventListener('click', ()=> {
       if((counter < 2) && (!element.classList.contains('act'))){
           counter++
           element.classList.add('act')
       }
       if(counter == 2){
           setTimeout(() => {
               getActiveCards()
               counter = 0
               if(win == 8){
                menu.classList.add('act')
                win = 0
               }
           }, 1000);
       }
       function getActiveCards(){
           let currentCounter = 0;
            activeCards = [];
           cardsDOM.forEach(element => {
                if(element.classList.contains('act')){
                    activeCards[currentCounter] = element;
                    currentCounter++
                }
           });
           if(activeCards[0].classList[1] == activeCards[1].classList[1]){
                activeCards[0].classList.add('hiden')
                activeCards[1].classList.add('hiden')
                activeCards[0].classList.remove('act')
                activeCards[1].classList.remove('act')
                win ++
           } else {
               activeCards[0].classList.remove('act')
               activeCards[1].classList.remove('act')
           }
       }
    })
});
function getPOsition(){
    let posList = "abcdefghjklmnopq".split("");
    let emptyHelperList = [];
    while(posList.length != emptyHelperList.length) {
        let currentPOs = posList[Math.floor(Math.random()*cardsDOM.length)];
        if(!emptyHelperList.includes(currentPOs)){
            emptyHelperList.push(currentPOs);
        }
    };
    cardsDOM.forEach((element, index) => {
        element.style.gridArea= emptyHelperList[index];
    });
}