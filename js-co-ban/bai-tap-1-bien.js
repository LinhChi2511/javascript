const pi=3.14;
function doinhietdo() {
    let doC = prompt('nhap do C =')*1;
    let doF = (doC * 9 / 5 + 32);
    document.write('do F =', + doF);
}
function diemtb(){
    let Vatly = prompt('nhap diem vat ly') *1;
    let Hoahoc =parseFloat(prompt('nhap diem hoa hoc') );
    let sinhhoc = prompt('nhap diem mon sinh') *1;
    let dtb = (Vatly + Hoahoc + sinhhoc)/3;
    document.write('diem trung binh 3 mon la ' + dtb);
}
function dientichhinhtron(){
    let r=prompt('nhap bankinh =')*1;
    let s = r*r*pi;
    document.write('dien tich hinh tron la ' + s);
    // document.write() hiển thị trên trang
}
function chuvi(){
    let r = prompt('nhap bankinh =')*1;
    // const pi = 3.14;
    let cv = 2*r*pi;
    alert('chu vi hinh tron = ' + cv);
    // alert - hiển thị dạng thông báo
}