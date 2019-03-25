const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0,
  }
]

var gamesOfSopranosWachedHours = (seriesDurations[1].days *24 + seriesDurations [1].hours)
var gamesOfThronseWatchedHours = (seriesDurations[0].days *24 + seriesDurations [0].hours)
var gamesOfTheWireWachedHours = (seriesDurations[2].days *24 + seriesDurations [2].hours)

var totalWatchedHours = gamesOfSopranosWachedHours + gamesOfTheWireWachedHours + gamesOfThronseWatchedHours;

var gameOfThronesTook = ((gamesOfThronseWatchedHours*100) /(80*24*365));
var gamesOfSopranosTook = ((gamesOfSopranosWachedHours*100) /(80*24*365));
var gamesOfTheWireTook = ((gamesOfTheWireWachedHours*100) /(80*24*365));

var totalHoursTook = ((totalWatchedHours *100) / (80*24*365));
//console.log(totalHoursTook);

console.log("Game of Thrones took "+" "+gameOfThronesTook+ "% of my 80 years life");
console.log("Game of Sopranos took "+" "+gamesOfSopranosTook+ "% of my 80 years life");
console.log("Game of The Wire took "+" "+gamesOfTheWireTook+ "% of my 80 years life");
console.log(totalHoursTook+"% of my life took time to watched all of these series");


