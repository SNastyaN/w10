x = 40000;
vokal = 22000;
z=x+vokal;
console.log(z)// первая задача

v="Владивосток ";
b=2000;
m = v + b;
console.log(m) //вторая задача

mas = 128;
like = 254;
vk = 137;
yout = 201;
console.log(mas+like+vk+yout) // задача 3


n=2
console.log(n**5) // Задача 4 

console.log('"Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"')// Задача 5

const greetings = "Привет";
const name = "Кот";
console.log(greetings +' '+ name )


let time;
time = 34;
console.log('Старт поездки. Осталось минут: ' + time)
time -= 15;
console.log('Немного сторис в соцсетях. Осталось минут: '+ time)
time -=10;
console.log('Немного не новостей, но событий. Осталось минут: '+ time)
time=0;
console.log('Вы приехали. Добро пожаловать в Москву')// задача 7

let fahrenheit = 451;
let celsius = (fahrenheit-32)/1.8;
console.log(fahrenheit +' градуса по Фаренгейту — это ' + celsius + ' градуса по Цельсию.') //задача 8


const sum = document.querySelector('.sum').value;
const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

let message;

console.log(`Ваш депозит на начало расчетного периода составлял ${deposit + " " + currency}`); // Ваш депозит на начало расчетного периода составлял 30000 руб

console.log(message); // Согласно вашему тарифу, вам была присвоена ставка 18.5%

console.log(message); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

button.addEventListener('click', () => {
  const sum = document.querySelector('.sum').value;
  total.textContent = (message); // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});