function fibonacci() {
    let soluong =+prompt('Hãy nhập n số đầu tiên trong dãy fibonacci bạn muốn hiển thị');
    if (!isNaN(soluong) && soluong>=1 && soluong<=30 && parseInt(soluong)){
        let n2 =1;
        //d để người dùng nhập vào số lượng số fibonacci muốn hiển thị đê
        document.write('Dãy fibonacci'+"<br>")
        document.write(n2 + "<br>");
        let n1= 0;
        let i = 0;
        while (i >= 0 ){
            let n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
            document.write(n2 + "<br>");
        }
    } else{
        alert('nhập lại số lượng là 1 số nguyên dương và không quá 30 số nhé ');
    }

}
function giaithua(){
    let n = +prompt('nhập 1 số nguyên dương cần tính giai thừa');
    if (n>0 &&!isNaN(n) && parseInt(n)===n){
        let giaithua = 1;
        for (let i=1;i<=n;i++){
            giaithua *= i;
        }
        alert(`${n} giai thừa = ${giaithua}`);
    } else {
        alert('Vui lòng nhập lại 1 số nguyên dương nhé')
    }
}
function tamgiac(){
    for (let i = 1; i <= 5; i++){
        // i là cột, j là hàng, nếu hàng <= cột thì in ra *
        for (let j = 1; j <= i; j++){
            document.write('*')
        }
        document.write("<br>")
    }
    document.write("<br>")
    // nâng cấp bài toán bằng cách cho phép người dùng nhập cạnh bên tam giác
    // for (let i = 1 ; i <= 5; i++){
    //     for (let j = 5; j >= i; j--){
    //         document.write('*')
    //     }
    //     document.write("<br>")
    // }
//     j+i <=6  => j<=6-i
    for (let i = 1; i <= 5; i++){
        // i là cột, j là hàng, nếu hàng <= cột thì in ra *
        for (let j = 1; j<=6-i; j++){
            document.write('*')
        }
        document.write("<br>")
    }
    document.write("<br>");
    //tam giác ngược
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            if (i + j > 5) {
                document.write("*");
            } else {
                document.write("&nbsp;&nbsp;")
            //     lệnh &nbsp là dấu cách
            }
        }
        document.write("<br>")
    }
    document.write("<br>");
   for (let i=1; i<=5;i++){
       for (let j = 1; j<=5; j++){
           if (j<i){
               // bắt đầu chạy i và j =1; khi nào j>=i thì in sao k; j<i thì in ra khoảng trắng
               document.write("&nbsp;&nbsp;");
           } else{
               document.write("*")
           }
       }
       document.write("<br>");
   }

}
function hcn(){
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 10; j++) {
            if (i == 1 || i == 5) {
                document.write('*');
            } else if (j == 1 || j == 10) {
                    document.write("*")
                } else{
                    document.write("&nbsp;&nbsp;")
                }
            }
        document.write("<br>")
        }
}
function lai(){
    let bandau = +prompt('nhập số tiền ban đầu');
    let lai = +prompt('nhập tiền lãi');
    let thang = +prompt('nhập số tháng cho vay');
    if (!isNaN(bandau) && !isNaN(lai) && !isNaN(thang) && bandau >0 && lai > 0 && thang > 0 && parseInt(thang)===thang){
        let tragoc = bandau / thang;
        // số tiền gốc trả cố định mỗi tháng
        let solai=0;
        // số tiền lãi cần trả theo tháng
        for(var i = 0; i <= thang;i++){
            let laitiep = (bandau - tragoc*i)*lai;
            // lãi những tháng tiếp
            solai = solai + laitiep;
        //     tổng lãi trả trong n tháng
        }
        alert(`số lãi cần trả trong ${thang} tháng là ${solai}`);
    } else
        alert('vui lòng nhập lại tiền lãi, số tiền và tháng là các số dương')
}