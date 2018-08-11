/*Задание №1. Ключевое слово this
Создайте объект calculator с тремя методами:
1. read() запрашивает два значения при помощи prompt() и сохраняет их как
свойства объекта;
2. sum() возвращает сумму этих двух значений;
3. mul() возвращает произведение этих двух значений.*/
var calculator = {
	x:0,
	y:0,
	read: function(){
		this.x = Number(prompt("", "первое число"));
		this.y = Number(prompt("", "второе число"));
	},
	sum: function(){
		console.log(this.x+this.y);
	},
	mul: function(){
		console.log(this.x*this.y);
	}
}
calculator.read();
calculator.sum();
calculator.mul();

/*Задание №2. Объекты в функциях
Напишите функцию для создания объектов, которые описывают MP3 плеер.*/
function createMp3(model,memory,color) {
    return {
        model: model,
        memory: memory,
        displayInfo: function() {
		     console.log("Проигрыватель: " + this.model + ", память: " + this.memory);

        }
    };
}
var mp3 = createMp3("apple",32,"white");
mp3.displayInfo();

/*Задание №3. Объекты в функциях
Напишите функцию, которая принимает в качестве параметра объект salaries с
зарплатами и возвращает значение максимальной из зарплат.
Код должен работать с различным количеством зарплат в объекте.*/
var salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50
};
var max = 0;
var maxSalares = "";
for (var name in salaries) {
    if (max < salaries[name]) {
        max = salaries[name];
        maxName = name;
  }
}

console.log( max  + " - " + this.name);

/*Задание №4. Конструкторы объектов
Создайте тип объектов MP3 при помощи конструкторов объектов.*/
function Mp3(model, memory) {

this.model = model;

this.memory = memory;

this.play = function () {

console.log("Плеер: " + this.model + " " +
this.memory + " Gb, играет");

};

}

var apple = new mp3("apple", 32);
apple.play();

/*Задание №5. Функция как объект
Напишите функцию mul(), которая принимает любое количество параметров
разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.*/
function mul() { 
    var tmp = 1;
    var count = 0;
    for (var i = 0; i < arguments.length; i++){
        if (typeof(arguments[i])==="number"){

        tmp *=arguments[i];
        count++;
        }
    }
    if (count == 0) return 0;
    return tmp;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

/*Задание №6. Функция как объект. Явное указание this
Допишите код, чтобы в консоли браузера появились строки, которые написаны
в комментариях.*/
var country = {
    name: "Украина",
    language: "украинский",
    capital: {
        name: "Киев",
        population: 2907817,
        area: 847.66
    }
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
format.call(country, "<",">"); // "<Украина>;"
format.apply(country, ["[","]"]); // "[Украина]"
format.call(country.capital, '""', '""'); // ""Киев""
format.apply(country.capital, ['"','"']); // "Киев"
