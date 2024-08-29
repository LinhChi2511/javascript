function bai1(){
    let x = [4,3,9,12,18,-10,16,7,-5,5];
    let count = 0;
    for (let i = 0; i < x.length; i++){
        if (x[i] >= 10){
            document.write(`value ${x[i]} at position ${i}`);
            document.write("<br>")
            count++;
        }
    }
    document.write(`array has ${count} elements >=10`)
}

function maxarr(){
    let x = [4,3,9,12,18,-10,16,7,-5,5];
    let max = x[0];
    let maxvt;
    for (let i = 0; i < x.length; i++){
        if (x[i] >= max){
            max = x[i];
            maxvt = i;
        }
    }
    document.write(`max arr = ${max} at position ${maxvt}`);
}
function tbc(){
    let x = [4,3,9,12,18,-10,16,7,-5,5];
    x.sort(function (a,b){
        return b-a;
    })
    let max = x[0];
    let sum = 0;
    for (let i=0; i<x.length; i++){
        sum += i;
    }
    let tb =sum/x.length;
    alert(`max of arr = ${max}`);
    alert(`average of arr = ${tb}`);
}
function daoso(){
    let x = [4, 3, 9, 12, 18, -10, 16, 7, -5, 1];
    for (let i = 0 , j = x.length-1; i < j; i++ , j--){
        let a = x[i];
        x[i] = x[j];
        x[j] = a;
    }
    document.write(x);
}
function count(){
    let x = [4,3,9,12,18,-10,16,7,-5,5];
    let count = 0;
    for (let i=0; i<x.length; i++){
        if (x[i] <0 && parseInt(x[i])===x[i]){
            count++;
        }
    }
    alert(`arr has ${count} elements < 0 `)
}
function inputmang(){
    let x =[]
    let dem =0;
    while (dem<10){
        let n = +prompt('input 10 int value of array');
        if (parseInt(n)===n && !isNaN(n)){
            x.push(n);
            dem++;
        }
    }
    console.log(x);
//     phần trên là phần nhập vào mảng x
    let V = prompt('input int value V =')*1;
    let index = 0
    for (let i =0; i<x.length; i++){
        if (V == x[i]){
            index++
        }
    }
    if (index == 1){
        alert('V is in the array')
    } else {
        alert('V is not in the array')
    }
}
function delV(){
    let x = [4,3,9,12,18,-10,16,7,-5,5];
    let V;
    do {
        V = prompt('input int value V =')*1;
    } while (isNaN(V) && parseInt(V)!== V);
    document.write(x +"<br>");
    for (let i=0; i<x.length; i++){
        if (V == x[i]){
            alert('V is in the array');
            x.splice(i, 1);
        //     xóa 1 phần tử V từ vị trí i
        }
    }
    document.write(x)
}
function nhap(){
    let x =[]
    let dem =0;
    while (dem<10){
        let n = +prompt('input 10 int value of array');
        if (parseInt(n)===n && !isNaN(n)){
            x.push(n);
            dem++;
        }
    }
    console.log(x);
    x.sort(function (a,b){
        return a-b;
    })
    document.write(x)
}
function arr2(){
    let a = [];
    let b = [];
    let dem1 = 0;
    let dem2 = 0;
    while (dem1<10){
        let n = +prompt('input 10 int value of array a');
        if (parseInt(n)===n && !isNaN(n)){
            a.push(n);
            dem1++;
        }
    }
    console.log(a)
    while (dem2<10){
        let n = +prompt('input 10 int value of array b');
        if (parseInt(n)===n && !isNaN(n)){
            b.push(n);
            dem2++;
        }
    }
    console.log(b)
    // mảng 2 chiều test
    let c = new Array(a,b);
    for (let i=0; i<c.length; i++){
        for (let j=0; j<c[i].length; j++){
            document.write(c[i][j] + "&nbsp;&nbsp");
        }
        document.write("<br>")
    }
    document.write(c)
}
