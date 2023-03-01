"use strict";

const box = document.getElementById('box');

console.log(box);


const btn = document.getElementsByTagName('button');
console.log(btn[0]);


const circle = document.getElementsByClassName('circle');

console.log(circle);

const hearts = document.querySelectorAll('.heart');

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});