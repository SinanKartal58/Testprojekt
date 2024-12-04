let myCondition = true;  

myCondition = !myCondition  // not Operator


myCondition = true || false && true;    // or Operator

myCondition = true && true ; // and Operator


myCondition = 45 == "45";  // == test ob es extakt gleich, ohne Type

myCondition = 45 === 45; // == test ob esakt gleich, mit Tyoee -> true

myCondition = 45 < 123; // größer Abfrage

myCondition = 12 >= "45"; // gröpergleich Abfrage

myCondition = 45 != "47"; // == test ob exakt gleich, ohne Type

myCondition = 45!== 47; // testet ob exkat gleich, mit Type -> True 

myCondition = 45 !== "47"; // == testet ob exkat gleich, mit Type  - true



let myIfCondition = false;
let mysecondIfCondition = true;

if(2 < 1){ 
    console.log( "hello World! if teil");

}
else{ 
    console.log("hello world! else-Teil");
}



// Aufgabe 1:
if (5 <= 10) {
    console.log("a");
}

// Aufgabe 2:
if (15 == 15) {
    console.log("b");
}

// Aufgabe 3:
if (20 > 10) {
    console.log("c");
}

// Aufgabe 4:
if (7 <= 7) {
    console.log("a");
} else {
    console.log("b");
}

// Aufgabe 5:
if (10 > 5) {
    console.log("a");
} else if (3 < 2) {
    console.log("b");
} else {
    console.log("c");
}

// Aufgabe 6:
if (12 >= 8 && 8 < 9) {
    console.log("a");
} else {
    console.log("b");
}

// Aufgabe 7:
if (3 == 3) {
    console.log("a");
} else if (10 > 20) {
    console.log("b");
} else {
    console.log("c");
}

// Aufgabe 8:
if (6 != 6) {
    console.log("a");
} else if (15 <= 20) {
    console.log("b");
} else {
    console.log("c");
}

// Aufgabe 9:
if (7 < 5) {
    console.log("a");
} else if (!(10 >= 10)) {
    console.log("b");
} else {
    console.log("c");
}

// Aufgabe 10:
if (4 >= 4 && 8 < 15 && 3 == 3) {
    console.log("a");
} else {
    console.log("b");
}