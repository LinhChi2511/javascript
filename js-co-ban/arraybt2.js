function print(){
    let a = [
        [1,2,1,24],
        [8,11,9,4],
        [7,0,7,27],
        [7,4,28,14],
        [3,10,26,7]
    ];
    for (let i = 0; i < a.length; i++){
        document.write(`row ${i}`);
        document.write("<br>");
        for (let j = 0; j < a[i].length; j++){
            document.write(`${a[i][j]}`);
            document.write("<br>");
        }
    }
}
function dao(){
    let a = new Array('c','s','2','6','1');
    let n;
    // cách này nhanh hơn nè sử dụng reverse()
    // document.write(a.reverse().toString());
    for(let i = 0, j = a.length - 1; i < j; i++, j--){
        let n = a[i];
        a[i] = a[j];
        a[j] = n;
    }
    document.write(a);
}

function mangkitu(){
    let m = ['hi', 'ha', 'he', '5'];
    document.write(`mảng này gồm ${m.length} kí tự`);
}
function dem(){
    let day = "kiểm tra đếm từ";
    document.write(day);
    let mang = day.split(" ");
    // phương thức split dùng để chia chuỗi thành 1 mảng các chuỗi con
    console.log(mang);
    document.write('<br>')
    document.write(`dãy gồm ${mang.length} từ`)
}
function ktchuoi(){
    let str1 = prompt('vui lòng nhập chuỗi 1');
    let str2 = prompt('vui lòng nhập chuỗi 2');
    let mang1 = str1.split(' ');
    let mang2 = str2.split(' ');
    same = true;
    if (mang1.length == mang2.length){
        for (let i = 0; i < mang1.length; i++){
            if (mang1[i] !== mang2[i]){
                same = false;
                break;
            }
        }
        console.log(mang1);
        console.log(mang2);
    } else{
        same =false;
    }
    if (same){
        alert('2 chuỗi đã nhập giống nhau')
    } else {
        alert('2 chuỗi đã nhập khác nhau')
    }
}
function timkitu(){
    let mang = [];
    let count = +prompt('bạn muốn mảng có bao nhiêu phần tử');
    while (isNaN(count) || count<0 || parseInt(count)!==count){
        count = prompt('nhập lại số lượng là 1 số nguyên dương nhé')
    }
    for (let i =0; i<count;i++){
        let n = prompt('hãy nhập 1 kí tự của mảng');
        mang.push(n);
    }
    console.log(mang);
    for (let i = 0; i < mang.length; i++){
        if (mang[i]=== '-'){
            mang[i] = '_';
        }
    }
    document.write(mang);
}