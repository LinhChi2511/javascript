function sothu2023(){
    let num = 50;
    for (let i=1; i<2023; i++){
        num = num + i;
    }
    alert(' số hạng thứ 2023 của dãy là ' +num);
}
function nhapN(){
    let num =null;
    do {
        num = prompt('nhập số n từ khoảng 0 đến 100 ')
    } while (num>=100 || num<=0 || isNaN(num));
    console.log(num);
}
function findarr(){
    let arr = [12,3,5,1,-10,23];
    let max = arr[0];
    let max2 = arr[1];
    if (max<max2){
        let moi = max2;
        max2 = max;
        max = moi ;
    }
    for (let i=2; i<=arr.length;i++){
        if (arr[i]>=max){
            if (max>max2){
                max2 = max;
            }
            max = arr[i];
        } else if (arr[i]>=max2){
            max2 = arr[i];
        }
    }
    alert(`số lớn thứ 2 trong dãy [0,4,-9,43] là ${max2}`)
}

//hỏi lại bài 3 này nha
 function tuoicon(){
    let con =null
     let cha = null
     do {
         con  = +prompt('nhập tuổi con ')
         cha  = +prompt('nhập tuổi cha lớn hơn con ít nhất 25 tuổi')
     } while ((cha-25) <= con || isNaN(cha) || isNaN(con) || parseInt(cha)!== cha || parseInt(con)!==con);
     let nam =0
     for (let i = 1; cha/con !== 2; i++){
         cha++;
         con++;
         nam = i;
     }
     alert('tuổi cha ' + cha);
     alert('tuổi con ' + con);
     alert(`số năm tuổi cha gấp đôi con là ${nam} năm ` );
 }

 function snt(){
   let isPrime = false
     do {
         let so = +prompt('nhập 1 số để kiểm tra');
         if (so<2){
             isPrime = false;
         } else {
             let count = 0;
             for (let i=2; i<= Math.sqrt(so);i++) {
                 if (so % i === 0) {
                     isPrime = false;
                     count++;
                 }
             }
                 if (count ===0 ){
                         alert('đây là số nguyên tố')
                         isPrime = true;
                 }
         }
     } while(!isPrime)
 }
