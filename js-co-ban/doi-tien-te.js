function doitien(){
    let tien = parseFloat(document.getElementById('tien').value);
    let vao = document.getElementById("vao").value;
    let ra = document.getElementById('ra').value;
    let result
    if (vao == "USD" && ra == "VND"){
        result = tien*23000;
        document.getElementById('kq').innerHTML = result + ' đ';
        console.log(result);
    } else if (vao == "VND" && ra == "USD"){
        result = tien/23000
        document.getElementById('kq').innerHTML = result + ' $';
        console.log(result);
    }
    else {
        result = 'vui lòng chọn 2 giá trị khác nhau'
        document.getElementById('kq').innerHTML = result;
    }
}