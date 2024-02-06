const buttons=document.querySelectorAll(".button");
const body =document.querySelector(".body");

buttons.forEach((button)=>{
    // console.log(button)
    button.addEventListener("click",(e)=>{
        // console.log(e)
        // console.log(e.target)
        switch(e.target)
        {
            case grey: document.body.style.backgroundColor=e.target.id
            case white: document.body.style.backgroundColor=e.target.id
            case blue: document.body.style.backgroundColor=e.target.id
            case yellow: document.body.style.backgroundColor=e.target.id
            case red: document.body.style.backgroundColor=e.target.id
        }
    })
})