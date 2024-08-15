function cong() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = a + b;
    document.getElementById('c').innerHTML = c;
}
function tru(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = a - b;
    document.getElementById('c').innerHTML = c;
}
function nhan(){
    let a= parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = a*b;
    document.getElementById('c').innerHTML = c;
}
function chia(){
    let a = parseFloat(document.getElementById('a').value);
    let b= parseFloat(document.getElementById('b').value);
    let c= a / b;
    document.getElementById('c').innerHTML = c;
}
function luythua(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = a ** b;
    document.getElementById('c').innerHTML = c;
}