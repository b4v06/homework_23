function clock(timeMinutes) {
    if (isNaN(timeMinutes)) {
        alert("Please, write a number");
    } else if (Number(timeMinutes) > 6000) {
        alert("I think the number is too big, can you, please, use a lesser one?");
    } else {
        timeHours = Math.trunc(timeMinutes / 60);
        timeMinutes = timeMinutes-(timeHours*60);
        alert(timeHours + " hours " + timeMinutes + " minutes");
    }
}
clock(prompt("This code converts minutes to a nicer look, so write down the amount of minutes you want to convert:"));