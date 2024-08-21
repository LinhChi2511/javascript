function tamgiacvuongcan(){
    let a = parseFloat(prompt('nhập cạnh a của tam giác'));
    let b = parseFloat(prompt('nhập cạnh b của tam giác'));
    let c = parseFloat(prompt('nhập cạnh c của tam giác'));
    if (a>0 && b>0 && c>0 && !isNaN(a) && !isNaN(c) && !isNaN(b)) {
        if (a+b>c && a===b && (a*a)+(b*b)===(c*c)){
            alert(`đây là tam giác vuông có 2 cạnh góc vuông là ${a} và ${b}`);
        } else if (a+c>b && a===c && (a*a)+(c*c)===(b*b)){
            alert(`đây là tam giác vuông có 2 cạnh góc vuông là ${a} và ${c}`);
        } else if(b+c>a && b===c && (b*b)+(c*c)===(a*a)) {
            alert(`đây là tam giác vuông có 2 cạnh góc vuông là ${b} và ${c}`);
        } else{
            alert('đây không phải tam giác vuông cân');
        }
    } else {
        alert('nhập lại a,b,c là các số dương nhé');
    }
}
function bt2(){
    let thang = parseFloat(document.getElementById('month').value);
    let nam = parseFloat(document.getElementById('year').value);
    if (thang >=1 && thang <= 12 && parseInt(thang)===thang){
        if (parseInt(nam)===nam){
            switch (thang){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    document.getElementById('result').innerHTML = ` tháng ${thang} có 31 ngày`
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    document.getElementById('result').innerHTML = `tháng ${thang} có 30 ngày`;
                    break;
                case 2:
                    if (nam%400===0 || nam%4===0 && nam%100!==0 ){
                        document.getElementById('result').innerHTML = `tháng ${thang} năm ${nam} có 29 ngày`;
                    } else {
                        document.getElementById('result').innerHTML =`tháng ${thang} năm ${nam} có 28 ngày`;
                    }
                    break;
            }
        } else {
         alert('vui lòng nhập lại năm là 1 số nguyên nhé')
        }
    }else {
        alert("vui lòng nhập lại 1 trong 12 tháng")
    }
}

function doitien(){
    let tien = parseFloat(document.getElementById('tien').value);
    let vao =document.getElementById('vao').value;
    let ra =document.getElementById('ra').value;
    if (!isNaN(tien) && tien>0){
        switch (vao){
            case 'USD':
                if (ra =='VND'){
                    tien = tien*24000;
                } else if (ra == 'JPY'){
                    tien = tien*145;
                } else if (ra == 'RMB'){
                    tien = tien*7.13;
                } else if (ra=='GBP'){
                    tien = tien*0.77;
                } else {
                    document.getElementById('kq').innerHTML = 'vui lòng chọn 2 giá trị khác nhau';
                }
                document.getElementById('kq').innerHTML =  +tien  ;
                break;
            case 'VND':
                if (ra =='USD'){
                    tien = tien/24000;
                } else if (ra =='JPY'){
                    tien = tien*0.0058;
                } else if (ra == 'GBP'){
                    tien = tien*0.00003;
                }else if(ra == 'RMB'){
                    tien = tien*0.00028;
                } else {
                    document.getElementById('kq').innerHTML = 'vui lòng chọn 2 mệnh giá tiền khác nhau';
                }
                document.getElementById('kq').innerHTML =  +tien  ;
                break;
            case'JPY':
                switch (ra){
                    case 'USD':
                        tien = tien/145;
                        break;
                    case 'VND':
                        tien = tien*171;
                        break;
                    case 'RMB':
                        tien = tien*0.05;
                        break;
                    case 'GBP':
                        tien = tien*0.01;
                        break;
                    default:
                        document.getElementById('kq').innerHTML = 'vui lòng chọn 2 mệnh giá đổi tiền khác nhau';
                        break;
                } document.getElementById('kq').innerHTML = +tien;
                break;
            case 'GBP':
                if (ra=='USD'){
                    tien=tien*1.303;
                } else if (ra=='VND'){
                    tien = tien*32480;
                } else if (ra=='RMB'){
                    tien = tien*929;
                } else if (ra=='JPY'){
                    tien = tien*190;
                } else{
                    Document.getElementById('kq').innerHTML = 'vui lòng chọn 2 mệnh giá đổi tiền khác nhau';
                }
                document.getElementById('kq').innerHTML = tien;
                break;
            case 'RMB':
                if (ra=='USD'){
                    tien = tien*0.14;
                } else if (ra=='VND'){
                    tien = tien*3496;
                } else if (ra=='JPY'){
                    tien = tien*20;
                }else if (ra=='GBP'){
                    tien = tien*0.11;
                }else{
                    Document.getElementById('kq').innerHTML = 'vui lòng chọn 2 mệnh giá đổi tiền khác nhau';
                }
                document.getElementById('kq').innerHTML = tien;
                break;
        }

    } else {
        document.getElementById('kq').innerHTML = 'vui lòng nhập số tiền là 1 số dương ';
    }
}
function luongthuong(){
    let luong = parseFloat(prompt('nhập lương tháng của bạn'));
    let h = parseFloat(prompt('nhập số giờ bạn làm trong tháng này'));
    let tien = 0;
    let thuong;
    if (!isNaN(h) && !isNaN(luong) && luong >0 && h>0 && h<720) {
        if (h>=200){
            thuong = luong*0.2;
            tien = luong + thuong;
            alert(`tháng này bạn bạn được nhận thưởng ${thuong} đ`);
            alert(`tổng số tiền bạn nhận được tháng này là ${tien} đ`);
        } else if (h>=100){
            thuong = luong*0.1;
            tien = luong + thuong;
            alert(`tháng này bạn bạn được nhận thưởng ${thuong} đ`);
            alert(`tổng số tiền bạn nhận được tháng này là ${tien} đ`);
        } else {
            alert(`tháng này bạn bạn được không được nhận thưởng`);
            alert(`tổng số tiền bạn nhận được tháng này là ${luong} đ`)
        }
    } else {
        alert('nhập số giờ làm việc và lương là 1 số dương nhé')
    }
}
function chuyencan(){
    let buoihoc = parseFloat(prompt('Nhập tổng số buổi học trong module này'));
    let buoivang = parseFloat(prompt('Nhập số buổi nghỉ trong tháng'));
    let r = buoivang/buoihoc;
    if ( !isNaN(buoihoc) && !isNaN(buoivang) && parseInt(buoivang)===buoivang && parseInt(buoihoc)===buoihoc){
        if (buoihoc>=buoivang && buoihoc <= 30){
            if (r>0.1){
                alert('Bạn sẽ nhận được mail cảnh cáo vì nghỉ hơn 10% số buổi học')
            } else if (r>=0.2){
                alert('Bạn đã bị buộc chuyển lớp vì nghỉ quá số buổi cho phép')
            } else {
                alert('safe')
            }
        } else {
            alert('Vui lòng nhập số buổi học >= buổi vắng và không quá 30 ngày')
        }
    } else {
        alert('Vui lòng nhập lại buổi vắng và buổi học là 2 số nguyên dương')
    }
}

