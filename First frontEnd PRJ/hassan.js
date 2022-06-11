var headerOne = document.querySelector("h1")
var headerTwo = document.querySelector("h2")
var myAticle = document.querySelector("span")




headerOne.style.color = "red"
headerTwo.style.color = "red"
myAticle.style.color = "blue"

function getRandomcolor() {
    var letters = "0123456789ABCDEF"
    var color = "#"
for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)]
    
}
return color
    
}
function changeheadercolor() {
    colorInput=getRandomcolor()
    headerOne.style.color=colorInput
    headerTwo.style.color=colorInput
    myAticle.style.color = colorInput
    
}
setInterval("changeheadercolor()", 500)