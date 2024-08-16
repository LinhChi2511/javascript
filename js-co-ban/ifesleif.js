let name
    name= prompt('vui lòng nhập tên');
if (name == 'Admin'){
   let pass = prompt('nhập mật khẩu');
   if (pass == 'TheMaster'){
       alert('Welcome');
   } else if (pass=='null'){
       alert('Canceled');
   } else {
       alert('Wrong password');
   }
} else if (name == 'null'){
    alert('canceld')
} else
    alert("I don't know you")