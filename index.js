const imageS = document.querySelector(".show")
const image2 = document.querySelector(".show2")
const image3 = document.querySelector(".show3")
const image4 = document.querySelector(".show4")
const darklight=document.querySelector(".switch")
const loading =document.querySelector(".load")
loading.addEventListener("click",()=>{
    window.alert("loading you data")
    setTimeout(()=>{
        document.body.classList.add("showall")
    },2000)
    
})
darklight.addEventListener("click",()=>{
    if(true){
    document.body.classList.toggle("switched")
    }
})
imageS.addEventListener("click",()=>{
    if(imageS.src.includes("icon-plus.svg")){
        imageS.src="./assets/images/icon-minus.svg"
        document.body.classList.toggle("showing")
        document.body.classList.remove("hide")
    }
    else{
        imageS.src="./assets/images/icon-plus.svg"
        document.body.classList.toggle("hide")
        document.body.classList.remove("showing")
    }
})

image2.addEventListener("click",()=>{
    if(image2.src.includes("icon-plus.svg")){
        image2.src="./assets/images/icon-minus.svg"
        document.body.classList.toggle("showing2")
        document.body.classList.remove("hide2")
    }
    else{
        image2.src="./assets/images/icon-plus.svg"
        document.body.classList.toggle("hide2")
        document.body.classList.remove("showing2")
    }
})
image3.addEventListener("click",()=>{

    if(image3.src.includes("icon-plus.svg")){
        image3.src="./assets/images/icon-minus.svg"
        document.body.classList.toggle("showing3")
        document.body.classList.remove("hide3")
    }
    else{
        image3.src="./assets/images/icon-plus.svg"
        document.body.classList.toggle("hide3")
        document.body.classList.remove("showing3")
    }
})
image4.addEventListener("click",()=>{
    if(image4.src.includes("icon-plus.svg")){
        image4.src="./assets/images/icon-minus.svg"
        document.body.classList.toggle("showing4")
        document.body.classList.remove("hide4")
    }
    else{
        image4.src="./assets/images/icon-plus.svg"
        document.body.classList.toggle("hide4")
        document.body.classList.remove("showing4")
    }
})


