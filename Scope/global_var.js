var greeting = "Hello";

function helloWorld(){
    this.name = "World";
    punct = "!";
    console.log(greeting + " " + this.name + punct);
}

helloWorld();