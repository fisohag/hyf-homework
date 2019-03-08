var firstWords =[ "enjoyable","pleasant", "agreeable", "good","satisfying", "marvelous","entertaining","amusing","diverting","lovely"]
var  secondWords=[ "company","firm", "business","operation","house","organization","agency","trustpartner","group", "multinational"]


const RandomFirstWord = Math.floor(Math.random() * 10) + 0;
const RandomSecondWord = Math.floor(Math.random() * 10) + 0;

var StartupName = firstWords[RandomFirstWord]+" "+secondWords[RandomSecondWord];
var startupNameOutput = "\"Startup: "+"\""+StartupName+"\""+" contains "+StartupName.length+" characters\"";