// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = [ 'green', 'blue','pink', 'grey', 'orange', 'yellow', 'red', 'blue', 'red', 'yellow','green', 'blue','pink', 'grey', 'orange', 'yellow ', 'red', 'blue', 'red', 'green '];

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => { 
    ballonsMap [position] = null;
    
    // set the color to null on the balloon position
    render();
}
 
const render = () => { 
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => { 
        let content = ""
        console.log("Loop" +position+ " "+color, content);
        let balloonVisibility = "visible";
        if (color === null){
            balloonVisibility = "popped"
        }
        return `<div class="balloon active ${balloonVisibility}"
         style="background: ${color}"
         onClick="popBalloon(${position});"
         ></div>`; // <--- render each balloon
    });
    let activeBalloons = ballonsMap.filter(b => b !== null).length;
    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- render the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();
