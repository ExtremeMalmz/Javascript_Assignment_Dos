//Eric Malmström Uppgift 2
"use strict";

//Uppgift1
console.log("Uppgift 1");

function max(num1,num2){
    if(num1 >= num2){
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}

function min(num1,num2){
    if(num1 <= num2){
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}

max(5,10);
max(7,7);
min(12,24);
min(30,18);

//Uppgift 2
console.log("\nUppgift 2");

function range(lengthOfArray){
    var uppgiftTvaArray = [];
    for(var i = 0;i < lengthOfArray;i++){
        uppgiftTvaArray.push(i);
    }
    return uppgiftTvaArray;
}

var testArray = range(10);
console.log(testArray);

//Uppgift 3
console.log("\nUppgift 3");

function sum(uppgift3Array){
    var totalaSumUppgift3 = 0;
    for(var i = 0;i < uppgift3Array.length;i++){
        totalaSumUppgift3 += uppgift3Array[i];
    }

    return totalaSumUppgift3;
}

var numbers = [5,10,15,20,25];
var sumOfNumbers = sum(numbers);
console.log(sumOfNumbers);

//Uppgift 4
console.log("\nUppgift 4");

function countCharacter(word,letter){
    var wordCounter = 0;
    for(var i = 0;i < word.length;i++){
        if(letter == word[i]){
            wordCounter++;
        }
    }
    return wordCounter;
}

var testString1 = "Jane Doe";
var testString2 = "Abracadabra";

console.log(countCharacter(testString1,"e"));
console.log(countCharacter(testString2, "a"));

//Uppgift 5
console.log("\nUppgift 5");

function palindrome(word){
    var wordButReversed = word.split('').reverse().join('');

    if(wordButReversed == word){
        return true;
    }
    else{
        return false;
    }
}

console.log(palindrome("sirap - paris"));
console.log(palindrome("lorem impsum"));

//Uppgift 6
console.log("\nUppgift 6");

class Person{
    
    firstname;
    lastname;
    age;
    family;

    constructor(firstname,lastname,age,family){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.family = family;
    }

}

const person = new Person("Salvador","Leone",76,["Toni Cipriani","Joey Leone","Maria Latore"]);

//Uppgift 7
console.log("\nUppgift 7");

function printPerson(personObject){
    console.log("Fullname: " + personObject.firstname + " " + personObject.lastname + ", Age: " + personObject.age);
    console.log("Family: " + personObject.family);
}

const person1 = new Person("Not_Salvador","Not_Leone",67,["Toni Cipriani","Joey Leone","Maria Latore"]);

printPerson(person1);

//Uppgift 8 
console.log("\nUppgift 8");

class Box{
    height;
    width;
    
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}

function createBox(height,width){
    var box = new Box(height,width);
    return box;
}

var box = createBox(15,20);
console.log(box.height);    
console.log(box.width);

//Uppgift 9
console.log("\nUppgift 9");

class Triangle{
    height;
    width;
    area;

    constructor(height,width){
        this.height = height;
        this.width = width;
        this.area = this.areaCalculator();
    }

    areaCalculator(){
        return this.height * this.width / 2;
    }

}

function triangle(height,width){
    var triangle = new Triangle(height,width);
    return triangle;
}

var tri = triangle(12,14);
console.log(tri.area);

//Uppgift 10
console.log("\nUppgift 10");

function attributes(inputClass){
    var attrArray = [];
    for(var attribute in inputClass){
        attrArray.push(attribute);
    }
    return attrArray;
}

var testObject1 = {
    width: 15,
    height: 20
};

var attrsFromObject1 = attributes(testObject1);
console.log(attrsFromObject1);

var testObject2 = {
    a:1,
    b:2,
    c:3
};

var attrsFromObject2 = attributes(testObject2);
console.log(attrsFromObject2);