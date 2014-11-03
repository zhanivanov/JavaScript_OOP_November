function testFunction() {
    console.log("Number of Arguments: " + arguments.length);
    for(var i = 0; i < arguments.length; i++){
        console.log("ARGUMENT " + (i + 1) + ":");
        console.log("VALUE: " + arguments[i] + ", TYPE: " + typeof arguments[i]);
    }
    console.log();
}

testFunction(3, 3, "arg", "arg2");
testFunction(3, 4, 6, 7, 3, "arg");
testFunction(3);

var func = function(){
    var obj = {};
    obj.name = "Ivan";
    return obj;
};

testFunction(1234, "vanio", func().name);
testFunction("mara", "petio", "Tosho");
testFunction(12345555, "Angel");
testFunction(this);

testFunction.call(null, 1234, "azhan");

testFunction.apply(null, [1234, "skoda"]);