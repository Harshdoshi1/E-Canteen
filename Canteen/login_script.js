document.getElementById("checkPass")
var setEye
function showPass(){
    var x = document.getElementById("checkPass");
		if (x.type === "password") {
			x.type = "text";
            // setEye = '<img id="eye" src="Images/eyeopen.png" height="10px" width="10px">'
            // document.getElementById("eye").innerHTML = setEye

		} else {
			x.type = "password";
            // setEye = '<img id="eye" src="Images/eyeclose.png" height="10px" width="10px">'
            // document.getElementById("eye").innerHTML = setEye
		}
}

var setEye = '<img id="eye" src="Images/eyeclose.png" height="10px" width="10px"> </br> '
document.getElementById("eye").innerHTML = setEye