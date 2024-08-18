function check(){
    document.getElementById('bt').style.backgroundColor="brown"
    // lệnh trên dùng để đổi màu cho ô có id = bt
    let h = parseFloat(document.getElementById('height').value);
    if (h >0 && !isNaN(h)){
        let w = parseFloat(document.getElementById('weight').value);
        if (w > 0 && !isNaN(w)){
            let a = parseInt(document.getElementById('age').value);
            if (a>=20 && !isNaN(a)){
                let BMI = w/(h**2);
            //     a**2 = a*a = a^2
                if (BMI > 0 && !isNaN(BMI)){
                    if (BMI < 18.5){
                        document.getElementById('kq').innerHTML = 'Cân nặng thấp (gầy)';
                    } else if (BMI < 25.0){
                        document.getElementById('kq').innerHTML = 'Bình thường'
                    } else if (BMI < 30.0){
                        document.getElementById('kq').innerHTML = 'Thừa cân'
                    } else{
                        document.getElementById('kq').innerHTML = 'Béo phì'
                    }
                } else {
                    alert(' lỗi ')
                }
            } else {
                alert('chỉ số chỉ đo chính xác với người trên 20 tuổi')
            }
        } else {
            alert('Vui lòng nhập lại cân nặng của bạn tính theo kg')
        }
    } else {
        alert('Vui lòng nhập lại chiều cao của bạn tính theo đơn m (1m=100cm)')
    }
}