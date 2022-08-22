# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a coding language that is a hybrid of HTML and Javascript. JSX makes it easier to write react application by allowing you to simply access different elements 

Researched answer: After some research, I understand that JSX is indeed a way to write HTML and Javascript together. JSX allows for object oriented programming (OOP relies on the concept of classes and objects - used to create simple, reusable pieces of code blueprints, aka classes, to create individual instances of objects). The biggest syntactical different between HTML and JSX is that JSX requires the use of parent/child components. The code won't compile without this, whereas HTML does not require you to return everything to s single parent element. 

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: Yarn is Yet Another Resource Navigator

Researched answer: I was so close! Yet Another Resource Negotiator is the official name, and it was created in 2016 in a collaboration between Meta, Google and a few other companies. Yarn is a package manager, which means that it is a collection of software tools that automate different processes (installing, upgrading, configuring and removing) for computer programs consistently. This increases stability, and it is also designed to eliminate the need for manual installs and updates. Yarn creates a json file and node modules.

3. What is an anonymous function in JavaScript?

Your answer: () => {}

Researched answer: An anonymous function is aptly names because it is a function that has no name. It can only be accessed by the variable stored in the function as the value, and cannot be accessed after it's creation.

4. What is the difference between a class and an object?

Your answer: A class is used to create objects, and an object can be a part of a class.

Researched answer: Classes are templates for objects, and require the use of the constructor method. According to freeCodeCamp, classes in JS are an example of syntactical sugar vs the prototype based inheritance model used to implement object oriented programming.

5. What is the difference between state and props in React?

Your answer: useState is used to update in real time. That's the best I have off the top of my head 🥴 off to do research!

Researched answer: A key difference with props vs state is that props are external and state is internal. This means that props is controlled by the element that renders the component and state is controlled by the component itself. Props are read-only and can't be modified. State changes can by asynchronous and can be modified using this.setState. Props are similar to parameters in that they are passed to a child component from the parent comppnent. 

6. STRETCH: Which is the difference between a div and a span?

Your answer: I know that a div stands for division, and is used in HTML and JSX as a container for code. When in doubt, div it out! I am not familiar with span, so off to research I go.

Researched answer: The difference between a div and a span is a key one! a div can hold entire blocks of code, whereas a span is an inline element, which means that they are meant to stay within the tags defining the element they are referring to. They don't force a new line the way that block elements, like a div, would, causing a line break to occur.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Thi is a programming paradigm that relies on the covept of classes and objects. It's used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

2. Ruby: Ruby is a highly flexible interpreted programming language. It can be used to make changes to the way the language itself works. It's a general purpose programming language most often used for making web applications, but being so versatile means it can be used for many other types of programs as well.


In my research everything indicates that Ruby has an elegant syntax that is easy to read and write. This sounds so accessible, and I'm excited to jump into such a powerful language!

3. Implicit return: If I'm understanding correctly, an implicit return is when rather than writing all of the code and then a return underneath it, the return is implied with the arrow syntax rather than written out. The example I found is below. I wondered why the curly braces are used in explicit but not implicit and found that with 'implicit returns, object literals must be wrapped in aprenthesis so that the curly braces are not mistaken for the opening of the function's body.' (https://medium.com/@bunlong/arrow-functions-return-rules-in-javascript-b63ed5f25994)

const explicit = p => {
    return value;
}

const implicit = (value) => (
    value
);

4. Ruby blocks: Ruby blocks are anonymous functions (() => {}) that can be passed into methods. They are enclosed in a do-end statement (usually used for blocks that span multiple lines) or curly braces (used for single line blocks), and can have arguments defined between two pipe characters (|argument|). 

5. Ruby hashes: A hash is a collection of key-value pairs, similar to an array. Sometimes they are referres to as associated arrays. They differ from an array because they can contain arbitrary objects as indexes. Arrays can only have integers. There are many methods in which programmers can do their work.
