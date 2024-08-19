function b1(){
    let a = parseFloat(prompt('nhập a'));
    let b = parseFloat(prompt('nhập b'));
    if (!isNaN(a) && !isNaN(b)) {
        kq = (a%b == 0) ? 'a chia hết cho b': 'a không chia hết cho b'
         alert(kq)
    } else {
        alert('vui lòng nhập a và b là 2 số')
    }
}
function b2(){
    let age = parseFloat(prompt('nhập số tuổi của học sinh'));
    if (!isNaN(age) && parseInt(age)===age && age > 0){
        kq = (age<15) ? 'học sinh chưa đủ tuổi vào học lớp 10' : 'học sinh đã đủ tuổi học lớp 10'
            alert(kq)
    } else
        alert('vui lòng nhập lại số tuổi không âm và là số nguyên')
}
function b3(){
    let x = parseFloat(prompt('nhập số nguyên cần kiểm tra dương hay âm'));
    if (!isNaN(x) && parseInt(x)===x){
        kq=(x>0) ? `${x} là số dương >0 ` : (x<0) ? `${x} là số âm <0` : `${x} số 0 nè`;
        alert(kq);
    } else
        alert('vui lòng nhập lại x là 1 số nguyên')
}
function bt4(){
    let a =parseFloat(prompt('nhập số a'));
    let b = parseFloat(prompt('nhập số b'));
    let c = parseFloat(prompt('nhập số c'));
    let max = 0;
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && parseInt(a)===a && parseInt(b)===b && parseInt(c)===c){
        if (a >= b){
            if (a > c){
                max = a;
            } else {
                max = c;
            }
        } else if ( b >= c){
                max = b;
            } else {
                max = c;
            }
        document.getElementById('max').innerHTML = 'GTLN trong 3 số là ' + max;
    } else
        alert('nhập lại 3 số nguyên nhé');
}

function bai5(){
    let d1 = parseFloat(prompt('nhập điểm bài kiểm tra 15'));
    let d2 = parseFloat(prompt('nhập điểm bài kiểm tra giữa kì'));
    let d3 = parseFloat(prompt('nhập điểm bài kiểm tra cuối kì'));
    if (d1 >= 0 && d2 >= 0 && d3 >=0 && d1 <= 10 && d2 <= 10 && d3 <= 10 && !isNaN(d1) && !isNaN(d2) && isNaN(d3)){
        let dtb = (d1 + (d2 * 2) + (d3 * 3))/3;
        result = (dtb >= 8) ? 'học sinh đạt loại giỏi' : (dtb >= 6.5) ? 'loại khá' : (dtb >= 5) ? 'loại trung bình' : (dtb >= 3.5) ? 'loại yếu' : 'loại kém';
        alert(result)
    } else
        alert('vui lòng nhập lại điểm là số >=0 và <= 10')

}

function b6(){
    let ds = parseFloat(prompt('nhập doanh số tháng này'));
    if (!isNaN(ds) && ds >= 0){
        let hh;
        if (ds <= 5000000){
            hh = ds*0.05;
        } else if(ds <= 10000000){
            hh = ds * 0.07;
        } else {
            hh = ds * 0.1;
        }
        document.getElementById('hh').innerHTML = hh;
    } else
        alert('vui lòng nhập lại doanh thu tháng này là 1 số dương');
}

function b7(){
    let min = parseFloat(prompt('nhập số phút gọi điện thoại'));
    if (!isNaN(min) && min >=0){
        const fee = 25000;
        let money;
        if (min <= 50){
            money = fee + min*600;
            alert(` cước điện thoại tháng này là ${money} đ`);
        } else if(min <= 200){
            money = fee + 50*600 + (min-50)*400;
            alert(` cước điện thoại tháng này là ${money} đ`);
        } else {
            money = fee + 50*600 + 150*400 + (min-200)*200;
        }
    } else
        alert('nhập lại số phút là số dương nhé');
}