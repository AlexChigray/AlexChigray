var budget, magazineName, shopGoods, employees;
 budget = +prompt('Ваш бюджет?', '');
 magazineName = prompt('Наименование магазина :', '');
 typeProduct_1 = prompt('Какой тип товаров будем продавать?', '');
 typeProduct_2 = prompt('Какой тип товаров будем продавать?', '');
 typeProduct_3 = prompt('Какой тип товаров будем продавать?', '');

// Главная инфа
 var mainList = {
 	'буджет на 1 день:D' : Math.round(budget / 30) + ' Рублей',
 	'Наименование магазина' : magazineName,
 	'типы товаров' : [typeProduct_1, typeProduct_2, typeProduct_3],
 	'сотрудники' : {
	 	name1: 'Alex',
	 	name2: 'Fedot',
	 	name3: 'Piter'
	 },
 		open: true
 }
 alert(mainList['буджет на 1 день:D']);
console.log(budget);
console.log(magazineName);
console.log(mainList);