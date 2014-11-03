var domManipulation = function(){
    var addElement = function(parent, childTag, id, text){
        var parentElement = document.querySelector(parent);
        var newElement = document.createElement(childTag);
        var node = document.createTextNode(text);
        newElement.appendChild(node);
        parentElement.appendChild(newElement);
    };

    var removeElement = function(parentSelector, childSelector){
        var parent = document.querySelector(parentSelector);
        var child = document.querySelector(childSelector);
        parent.removeChild(child);
    };

    var retrieveAllElements = function(selector){
        var elements = document.querySelectorAll(selector);
        return elements;
    };

    var attachEvent = function(selector, event, callbackFunc){
        var element = document.querySelector(selector);
        element.addEventListener(event, callbackFunc);
    };

    return{
        addElement: addElement,
        removeElement: removeElement,
        retrieveAllElements: retrieveAllElements,
        attachEvent: attachEvent
    }
}();


function removeDiv(){
    domManipulation.removeElement('body>div', 'body>div>div');
}

domManipulation.addElement('body', 'div', 'firstChild', 'New div nested in body.');
domManipulation.addElement('div', 'div', 'nestedDiv', 'Div nested in first div.');
domManipulation.addElement('div', 'div', 'nestedDiv2', 'Click me!');
domManipulation.attachEvent('body>div', 'click', removeDiv);
console.log(domManipulation.retrieveAllElements('div'));