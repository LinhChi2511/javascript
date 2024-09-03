function trans(){
    let anh = ["banana","apple","orange","pen","fan","book","pencil"];
    let viet = ["chuối","táo","cam","bút","quạt","sách","bút chì"];
    let tu = document.getElementById('eng').value;
    let vitri = 0;
    let result = "";
    for (let i = 0; i<anh.length; i++) {
        // duyệt mảng anh[] từ vị trí 0 đến cuối
        if (tu == anh[i]){
            //  nếu có 1 từ trong mảng giống với từ đã nhập vào thì gán vị trí i =
            vitri = i;
            for (let j = 0; j<viet.length; j++){
                // nếu giá trị vitri = j thì gán kết quả result = viet[j] trong mảng việt
                if (vitri == j){
                    result = viet[j];
                }
            }
        } else {
            result = "Từ này chưa có trong từ điển cơ bản, hãy chờ bản update nhé"
        }
    }
    document.getElementById('result').innerHTML =result
}