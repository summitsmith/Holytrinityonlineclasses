function access(){
	let name=document.getElementById("name").value;
	let password=document.getElementById("pass").value;	
    if((name=="stud032" && password=="lilian")){
	window.open("home.html");
	}else if(name=="trin" && password=="holy5"){
        window.open("home.html");
    }
	else{
    alert("Wrong Unique User ID and password combinations");
}
}
