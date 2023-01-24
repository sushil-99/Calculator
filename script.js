const display1Elm = document.querySelector(".display-1")
const display2Elm = document.querySelector(".display-2")
const tempResult = document.querySelector(".temp-result")
const numbers = document.querySelectorAll(".number")
const operations = document.querySelectorAll(".operation")
const equal = document.querySelector(".equal")
const allClear = document.querySelector(".btn-ac")
const clear = document.querySelector(".btn-c")

let display1 = ""
let display2 = ""
let haveDot = false
let lastOperation = ""
let result = null

numbers.forEach((number) =>{
    number.addEventListener("click", (e) =>{
        // console.log(e.target.innerText)

        if(e.target.innerText === "." && !haveDot){
            haveDot = true
        }else if(e.target.innerText === "." && haveDot){
            return
        }

        display2 += e.target.innerText  //(display2 = display2 + e.target.innertText)
        display2Elm.innerText = display2
        
    })
})

operations.forEach((operation) =>{
    operation.addEventListener("click", (e) =>{
        if (!display2) {
            return
        }else{
            const operationName = e.target.innerText
            if(display1 && display2  && lastOperation) {
                mathOperation()
            }else {
                result = parseFloat(display2)
            }

            clearVal(operationName)
            lastOperation = operationName
        }
    })
})

const clearVal = (name = "") =>{
    display1 += display2 + " " + name + " "
    display1Elm.innerText = display1
    display2Elm.innerText = ""
    display2 = ""
    tempResult.innerText = result
}

const mathOperation =() =>{
    console.log(result)
    console.log(lastOperation)
    console.log(display2)
    if(lastOperation === "X") {
        result = parseFloat(result) * parseFloat(display2)

    }else if(lastOperation === "/"){
        result = parseFloat(result) / parseFloat(display2)

    }else if(lastOperation === "+"){
        result = parseFloat(result) + parseFloat(display2)

    }else if(lastOperation === "-"){
        result = parseFloat(result) - parseFloat(display2)

    }else if(lastOperation === "%"){
        result = parseFloat(result) % parseFloat(display2)
    }
}

allClear.addEventListener("click", (e) =>{
    display1Elm.innerText = "0"
    display2Elm.innerText = "0.00"
    tempResult.innerText = ""

    display1 = ""
    display2 = ""
    result = ""
})

clear.addEventListener("click", () =>{
    display2Elm.innerText = ""
    display2 = ""
})

equal.addEventListener("click", (e) =>{
    if (!display1 || !display2) return
    // haveDot = false

    mathOperation()
    clearVal()
    display2Elm.innerText = result
    tempResult.innerText = ""
    display1 = ""
    display2 = result
})

window.addEventListener("keydown",(e) =>{
    console.log(e)
    if(
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "." 
    ){
        clickNumElm(e.key)
    }else if(e.key ==="/" || e.key === "+" || e.key === "-" || e.key === "%"){
        clickOptElm(e.key)
    }else if (e.key === "*"){
        clickOptElm("X")
    }else if (e.key === "Enter" || e.key === "="){
        clickEqual()
    }else if (e.key === "Escape") {
        clickEsc()
    }else if (e.key === "Backspace"){
        clickBackspace()
    }
  
    
})

const clickBackspace = () =>{
    if (display2Elm.innerText !== 0.00){
        display2 = display2.toString().slice(0, -1)
        display2Elm.innerText = display2
    }
    
}

console.log(clickBackspace())

const clickEsc = () =>{
    allClear.click()
}

const clickNumElm = (key) =>{
    numbers.forEach((btn) =>{
        if(btn.innerText === key){
            btn.click()
        }
    })
}

const clickOptElm = (key) =>{
    operations.forEach((btn) =>{
        if(btn.innerText === key){
            btn.click()
        }
    })
}

const clickEqual = () =>{
    equal.click()
}
