const h1Element = document.getElementById ("soluções")

h1Element.addEventListener("mouseover", ()=>{
    h1Element.style.color = "#808080";
})

h1Element.addEventListener("mouseout", ()=>{
   h1Element.style.color = "#000000";
})

h1Element.addEventListener("mouseout", alteraCorFundo)