alert("Данная программа переводит градусы Цельсия в градусы Фаренгейта")
const celsTemp = Number.parseFloat(prompt("Введите температуру в градусах Цельсия:"))
let farTemp = (9 / 5) * celsTemp + 32
alert(`${celsTemp} градусов Цельсия = ${farTemp.toFixed(1)} градусов Фаренгейта`)