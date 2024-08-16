let year= parseFloat(prompt('nhập năm cần kiểm tra'));
if (year %4 ==0) {
    if (year % 100 == 0) {
        if (year % 400 == 0)
            alert(' đây là năm nhuận ')
        else
            alert('đây không phải là năm nhuận')
    } else
        alert('đây là năm nhuận')
} else
    alert('đây không phải là năm nhuận')