function validateFirstName() {
	var fName = document.getElementById("firstname").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

	if (re1.test(fName)) {
		document.getElementById("firstnameprompt").style.color = "green";
		document.getElementById("firstnameprompt").innerHTML = "<strong>Valid</strong>";
		return true;
	}
	else{
		document.getElementById("firstnameprompt").style.color = "red";
		document.getElementById("firstnameprompt").innerHTML = "<strong>Enter 2-15 characters.</strong>";
		return false;
	}
}

function validateLastName() {
	var lName = document.getElementById("lastname").value;
	var re2 = /^[a-zA-Z\s\'\-]{2,15}$/;

	if (re2.test(lName)) {
		document.getElementById("lastnameprompt").style.color = "green";
		document.getElementById("lastnameprompt").innerHTML = "<strong>Valid</strong>";
		return true;
	}
	else{
		document.getElementById("lastnameprompt").style.color = "red";
		document.getElementById("lastnameprompt").innerHTML = "<strong>Enter 2-15 characters.</strong>";
		return false;
	}
}

function validatePhone() {
	var phoneNumber = document.getElementById("phone").value;
	var re3 = /^\d{3}-\d{3}-\d{4}$/;

	if (re3.test(phoneNumber)) {
		document.getElementById("phoneprompt").style.color = "green";
		document.getElementById("phoneprompt").innerHTML = "<strong>Valid</strong>";
		return true;
	}
	else{
		document.getElementById("phoneprompt").style.color = "red";
		document.getElementById("phoneprompt").innerHTML = "<strong>Use xxx-xxx-xxxx</strong>";
		return false;
	}
}

function DisplayFormValues() {
	var str = '';
	var elem = document.getElementById('widgetForm').elements;
	for (var i=0; i< elem.length; i++){
		str += "<b>Type: </b>" + elem[i].type + "&nbsp&nbsp";
		str += "<b>Name: </b>" + elem[i].name + "&nbsp&nbsp";
		str += "<b>Value: </b><i>" + elem[i].value + "</i>&nbsp&nbsp";
		str += "<br>";
	}
	document.getElementById("display").innerHTML = str;
}

function calcOrder() {
	
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var username = firstname + " " + lastname;
	var phone = document.getElementById("phone").value;
	var quantity = document.getElementById("quantity").value;
	var price = document.getElementById("price").value;

	document.getElementById("orderConfirm").innerHTML = "<h2>Order Summary</h2>";
	document.getElementById("orderConfirm").innerHTML += "<p>" + username.toUpperCase() + "<br>" + phone + "</p>";
	document.getElementById("orderConfirm").innerHTML += "<p>Order Total: " + "$" + price*quantity + "</p>";
}