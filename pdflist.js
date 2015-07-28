var request = require("request");
var cheerio = require("cheerio");
var colors = require ("colors");
console.log("Pdf.JS: ".bold + " Successfully Imported Required Packages".green);


Array.prototype.last = function() {
    return this[this.length - 1];
}
console.log("Pdf.JS: ".bold + " Successfully Declared `last`".green);


function collectURL(number, callback) { // returns an array of the links and numbers for each syllabus
  // PLEASE PASS <number> AS A STRING!
    var link = [];
    var newArray = [];
    console.log("Pdf.JS: ".bold + " Successfully Defined Global Variables".green);
    request('http://www.cie.org.uk/programmes-and-qualifications/cambridge-secondary-2/cambridge-igcse/subjects/', function(error, response, body) {
        if (!error && response.statusCode == 200){
              console.log("Pdf.JS: ".bold + " Successfully Requested Website".green);
              $ = cheerio.load(body);
              $(".emphasized-link").find("li").find("a").each(function() { // loop through each link
                  var selector = $(this).attr("href");
                  newArray.push({
                    "number": selector.split("-").last().replace("/",""), // number
                    "link": selector // link
                    });
              });
              console.log("Pdf.JS: ".bold + " Successfully Pushed to `newArray`".green);
              for (i=0;i<newArray.length;i++){
                if (String(newArray[i].number) == String(number)){
                  link = newArray[i].link;
                }
              }
          newArray.splice(newArray.length-7, 7);
        }
        console.log("Pdf.JS: ".bold + " Successfully Completed `collectURL`".green);
        if (callback !== undefined) {
          callback(link);
        }
    });
}
console.log("Pdf.JS: ".bold + " Successfully Declared `collectURL`".green);
