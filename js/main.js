var increment = document.getElementById('increment');
var changeName = "Abigail";
var changeName2 = "Cherry";
var catName = document.getElementById('cat-name').innerHTML = changeName
var catName2 = document.getElementById('cat-name2').innerHTML = changeName2;
var increment2 = document.getElementById('increment2');
var first = 0;
var second = 0;
function increase(){
    first++
    increment.innerHTML = first;
}
function secondIncrement(){
    second++
    increment2.innerHTML = second;
}