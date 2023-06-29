const currentColor= document.querySelectorAll("section#current-color.current-color")
const selectedColor=document.querySelector(" div.color")
const container = document.querySelectorAll("div.pixel")
selectedColor.addEventListener("mouseover",(event)=>{

  event.target.style  =currentColor
//  currentColor.style=selectedColor.style
 selectedColor.addEventListener("mouseover",(event)=>{
    container.style.color = currentColor.style.color

 
     const clone=currentColor.append(selectedColor)
     currentColor.append(selectedColor);

  clone.append(container);

 })

})


    // const cC=document.querySelector(document.body.children[0].children[2].children[0].className)
    // const sC=document.querySelectorAll("div.color")

    

    //  sC.append(cC)
    




// cc.append(selectedColor);




// currentColor.append(selectedColor);