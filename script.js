//1
function Person(name, lastName, age) {
    var n = 0;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
        function canWalk() {
            return true
        }
        function countPerson() {
           var n = 1;
            return function () {
                return n++
            };
        };
};
var John = new Person ("John", "Johnson", 23);
var Bill = new Person ("Bill", "Clinton", 63);
var Santa = new Person ("Santa", "Claus", 1000);
//2
function Car(canRide, wheels, model) {
    this.canRide = canRide;
    this.wheels = wheels;
    this.model - model;
        function toString() {
            alert ("Это объект" + model + "! " + "Он может ехать? " + canRide + " У него " + wheels + "колеса и у него модель " + model)
        };
    toString()
};
var Bus = new Car (true, 8, "LAZ");
var moto = new Car (true, 2, "Yamaha");
//3
var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert( this.step );
    }
};
ladder.up().up().down().up().down().showStep()
//4
function Runner() {
    this.steps = 0;
        this.step = function (){
            this.delay();
            this.steps++;
    }
    function fib(n) {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    this.delay = function() {
        for (var i = 0; i < 20; i++) {
            this[i] = fib(i);
        }
    }
}
var runner1 = new Runner();
var runner2 = new Runner();

var t1 = setInterval(function() {
    runner1.step();
}, 15);
var t2 = setTimeout(function go() {
    runner2.step();
    t2 = setTimeout(go, 15);
}, 15);
setTimeout(function() {
    clearInterval(t1);
    clearTimeout(t2);
    alert( runner1.steps );
    alert( runner2.steps );
}, 5000);
//5
var re = /\d+.\d+/g;
alert( "Завтрак в 09:00. Обед - в 21-30".match(re) ); // 09:00, 21-30
//6
var reg = /\.{3,}/g;
alert( "Привет!... Как дела?.....".match(reg) ); // ..., .....
//7
var re = /#\w{6}/g
var str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2"
alert( str.match(re) )  // #121212,#AA00ef
