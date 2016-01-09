var r, y, z, h, divName1, x, amtDiv, pwdName;
var uPatn = /^[a-zA-Z]+$/;
var pPatn = /^[0-9]+$/;
x = document.createElement("span");
x.setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
var x1 = document.createElement("span");
x1.setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");

function validateMyForm() {
    y = document.getElementById("name1");
    z = document.getElementById("amount");
    h = document.getElementById("pwd");
    divName1 = document.getElementById("nameDivID");
    divName1.classList.add("has-feedback");
    pwdName = document.getElementById("pwdDivID");
    amtDiv = document.getElementById("amtDivID")
    pwdName.classList.add("has-feedback");
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("fname", y.value);
        localStorage.setItem("Amount", z.value);
    } else {
        console.log("storage is not supporting");
    }
    console.log("Name:" + localStorage.getItem("fname") + "<br>" + "Amount:" + localStorage.Amount + ".00");
    var div = document.getElementById("contentID")
    div.innerHTML = "Name:" + localStorage.getItem("fname") + "<br>" + "Amount:" + localStorage.Amount + ".00";
    if (y.value.match(uPatn)) {
        if (divName1.getElementsByTagName('span').length > 0) {
            divName1.removeChild("span");
            divName1.classList.remove("has-error");
        } else {
            divName1.appendChild(x);
            divName1.classList.add("has-success");
        }
    } else {
        if (divName1.getElementsByTagName('span').length > 0) {
            divName1.removeChild("span");
            divName1.classList.remove("has-success");
        } else {
            divName1.appendChild(x1);
            divName1.classList.add("has-error");
        }
    }
    if (h.value.match(pPatn) && h.value.length > 6) {
        if (pwdName.getElementsByTagName('span').length > 0) {
            pwdName.removeChild("span");
            pwdName.classList.remove("has-error");
        } else {
            pwdName.appendChild(x);
            pwdName.classList.add("has-success");
        }
    } else {
        if (pwdName.getElementsByTagName('span').length > 0) {
            pwdName.removeChild("span");
            pwdName.classList.remove("has-success");
        } else {
            pwdName.appendChild(x1);
            pwdName.classList.add("has-error");
        }
    }
    if (z.value.match(pPatn)) {
        amtDiv.classList.add("has-success");
    } else {
        amtDiv.classList.add("has-error");
    }
}