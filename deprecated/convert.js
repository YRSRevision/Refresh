var colors = require("colors");
console.log("Convert.JS:".bold + " Successfully Imported Required Packages".green);


var myStringArray = ["State the distinguishing properties of solids, liquids and gases", "State which parts of YRS are the best", "Describe the structure of solids, liquids and gases in terms of particle separation, arrangement and types of motion", "Describe changes of state in terms of melting, boiling, evaporation, freezing, condensation and sublimation", "Describe qualitatively the pressure and temperature of a gas in terms of the motion of its particles", "Show an understanding of the random motion of particles in a suspension (sometimes known as Brownian motion) as evidence for the kinetic particle (atoms, molecules or ions) model of matter", "Describe and explain diffusion"];

var convertModule = function () {
    var self = this;

    self.covert = function (inputArray, callback) {

        var root = "";
        var question = "";
        var outputContentWrapper = [];
        var output = [];
        var researchPoints = [];
        console.log("Conv.JS:".bold + " Successfully Defined Global Variables".green);

        var arrayLength = inputArray.length;

        for (var i = 0; i < arrayLength; i++) {

            var sentence = inputArray[i]

            for (c = 0; c < sentence.length; c++) {

                if (sentence[c] == " ") {

                    var root = sentence.slice(c + 1, sentence.length)
                    var keyword = sentence.slice(0, c);
                    researchPoints.push(root)
                    break;

                }

            }

        }
        console.log("Conv.JS:".bold + " Successfully Finished `convert`".green);
        callback(researchPoints);
    }

    console.log("Convert.JS:".bold + " Successfully Defined `convert`".green);
};

module.exports = convertModule;