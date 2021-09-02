function access(){
	let name=document.getElementById("name").value;
	let password=document.getElementById("pass").value;	
    if((name=="stud032" && password=="nambi")||(name=="S1/stud031" && password=="kemigisha")||(name=="stud033" && password=="kawooya")||(name=="stud034" && password=="geofrey")||(name=="stud035" && password=="blessing")){
	window.open("home.html");
	}else if(name=="holy" && password=="trinity"){
        window.open("home.html");
    }
	else{
    alert("Wrong Unique User ID and password combinations");
}
}
