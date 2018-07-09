var drawing = SVG('drawing-area');


// the function
    
var drawFlower = function(x, y, petalColor, midColor, centerColor) { 
    var flowerGroup = drawing.group() 
        .center(x, y)  
        .scale(0.71, 0.71)
    
// stem
drawing
    .rect(10, 110)
    .stroke('green')
    .fill('lime')
    .center(100, 200)
    .addTo(flowerGroup)
    
drawing
    .ellipse(100, 75)
    .stroke(midColor)
    .fill(petalColor)
    .center(150, 100)
    .addTo(flowerGroup)
    
drawing
    .ellipse(100, 75)
    .stroke(midColor)
    .fill(petalColor)
    .center(50, 100)
    .addTo(flowerGroup)
    
drawing
    .ellipse(100, 75)
    .stroke(midColor)
    .fill(petalColor)
    .center(100, 150)
    .rotate(90)
    .addTo(flowerGroup)
    
drawing
    .ellipse(100, 75)
    .stroke(midColor)
    .fill(petalColor)
    .center(100, 50)
    .rotate(90)
    .addTo(flowerGroup)

drawing
    .ellipse(100, 100)
    .stroke(centerColor)
    .fill(centerColor)
    .center(100, 100)
    .addTo(flowerGroup)

}



var drawFlowerWithBox = function(x, y, petalColor, midColor, centerColor) {
    var flowerGroupBox = drawing.group()
        drawing
            .stroke('rgba(0, 0, 0, 0.22)')
            .rect(170, 200)
            .fill('rgba(255, 255, 255, 0.1)')
            .move(x - 15, y - 10)
    //step 1. draw flower
    drawFlower(x, y, petalColor, midColor, centerColor)
    //step 2. draw box around it
    
}



//drawFlower(5, 10, 'black', 'black', 'gray')
//drawFlower(150, 10, 'brown', 'black', 'orange')
//drawFlower(295, 10, 'red', 'brown', 'pink')
drawFlower(5, 200, 'orange', 'red', 'yellow')
drawFlower(150, 200, 'yellow', 'orange', 'lightyellow')
drawFlower(295, 200, 'lime', 'green', 'palegreen')
drawFlower(5, 390, 'lightblue', 'blue', 'whitesmoke')
drawFlower(150, 390, 'purple', 'black', 'violet')
drawFlower(295, 390, 'hotpink', 'red', 'pink')

drawFlowerWithBox(20, 20, 'cyan', '#0062ff', '#0062ff')
drawFlowerWithBox(200, 20, '#ffc7da', '#ff0058', '#ff0058')
drawFlowerWithBox(380, 20, '#bdffbf', '#00c300', '#00c300')