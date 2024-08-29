function demso(){
    for(let i=1; i<=100;i++){
        if(i===99){
            alert(`đếm đến ${i} đã hoàn thành đếm số`);
        }
    }
}
function nhietdo(){
    let temp = +prompt('Nhập nhiệt độ hiện tại');
    if (!isNaN(temp)) {
        while (temp>100){
            alert('giảm nhiệt độ')
        }
        while (temp<20){
            alert('tăng nhiệt độ lên')
        }

    } else {
        alert('nhập lại nhiệt độ là số nhé')
    }
}
function fibonacci(){
    let n2 =1;
    document.write('Dãy fibonacci'+"<br>")
    document.write(n2 + "<br>");
    let n1= 0
    for (let i=1; i<20;i++){
        let n3 = n1 + n2;
        n1 = n2;
        n2 = n3;

        document.write(n2 +"<br>");
    }
}
function chiahetcho5(){
    let n1 = 0;
    let n2 = 1;
    while (n2%5!==0){
        let n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    alert(` ${n2} là số đầu tiên chia hết cho 5 trong dãy fibonacci`)
}
function sum20(){
    let n1 = 0;
    let n2 = 1;
    let sum = n2;
    for (let i=1; i<20;i++){
        let n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        sum +=n2;
    }
    alert(`tổng của 20 số đầu tiên trong dãy fibonacci là ${sum}`);
}
function sum30chia7(){
    // let i =0;
    // let sum = 0;
    // let count = 1;
    // while (i>=0){
    //     i++;
    //     if (i%7 === 0) {
    //         sum += i;
    //         count++;
    //     }
    //     if (count >=30){
    //         break;
    //     }
    // }
    let sum = 0;
    for (let i=0,count =0; i%7===0 && count==30; i=i+7){
        count++;
        sum +=i;
    }
    alert( `tổng 30 số đầu tiên chia hết cho 7 là ${sum}`)
}
function fizz(){
    for(let i=1; i<=100;i++){
        if (i%3===0 && i%5===0){
            document.write('FizzBuzz' + "<br>");
        } else if (i%5===0){
            document.write('Buzz' + "<br>")
        } else if (i%3===0){
            document.write('Fizz' + "<br>")
        } else {
            document.write(`${i}` + "<br>")
        }
    }
}
function doanso(){
    let n = +prompt('bạn muốn đoán số trong khoảng từ 0 đến bao nhiêu');
    let so = Math.floor(Math.random()*n);
    console.log(so);
    let diem = +prompt('nhập số bạn đoán thử xem');
    let count = 1;
    while (diem !== so) {
        if (diem>so){
            alert('số bạn đoán lớn hơn rùi, giảm lại nhé');
            document.write(`lần ${count}: ${diem}`+ "<br>")
            count++;
        } else if (diem < so) {
            alert('số bạn đoán bé hơn rồi, tăng lên đi');
            document.write(`lần ${count}: ${diem}` + "<br>")
            count++;
        }
        diem = +prompt('đoán lại nào');
        if (count == 5){
            alert('hết lượt');
            break;
        }
    }
    if(diem == so){
        alert('chúc mừng bạn đã đoán đúng');
        document.write(`lần ${count} là đúng nè : ${diem}` )
    }
}