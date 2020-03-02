module.exports = function repeater( str, options ) {
    let separator = options.separator ? options.separator : '+';
    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
    let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    let additionalSeporator = options.additionSeparator ? options.additionSeparator : '|';
    let arrayMain = [];
    let addition;

    if (typeof(options.addition) == "undefined") {
        addition = '';
    } else {
        addition = options.addition  + '';
    }
    
    for (let i=0; i < repeatTimes; i+=1) {

        let seporator = [];

        for (j=0; j<additionRepeatTimes; j+=1) {
            seporator.push(addition);
        }

        arrayMain.push(str+seporator.join(additionalSeporator));
    }
    return(arrayMain.join(separator));
};