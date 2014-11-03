var specialConsole = (function SpecialConsole() {
    function FormatText() {
        var text = arguments[0];
        var whichArgument = 1;
        var pattern = /{\d+}/;
        while (text.match(pattern)) {
            text = text.replace(pattern, arguments[whichArgument++].toString());
        }
        return text;
    }

    function WriteLine() {
        console.log(FormatText.apply(this,arguments));
    }

    function WriteWarning() {
        console.warn(FormatText.apply(this,arguments));
    }

    function WriteError() {
        console.error(FormatText.apply(this,arguments));
    }


    return {
        writeLine: WriteLine,
        writeWarning: WriteWarning,
        writeError: WriteError
    };
})();

specialConsole.writeLine("Message: Hello there!");
specialConsole.writeLine("Message: {0}", "Hi!");
specialConsole.writeError("Error: {0}", "Error");
specialConsole.writeWarning("Warning: {0}","Warning");