function bai1(){
    let a = parseFloat(prompt('nhập số a'));
    let b = parseFloat(prompt('nhập số b'));

    let kq= (a+b < 4) ? 'Below' : 'Over';
    alert(kq);
}
function bai2(){
    let m = prompt('Message');
    let kq = (m == 'Director') ? 'Hello' : (m=='')? 'No login' : '';
    alert(kq)
}