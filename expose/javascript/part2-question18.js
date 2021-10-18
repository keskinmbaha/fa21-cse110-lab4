function timeSeconds(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let intervalID = setInterval(timeSeconds, 1000);
