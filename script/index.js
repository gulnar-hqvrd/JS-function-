// function proses (){
// console.log("Salam");
// }

// proses()
// let result = proses()
// console.log(result); /// undefined


// function method1(firstname , lastname){
//     console.log("Hello" + " "+  firstname + " " + lastname);

// }

// method1("Gulnar" ,"Hagverdiyeva")


// function calculate(number){
//     let result = number ** 2
//     return result
// }

// let retval = calculate(5);
// console.log(retval);



// function method(string){
//     let a = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
//     return a;
    
// }
// console.log(method("SALAM?BAKI?   "));



// function function1(param1){

//     function function2(param2){
// let p = param2.toUpperCase()
//         function function3(param3){
//             return param3.replaceAll(" " , "-").replaceAll("?" , " ")

//         }
//       return function3(p)
//     }

//     return function2(param1)
// }

// let sonuc = function1("g?u?l?n?a?r??h a g v e r d i y e v a")

// console.log(sonuc);

// const numbers = [1 ,2,3,4,5,6,7,8,9];
// function writetoConsole (number){
//     // console.log("Your number -->" +  " " +number);
// }

// // numbers.forEach(x=>writetoConsole(x))

// numbers.forEach(
//     function(number){console.log("Your number -->" +  " " +number)}
// )
 


// setTimeout(function(){
//     console.log("Hello word");
// },1000)



// function add(a , b){
//     return a + b
// }
// let total = add(4,6)
// console.log(total);

// const add = (a , b)=> a + b



// const square = (x)=>x * x
// console.log(square(5));

// const number = [1,2,3,4,5,6,7,8]
// const square = number.map((number)=>number ** 2)
// console.log(square);


// function operateOnArray (numbers , operation){
//     const result = []
//     for(const number of numbers){
//         result.push(operation(number))
//     }
//     return result
// }

// const numberv1 = [1,2,3,4,5,6,7,8]
// const square = operateOnArray(numberv1 , (number) => number ** 2)
// console.log(square);


// function hocV1(text) {

//     function hocV2(textV1, lower) {

//         function hocV3(textV2, replace) {
//             return replace(textV2);
//         }

//         return hocV3(lower(textV1), (textV3) => textV3
//         .replaceAll(' ', '-')
//         .replaceAll('?', ' '));
//     }

//     return hocV2(text, (textV2) => textV2.toLowerCase());
// }
// let sonuc = hocV1('MuRat?v u r @ n o k');

// function multiplier(factor){
//     return (number) =>number * factor
// }

// const double = multiplier(2)

// console.log(double(5));



//Lexical Scoping And Closures

// function outerFunction(x){
//     function innerFunction(y){
//         return x + y;
//     }
//     return innerFunction
// }

// const add = outerFunction(5)
// const result = add(10)

// console.log(result);

// function createrCounter(){
//     let count = 0;

// function increment(value = 1){
//     count += value
// }

// function decrement(value = 1){
//     count -=value
// }

// function getCount(){
//     return count
// }

// return {
//     increment,
//     decrement,
//     getCount
// }
// }

// const counter1 = createrCounter()
// const counter2 = createrCounter()

 

// console.log(counter1.getCount());
// counter1.increment(3)
// console.log(counter1.getCount());;


// console.log(counter2.getCount());
// counter2.decrement(3)
// console.log(counter2.getCount());;



///Basketttt

function outerFunction(x) {  // x = 5
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction;
}

const add = outerFunction(5);
const result = add(10); // y = 10 -> 15


function createCounter() {  // A
    let count = 0;  // this variable is private to createCounter's scope

    function increment(value = 1) {
        count += value;
        // return count;
    }

    function decrement(value = 1) {
        count -= value;
        // return count;
    }

    function getCount() {
        return count;
    }


    return {
        increment,
        decrement,
        getCount
    };
}  // B


// create two seperate counter instances


const counter1 = createCounter();
const counter2 = createCounter();


// counter 1
// console.log(counter1.getCount()); // 0
counter1.increment();
counter1.increment(3);
// console.log(counter1.getCount()); // 4

// counter 2
// console.log(counter2.getCount()); // 0
counter2.decrement();
// console.log(counter2.getCount()); // -1



function createBasket() {

    const basket = {};  // use an object to store the basket items

    /**
     * 
     * @item {*} sepete eklenecek olan eleman 
     * @quantity {*} kaç adet eklenecek, default değer 1 
     */
    function addItem(item, quantity = 1) {

        if (!basket[item]) { // if the item is not in the basket
            basket[item] = 0;
        }
        basket[item] += quantity; // if the item is already in the basket, increment the quantity
    }

    /**
     * 
     * @item {*} sepet'en çıkarılacak olan eleman 
     */
    function removeItem(item) { // remove the item from the basket
        if (basket[item]) {
            delete basket[item];
        }
    }

    /**
     * 
     * @item {*} sepet'te olan eleman 
     * @quantity {*} kaç adet arttırılacak, default 1 
     */
    function increaseQuantity(item, quantity = 1) {
        if (basket[item]) { // if the item is already in the basket, increment the quantity
            basket[item] += quantity;
        }
    }

    /**
     * 
     * @item {*} sepet'te olan eleman 
     * @quantity {*} kaç adet azaltılacak, default 1, 0 olursa sepetten eleman silinir 
     */
    function decreaseQuantity(item, quantity = 1) {

        if (basket[item]) { // if the item is already in the basket

            basket[item] = Math.max(0, basket[item] - quantity);
            if (basket[item] === 0)
                delete basket[item];
            // removeItem(item);
        }
    }

    /**
     * 
     * @returns sepet'teki tüm elemanlar  
     */
    function getBasket() { return basket; }

    return {
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        getBasket
    };
}



const basket = createBasket();
basket.addItem("elma", 2);
basket.addItem("armut", 3);
basket.addItem("elma", 5);

console.log(basket.getBasket());
basket.decreaseQuantity("elma", 2);

console.log(basket.getBasket());

basket.removeItem("elma");
console.log(basket.getBasket());

basket.decreaseQuantity("armut");
basket.decreaseQuantity("armut");
basket.decreaseQuantity("armut");
console.log(basket.getBasket());

console.log("Murat");
const basketMurat = createBasket();
console.log(basketMurat.getBasket());
basketMurat.addItem("telefon", 2);
console.log(basketMurat.getBasket());