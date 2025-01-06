// you can write js here
console.log('exo-2');
var isTesting = false;

if (isTesting){
    console.log('exo-2');
    var dateNow = Date.now();
    var myDate = new Date(dateNow);
}
else{
    var myDate = new Date('2025-01-06T09:16:00');
}

var dayMyDate = myDate.getDay();
var hourMyDate = myDate.getHours();

var msgWeek = 'nous sommes en semaine';
var msgWeekEnd = 'nous sommes le Week End';
console.log(hourMyDate);
if (dayMyDate === 0 || dayMyDate === 6 || (dayMyDate === 5 && hourMyDate > 16) || (dayMyDate === 1 && hourMyDate < 9)){
    console.log(msgWeekEnd);
}
else if (dayMyDate > 0 && dayMyDate < 6){
    console.log(msgWeek);
}
else {
    console.log('Erreur');
}