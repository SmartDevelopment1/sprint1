const h1Element = document.getElementsById('Quem somos')

h1Element.addElementListener('mouseover',()=>{
    h1Element.style.color = "#808080";
})
h1Element.addElementListener('mouseout',()=>{
    h1Element.style.color = "#000000";
})

h1Element.addElementListener("mouseout", alteraCorFundo)