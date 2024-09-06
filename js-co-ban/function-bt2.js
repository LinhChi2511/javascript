function b1(){
    let a = soduong();
    document.write(binhphuong(a));
}
function b2(){
    let r = soduong();
    let dt = dientich(r);
    let cv = chuvi(r);
    document.write(`hình tròn bán kính r = ${r} có <br> diện tích là ${dt} <br> chu vi là ${cv}`)
}
function b3(){
    let a = songuyenduong();
    let gt = 1;
    gt = giaithua(a,gt)
    document.write(`giai thừa của ${a} là ${gt}`)
}
function b4(){
    let a = prompt(' Input something ');
    let isNumber = checkNum(a)
    document.write(isNumber);
}
function b5(){
    let arr = [];
    for (let i=0; i<3; i++){
        arr.push(songuyen());
    }
    arr.sort(function (a,b){
        return a-b;
    })
    document.write(`phần tử nhỏ nhất là ${arr[0]}`)
}
function b6(){
    let kt = prompt('input a number');
    let isTrue = ktNguyenduong(kt)
    document.write(isTrue)
}
function b7(){
    let arr = [];
    let a = songuyen();
    let b = songuyen();
    arr.push(a);
    arr.push(b);
    document.write(`a = ${arr[0]} and b = ${arr[1]}`)
    console.log(arr);
    changePosition(arr);
    document.write(` then a = ${arr[0]} and b = ${arr[1]}`)
}
function b8(){
    let arr =[];
    let length = 0;
    length =songuyenduong(length)
    for (let i = 0; i<length; i++){
        let a = 0;
        arr.push(songuyen(a));
    }
    document.write(`mảng số nguyên được truyền vào là `+arr +"<br>");
    arr.reverse();
    document.write(`mảng đảo ngược là ${arr}`)
}
function b9(){
    let arr = [];
    let length = songuyenduong();
    for (let i = 0; i<length; i++){
        let a = +prompt('input character')
        arr.push(a);
    }
    console.log(arr);
    let character = +prompt(`input a character to check`);
    let count = 0;
    count = checkArray(character,count,arr)
    if (count>0){
        document.write(`this arr has ${count} characters ${character}`)
    } else {
        document.write('-1')
    }
}
function songuyenduong(num){
    do {
        num = +prompt('nhập số nguyên dương')
    } while (isNaN(num) || num <= 0 ||parseInt(num)!==num)
    return num;
}
function songuyen(num){
    do {
        num = +prompt(' Input a Int number')
    } while (isNaN(num) || parseInt(num)!==num);
    return num
}
function soduong(num){
    do {
        num = +prompt('Nhập 1 số dương')
    } while (isNaN(num) || num <= 0)
    return num
}
function binhphuong(num){
    return num*num;
}
function dientich(num){
    return num*num*Math.PI;
}
function chuvi(num){
    return 2*Math.PI*num;
}
function giaithua(num,num2){
    for (let i = 1; i<=num; i++){
        num2 = num2*i;
    }
    return num2;
}
function checkNum(input){
    if (isNaN(input)) {
        return false;
    }
    return true;
}
function ktNguyenduong(num){
    if (!(num>0 || !isNaN(num) || parseInt(num)===num)){
        return false;
    }
    return true;
}
function changePosition(arr){
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
}
function checkArray(a, count, arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a){
            count++;
        }
    }
    return count;
}