
    document.getElementById("button").onclick = function () {getRandomColor() };

function getRandomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
}

// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
// const button = document.querySelector("button")
// const body = document.querySelector("body")

// button.addEventListener("click",changeColor)

// function changeColor(){
//     const colorNo = parseInt(Math.random()*colors.length)
//     body.style.backgroundColor = colors[colorNo]
// }

