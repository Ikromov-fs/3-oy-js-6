
var rezult = document.querySelector(`.rezult`);

var buyerName = prompt(`Assalomu alaykum ismingizni kiriting `);
var money = +prompt((`${buyerName} qancha mablag'ingiz bor (summ)`));
var valyuta = prompt((`Mablag'ingizni qaysi valyutada ko'rishni hohlaysiz (dollor, euro, rubl.)`));

var dollor = `dollor`;
var euro = `euro`
var rubl = `rubl`;

var dollor100 = 1131000;
var euro100 = 1180000;
var rubl100 = 179000;

var rezultDollor = Number((money * 100) / dollor100);
var rezultEuro = Number((money * 100) / euro100);
var rezultRubl = Number((money * 100) / rubl100);


if(valyuta == dollor){
    rezult.textContent = `Sizning ${rezultDollor} $ da mablag'ingiz bor`
}
else if(valyuta == euro){
    rezult.textContent = `Sizning ${rezultEuro} Euroda mablag'ingiz bor`
}
else if(valyuta == rubl){
    rezult.textContent = `Sizning ${rezultRubl} Rubda mablag'ingiz bor`
}
else{
    rezult.textContent = `Xato qiymat`
};

