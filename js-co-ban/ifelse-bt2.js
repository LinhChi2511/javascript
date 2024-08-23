function b1(){
    let C = parseFloat(prompt('nhập độ C'));
    if (!isNaN(C)) {
        let F = C * 9 / 5 + 32;
        alert(`${C} độ C = ${F} độ F`)
    } else
        alert('vui lòng nhập lại')
}
function b2(){
    let m = parseFloat(prompt('nhập mét cần đổi'));
    if (m>=0 && !isNaN(m)){
        let ft = m *3.2808;
        alert(`${m} m = ${ft} feet`);
    } else
        alert('vui lòng nhập m là 1 số không âm');
//     khi nhập giá trị m = 100a value vẫn hiển thị là 100
}
function b3(){
    let a = parseFloat(prompt('nhập a là 1  cạnh của hình vuông'));
    if (a>0 && !isNaN(a)) {
        let S = a * a;
        alert('diện tích hình vuông là ' + S);
    } else
        alert(' vui lòng nhập a là 1 số dương');

}
function b4(){
    let x= parseFloat(prompt('nhập x là 1 cạnh của hình chữ nhật'));
    if (x>0 && !isNaN(x)) {
        let y = parseFloat(prompt('nhập y là cạnh còn lại của hình chữ nhật'));
        if (y > 0 && !isNaN(y)) {
            let S =x*y;
            alert(' diện tích hình chữ nhật cần tìm là ' + S)
        }else{
            alert('nhập lại cạnh y là 1 số dương ')
        }
    }else{
        alert('nhập lại cạnh x là 1 số dương ')
    }
}
function b5(){
    let a = parseFloat(prompt('nhập 1 cạnh của tam giác vuông'));
    if (a>0 && !isNaN(a)) {
        let b =parseFloat(prompt('nhập cạnh b kề cạnh a'));
        if (b>0 && !isNaN(b)) {
            let S = (a*b)/2;
            alert('tam giác có cạnh a và b có diện tích là: ' +S);
        } else{
            alert('nhập lại cạnh b là số dương')
        }
    }else {
        alert('nhập lại cạnh a là 1 số dương')
    }
}
function b6(){
    let a = parseFloat(prompt('nhập a để giải phương trình bậc 1 có dạng ax+b=0'));
    let b = parseFloat(prompt('nhập b để giải phương trình bậc 1 có dạng ax+b=0'));
    if (!isNaN(a) && !isNaN(b)) {
        let x = -b / a;
        kq = (a == 0 && b == 0) ? 'Phương trình vô số nghiệm' : (a == 0 && b != 0) ? 'Phương trình vô nghiệm' : 'nghiệm của pt=' + x;
        alert(kq);
    } else
        alert('vui lòng nhập lại a và b là 2  số')
}
function b7(){
    let a = parseFloat(prompt('nhập a để giải phương trình bậc 2 có dạng ax^2 + bx + c=0'));
    let b = parseFloat(prompt('nhập b'));
    let c = parseFloat(prompt('nhập c'));
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)){
        if (a == 0){
            let x = -c / b;
            kq = (b == 0 && c == 0) ? 'Phương trình vô số nghiệm' : (b == 0 && c != 0) ? 'Phương trình vô nghiệm' : 'nghiệm của pt=' + x;
            alert(kq);
        }
        else {
            let delta = (b**2)-(4*a*c);
            if (delta > 0){
                x1 = (-b-Math.sqrt(delta))/(2*a);
                x2 = (-b+Math.sqrt(delta))/(2*a);
                alert(`phương trình trên có 2 nghiệm phân biệt là : ${x1} và ${x2}`);
            } else {
                x = (-b)/(2*a);
                result= (delta < 0) ? 'Phương trình vô nghiệm' : 'Phương trình có 1 nghiệm là ' +x;
                alert(result)
            }
        }
    }else{
        alert('vui lòng nhập lại a, b, c là số')
    }
}
function b8(){
    let age= parseFloat(prompt('nhập tuổi'));
    if (age > 0 && age<120 && parseInt(age)===age) {
        alert('đây là tuổi của một người');
        //  xác định 1 số là số nguyên ta dùng parseInt(age)===age
    } else {
        alert('đây không phải số tuổi')
    }
}
function b9(){
    let a = parseFloat(prompt('nhập a là 1 cạnh của tam giác'));
    let b = parseFloat(prompt('nhập b là cạnh của tam giác'));
    let c = parseFloat(prompt('nhập c là cạnh của tam giác'));
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a>0 && b>0 && c>0) {
        if (a + b > c || a + c > b || b + c > a) {
            alert('3 cạnh đã nhập là cạnh của 1 tam giác')
        }
    } else {
        alert('a,b,c đã nhập không phải cạnh của tam giác')
    }
}
function b10(){
    let sodien = parseFloat(prompt('nhập số điện đã sử dụng'));
    if (!isNaN(sodien) && sodien >=0 && parseInt(sodien)===sodien){
        let tiendien =0;
        if (sodien <= 50){
            tiendien = sodien*1806;
            alert(`tiền điện cần đóng tháng này là ${tiendien} nè`);
        } else if(sodien <=100){
            tiendien = 50*1806 + (sodien-50)*1866;
            alert(`tiền điện cần đóng tháng này là ${tiendien} nè`);
        } else if (sodien <= 200){
            tiendien = 50*1806 + 50*1866 + (sodien-100)*2167;
            alert(`tiền điện cần đóng tháng này là ${tiendien} nè`);
        } else if(sodien <= 300){
            tiendien = 50*1806 + 50*1866 + 100*2167 + (sodien-200)*2729;
            alert(`tiền điện cần đóng tháng này là ${tiendien} nè`);
        } else if(sodien <= 400){
            tiendien = 50*1806 + 50*1866 + 100*2167 + 100*2729 + (sodien-300)*3050;
            alert(`tiền điện cần đóng tháng này là ${tiendien} nè`);
        } else {
            tiendien = 50*1806 + 50*1866 + 100*2167 + 100*2729 + 100*3050 + (sodien-400)*3151;
        }   alert(`tiền điện cần đóng tháng này là ${tiendien} nè`);
    } else
        alert('bạn thử nhập lại số điện là số nguyên dương nhé');
}

function b11(){
    let tn = parseFloat(prompt('tiền lương của bạn là bao nhiêu'));
    if (!isNaN(tn) && tn>=0){
        let thue = 0;
        if (tn <= 5000000){
            thue = tn*0.05;
        }else if(tn<=10000000){
            thue = tn*0.1 - 250000;
        } else if (tn<=18000000){
            thue = tn*0.15 - 750000;
        } else if (tn<=32000000){
            thue = tn*0.2 - 1650000;
        } else if (tn<=52000000){
            thue = tn*0.25 - 3250000;
        } else if (tn<=80000000){
            thue = tn*0.3 - 5850000;
        } else{
            thue = tn*0.35 -9850000;}
        document.getElementById('thue').innerHTML = 'Thuế cần nộp = ' + thue;
    }
    else
        alert('nhập số tiền lương của bạn là số dương để tính thuế')
}

function b12(){
    // đây là bài test thử
    let bandau = +prompt('nhập số tiền ban đầu');
    let lai = +prompt('nhập tiền lãi');
    let thang = +prompt('nhập số tháng cho vay');
    if (!isNaN(bandau) && !isNaN(lai) && !isNaN(thang) && bandau >=0 && lai >= 0 && thang >= 0 && parseInt(thang)===thang){
        let tragoc = bandau / thang;
        let solai=0;
        // số tiền lãi cần trả theo tháng
        for(var i = 0; i <= thang;i++){
            let laitiep = (bandau - tragoc*i)*lai;
            solai = solai + laitiep;
        }
        alert(`số lãi cần trả trong ${thang} tháng là ${solai}`);
    } else
        alert('vui lòng nhập lại tiền lãi, số tiền và tháng là các số dương')
}