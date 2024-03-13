const boxes=document.querySelectorAll(".box");
const result=document.getElementById("result");
const instructions=document.querySelector(".instructions");
const playagain=document.getElementById("playagain");


// special box
let count=0;
let i=Math.floor(Math.random( )*5);
boxes[i].setAttribute("id","special");
const special=document.getElementById("special");





// event listener
boxes.forEach(box=>{
    box.addEventListener('click',(e)=>{
        
        count++;

        if (count==1){
            func1(box,e);
        } else if (count==2){
            func2(box,e);
        }
        
    })
})

// fucntion1 - make first red
function func1(box,ev){
    box.classList.add("bgRED");

    if (ev.target.id=="special"){
        special.style.backgroundColor="springgreen";
        result.innerHTML="you won";

        boxes.forEach(box=>{
            box.classList.add("bgRED");
        })

        instructions.innerHTML="";
        playagain.style.display="block";

    } else{
        instructions.innerHTML="You have 1 attempt";
    }

}

// function2 - make all red
function func2(box,ev){

    instructions.innerHTML="";

    boxes.forEach(box=>{
        box.classList.add("bgRED");
    })
    special.style.backgroundColor="springgreen";

    if (ev.target.id=="special"){
        result.innerHTML="you won";
        playagain.style.display="block";
    } else{
        result.innerHTML="you lost";
        playagain.style.display="block";
    }

}


playagain.addEventListener('click',( )=>{
    
})

















