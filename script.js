console.log("welcome");
let turn = "X";


const changeturn = ()=>{
    return turn === "X"?"0":"X";
}

const checkforWin = ()=>{

    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8],
    ]

    wins.forEach(e=>{
        if(boxtexts[e[0]].innerHTML=== boxtexts[e[1]].innerHTML && boxtexts[e[1]].innerHTML===boxtexts[e[2]].innerHTML && boxtexts[e[0]].innerHTML!='')
        {
            let winner = document.getElementsByClassName('winner');
            if(winner[0].innerHTML == "WINNER WILL BE REVEALED HERE!")
            winner[0].innerHTML = `${turn} WINS! `;

        }
    });


}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{

    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        
        if(boxtext.innerHTML == '')
            {
                boxtext.innerHTML=turn;                
                checkforWin();
                turn = changeturn();
            }
        

    });


});

let btn = document.getElementById("btn");
btn.addEventListener('click',()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerHTML='';
    })
    let winner = document.getElementsByClassName('winner');
    winner[0].innerHTML = "WINNER WILL BE REVEALED HERE!"


})