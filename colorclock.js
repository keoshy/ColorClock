(function Update() { 
    let now = new Date();                           // Time
    let sec = parseInt(now.getSeconds());           // Seconds
    console.log("sec: " + sec);
    let min = parseInt(now.getMinutes()) + sec/60;            // Minutes
    console.log("min: " + min);
    let hour = (parseInt(now.getHours()) % 12) + min/60;      // Hours
    console.log("hour: "+hour);
    let minangle = parseInt(min * 6);                         // 6 degrees per minute
    console.log("minangle: " + minangle);
    let hourangle = parseInt(hour * 30);                      // [6*5] 30 degrees per hour
    console.log("hourangle: " + hourangle);
    let secondangle = (parseInt(sec) * 6) - 34; //           
    console.log("secondangle: "+ secondangle);
    // Get elements of the clock
    let minLine = document.querySelector("#clock .minutehand");
    let hourLine = document.querySelector("#clock .hourhand");
    let secondLine = document.querySelector("#clock .secondhand");
    //let lbText = document.querySelector("#lbText");
    // Set an attribute to move them around the clock face
    minLine.setAttribute("transform", `rotate(${minangle},50,50)`);
    hourLine.setAttribute("transform", `rotate(${hourangle},50,50)`);
    secondLine.setAttribute("transform", `rotate(${secondangle},50,50)`);
    // Run this function at 1 second
    console.log(parseInt(hour) + ":" + parseInt(min) + ":" + sec);
    //lbText.nodeValue(parseInt(hour) + ":" + parseInt(min) + ":" + sec);
    //console.log(now);

    let dClock = document.querySelector("#digitalClock"); 
        dClock.textContent = now.toLocaleTimeString(); 

    setTimeout(Update, 1000);
    
}()); // immediate invoc here

