let marks=45
let result=""

if (marks>=60) {
	result= "first div"
}else if(marks<60 && marks>=50){
	result="second div"
}else if (marks<50 && marks>=40) {
	result="third div"
}else{
	result="failed"
}
document.getElementById("result").innerHTML=result