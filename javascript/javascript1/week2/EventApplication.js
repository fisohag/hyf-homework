function getEventWeekday(daysToEvent) {
    var weekdays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday" ];
    var today = new Date(); 
    var indexToday = today.getDay(); 
    var indexEventDay = (indexToday + daysToEvent) % 7; 
    return weekdays[indexEventDay];
}
console.log(getEventWeekday(5));