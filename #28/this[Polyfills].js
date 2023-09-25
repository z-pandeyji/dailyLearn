Function.prototype.callPolyfill = function(context, ...args) {
    context = context || window;
    const uniqueID = '00' + Math.random();
    while (context.hasOwnProperty(uniqueID)) {
        uniqueID = '00' + Math.random();
    }
    context[uniqueID] = this;
    const result = context[uniqueID](...args);
    delete context[uniqueID];
    return result;
};


const shivanshu = { name: 'Shivanshu' };

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

greet.callPolyfill(shivanshu, 'Hello', '!'); 

// Outputs: "Hello, Shivanshu!"
