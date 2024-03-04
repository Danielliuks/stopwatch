display = document.getElementById("clock")
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startClock(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10)
        isRunning = true;
    }
}

function stopClock(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function resetClock(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now(Date)
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / 3600000);
    hours = hours.toString().padStart(2,  "0"); 
    let minutes = Math.floor(elapsedTime / 60000 % 60); 
    minutes = minutes.toString().padStart(2,  "0"); 
    let seconds = Math.floor(elapsedTime / 1000 % 1000);
    seconds = seconds.toString().padStart(2,  "0"); 
    let milliseconds = Math.floor(elapsedTime % 100); 
    milliseconds = milliseconds.toString().padStart(2,  "0"); 

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}