function validateName() {
	var name = document.getElementById("name").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,30}$/;

	if (re1.test(name)) {
		return true;
	}
	else{
		alert("Nhập tên chưa chính xác");
		return false;
	}
}

function validateAddress() {
	var address = document.getElementById("address").value;
	var re2 = /^[0-9A-Za-z\s\'\-]{2,50}$/;

	if (address != "") {
		if (re2.test(address)) {
			return true;
		}
		else{
			alert("Nhập địa chỉ chưa chính xác");
			return false;
		}
	}
	else 
		alert("Vui lòng nhập địa chỉ");
}

function validatePhone() {
	var phoneNumber = document.getElementById("phone").value;
	var re3 = /^\d{10}$/;

	if (phoneNumber != "") {
		if (re3.test(phoneNumber)) {
			return true;
		}
		else{
			alert("Nhập số điện thoại chưa chính xác");
			return false;
		}
	}
	else
		alert("Vui lòng nhập số điện thoại");
}

function validateSchool() {
	var school = document.getElementById("school").value;
	var re4 = /^[0-9A-Za-z\s\'\-]{2,50}$/;

	if (school != "") {
		if (re4.test(school)) {
			return true;
		}
		else{
			alert("Nhập địa chỉ chưa chính xác");
			return false;
		}
	}
	else 
		alert("Vui lòng nhập địa chỉ");
}

function checkgt() {
	var a;
	if (document.getElementById("gt1").checked)
		a = document.getElementById("gt1").value;
	else
		a = document.getElementById("gt2").value;
	return a;
}

function checkprice() {
	var b;
	if (document.getElementById("used1").checked)
		b = document.getElementById("used1").value;
	else
		b = document.getElementById("used2").value;
	return b;	
}

function activeCheckbox() {
	var d = "";
	for (var i = 1; i <= 5; i++) {
		var c = "active" + i;
		if (document.getElementById(c).checked)
			d = d + "<br>" + "-" + document.getElementById(c).value;
	}
	return d;
}

function Submit() {
	var name = document.getElementById("name").value;
	var gt = checkgt();
	var bod = document.getElementById("bod").value;
	var phone = document.getElementById("phone").value;
	var address = document.getElementById("address").value;
	var school = document.getElementById("school").value;
	var price = checkprice();
	var date = document.getElementById("date").value;
	var favorite = document.getElementById("favorite").value;
	var skill = document.getElementById("skill").value;
	var active = activeCheckbox();
	var print = "";
	print += "<h2>PHIẾU ĐĂNG KÝ THAM GIA CHUYÊN ĐỀ <br> VỀ KỸ NĂNG CHO THANH THIẾU NHI</h2>";
	print += "<p>1.Họ và tên: " + name + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + gt + "<br>";
	print += "2.Ngày sinh: " + bod + "<br>";
	print += "3.Địa chỉ liên lạc: " + address + "<br>";
	print += "4.Điện thoại: " + phone + "<br>";
	print += "5.Đang học trường: " + school + "<br>";
	print += "6.Phí tham gia: " + price + "<br>";
	print += "7.Ngày tham gia: " + date + "<br>";
	print += "8.Sở thích: " + favorite + "<br>";
	print += "9.Nguyện vọng của phụ huynh: " + skill + "<br>";
	print += "10.Hoạt động muốn tham gia: " + active + "</p>";
	document.getElementById("output").innerHTML = print;
	document.getElementById("output").style.visibility = "visible";
}

