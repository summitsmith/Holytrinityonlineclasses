function access(){
	let name=document.getElementById("name").value;
	let password=document.getElementById("pass").value;	
    if((name=="S3/074" && password=="lilian")||(name=="S1/stud031" && password=="kemigisha")){
	window.open("home.html");
	}else if(name=="trinity" && password=="trinity"){
        window.open("home.html");
    }
	else{
    alert("Wrong Unique User ID and password combinations");
}
}
