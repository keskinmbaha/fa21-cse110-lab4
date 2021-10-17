function timeSeconds(){
    let time = function(){
        let d = new Date();
        let dateTime = d.toLocaleTimeString();
        console.log(dateTime);
    }

    let intervalID = setInterval(time, 1000);
}

timeSeconds();