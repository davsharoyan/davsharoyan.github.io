var counter=1;
var flag = true;
setInterval(()=>{
	document.getElementById('radio' + counter).checked=true;

	// counter++;
	// if (counter>4) {
	// 	counter=1;
	// }
	if (flag == true) {
		counter++;
	}
	if(flag == false){
		counter--;
	}
	if(counter==4){
		flag = false;
	}
	if(counter == 1){
		flag = true;
	}
	
},4000);     
console.log(121321)  	

let popc=document.querySelector(".popular-content");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (innerWidth>800) {
		if (scrollY>750) {
		popc.style=`opacity: 1;
		transition-duration: 0.6s;`
	}
		if (scrollY<750 || scrollY>1400) {
		popc.style=`opacity: 0;
		transition-duration: 0.6s;
		`
	}
	}
	if (innerWidth<800) {
		if (scrollY>700) {
		popc.style=`opacity: 1;
		transition-duration: 0.6s;`
	}
		if (scrollY<700 || scrollY>2400) {
		popc.style=`opacity: 0;
		transition-duration: 0.6s;
		`
	}
	}
	
})

let spec=document.querySelector(".spec-gallery");
window.addEventListener("scroll",()=>{
	if (scrollY>1450) {
		spec.style=`transform: translateY(0px);
		transition-duration: 1s;`
	}
	if (scrollY<1450) {
		spec.style=`transform: translateY(100px);
		transition-duration: 1s;`
	}
	if (scrollY>2100) {
		spec.style=`transform: translateY(-50px);
		transition-duration: 1s;`
	}
})

let span=document.querySelector(".span");
let ul=document.querySelector(".menu-mobile>ul");
span.addEventListener("click",()=>{
	
		span.classList.toggle("rotate");
		ul.classList.toggle("ul-display");

	
})
