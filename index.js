const html = (query,many=false)=>{
    if (!many) {
        return document.querySelector(query)
    }
    return document.querySelectorAll(query)
}


const isNumber = (val)=>{
    return ["0","1","2","3","4","5","6","7","8","9"].includes(val)
}


const addMessage=(type)=>{
    if (type == "error") {
        html(".message").innerHTML = "messageError"
    }else{
        html(".message").innerHTML = "messageSucces"
    }
}
const nextInputId = (target)=>{
    if((target.nextElementSibling)){
        return '#'+target.nextElementSibling.id;
    }
    return "#checkButton"
}
const previousInputId = (target)=>{
    if((target.previousElementSibling)){
        return '.'+target.previousElementSibling.id;
    }
    return "#one"
}

const checkCode = ()=>{
    html("#loading").classList.add("show")
    html("#checkButton").classList.add("hidden")
}

const main =()=>{
    // First focus
    html("#one").focus()
    // add Event to input
    html(".input",true).forEach(input => {
        input.addEventListener("keyup",(e)=>{
            console.log('e :>> ', e);
            let nextClass = nextInputId(e.target);
            let previousClass = previousInputId(e.target);
           
         
            if (e.code === "Backspace") {
            
                html(previousClass).focus()
                html(previousClass).value=""

            }else{

                if (isNumber(e.target.value)) {
                    if (nextClass == 'check-button') {
                        console.log("dsd");
                    }else{
                    html(nextClass).focus()
                    }
                }else{
                    e.target.value=""
                    addMessage("error")
                }
            }
    })
    });
    html(".checkButton").addEventListener('click',checkCode)
}


main()