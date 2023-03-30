function verifyReply(){
    var proposedValue = valueField.value;
    var pattern = /^\d+$/;

    if(pattern.test(proposedValue)){
        numberTry++;
    }

}

var maxValue = 10;
var valueToFind = ((Math.random() * maxValue) * 1);
var numberTry = 0;
var valueField = document.getElementById(elementid : valuefield);

if(valueField)
