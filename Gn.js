let wm = document.getElementById("wm")
let numlabel = document.getElementById("numlabel")
let num = document.getElementById("num")
let subbt = document.getElementById("subbt")
let x = window.prompt(`Enter Your Name`)
    wm.textContent=(`Welcome ${x} to "Guess The Number Game"`)
    numlabel.textContent = "Guess The Number b/w 1-10"
const k=Math.trunc(Math.random()*10+1)
    console.log(k)
let a=0
    subbt.onclick = function()
    {
        let gn=num.value
        console.log(gn)
        a++
    if(gn>k)
    {    
        numlabel.textContent = "Guess Lower"      
    }
    else if (gn<k)
    { 
        numlabel.textContent = "Guess Higher" 
    }
    else
    {
        numlabel.textContent = `You Won!!! in ${a} attempts`
    }

}
