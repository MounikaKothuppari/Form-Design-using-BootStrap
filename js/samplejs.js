
var r, y, z, h, divName1, x, amtDiv, pwdName;
var uPatn = /^[a-zA-Z]+$/;
var pPatn = /^[0-9]+$/;
x = document.createElement("span");
x1 = document.createElement("span");

function fnName() {
    y = document.getElementById("name1");
    divName1 = document.getElementById("nameDivID");
    divName1.appendChild(x);
    if (y.value.match(uPatn)) {
        x.setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
        divName1.setAttribute("class", " col-xs-10 row has-success has-feedback");
    } else {
        divName1.setAttribute("class", " col-xs-10 row has-error has-feedback");
        x.setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
    }
}

function fnPwd() {
    h = document.getElementById("pwd");
    pwdName = document.getElementById("pwdDivID");
    pwdName.appendChild(x1);
    if (h.value.match(pPatn) && h.value.length > 6) {
        x1.setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
        pwdName.setAttribute("class", " col-xs-10 row has-success has-feedback");
    } else {
        pwdName.setAttribute("class", " col-xs-10 row has-error has-feedback");
        x1.setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
    }
}

function fnAmount() {
    z = document.getElementById("amount");
    amtDiv = document.getElementById("amtDivID");
    if (z.value.match(pPatn)) {
        amtDiv.setAttribute("class", " input-group col-xs-10 row has-success has-feedback");
    } else {
        amtDiv.setAttribute("class", " input-group col-xs-10 row has-error has-feedback");
    }
}

function validateForm() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("fname", y.value);
        localStorage.setItem("Amount", z.value);
    } else {
        console.log("storage is not supporting");
    }
    console.log("Name:" + localStorage.getItem("fname") + "<br>" + "Amount:" + localStorage.Amount + ".00");
    var div = document.getElementById("contentID")
    div.innerHTML = "Name:" + localStorage.getItem("fname") + "<br>" + "Amount:" + localStorage.Amount + ".00";
}