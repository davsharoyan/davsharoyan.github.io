

let opera=document.querySelector(".opera");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (scrollY>200 || scrollY<850) {
		opera.style=`opacity: 1;
		transition-duration: 0.6s;`
	}
	if (scrollY<200 || scrollY>850) {
		opera.style=`opacity: 0;
		transition-duration: 0.6s;
		`
	}
})

let yerevan_p=document.querySelector(".yerevan-center-p");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (scrollY>700 || scrollY<1299) {
		yerevan_p.style=`opacity: 1;
		transform: translateX(0px);
		transition-duration: 0.8s;`
	}
	if (scrollY<700 || scrollY>1299) {
		yerevan_p.style=`opacity: 0;
		transform: translateX(-200px);
		transition-duration: 0.8s;
		`
	}
})

let yerevan_img=document.querySelector(".yerevan-center-img");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (scrollY>700 || scrollY<1299) {
		yerevan_img.style=`opacity: 1;
		transform: translateX(0px);
		transition-duration: 0.8s;`
	}
	if (scrollY<700 || scrollY>1299) {
		yerevan_img.style=`opacity: 0;
		transform: translateX(200px);
		transition-duration: 0.8s;
		`
	}
})

let kuala_lumpur=document.querySelector(".kuala-lumpur-title");
window.addEventListener("scroll",()=>{
	if (scrollY>1200 || scrollY<1900) {
		kuala_lumpur.style=`opacity: 1;
		transform: translateY(0px);
		transition-duration: 0.8s;`
	}
	if (scrollY<1200 || scrollY>1900) {
		kuala_lumpur.style=`opacity: 0;
		transform: translateY(300px);
		transition-duration: 0.8s;
		`
	}
})
let kuala_lumpur_img=document.querySelector(".kuala-lumpur-img");
window.addEventListener("scroll",()=>{
	if (scrollY>1350 || scrollY<2100) {
		kuala_lumpur_img.style=`opacity: 1;
		transition-duration: 0.8s;`
	}
	if (scrollY<1350 || scrollY>2100) {
		kuala_lumpur_img.style=`opacity: 0;
		transition-duration: 0.8s;
		`
	}
})

let kuala_lumpur_center_p=document.querySelector(".kuala-lumpur-center-p");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (scrollY>1900 || scrollY<2570) {
		kuala_lumpur_center_p.style=`opacity: 1;
		transform: translateX(0px);
		transition-duration: 0.8s;`
	}
	if (scrollY<1900 || scrollY>2570) {
		kuala_lumpur_center_p.style=`opacity: 0;
		transform: translateX(-200px);
		transition-duration: 0.8s;
		`
	}
})

let kuala_lumpur_center_img=document.querySelector(".kuala-lumpur-center-img");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (scrollY>1900 || scrollY<2570) {
		kuala_lumpur_center_img.style=`opacity: 1;
		transform: translateX(0px);
		transition-duration: 0.8s;`
	}
	if (scrollY<1900 || scrollY>2570) {
		kuala_lumpur_center_img.style=`opacity: 0;
		transform: translateX(200px);
		transition-duration: 0.8s;
		`
	}
})

let seoul_title=document.querySelector(".seoul-title");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (scrollY>2400 || scrollY<3200) {
		seoul_title.style=`opacity: 1;
		transform: translateY(0px);
		transition-duration: 1s;`
	}
	if (scrollY<2400 || scrollY>3200) {
		seoul_title.style=`opacity: 0;
		transform: translateY(300px);
		transition-duration: 1s;
		`
	}
})
let seoul_img=document.querySelector(".seoul-img");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (scrollY>2600 || scrollY<3500) {
		seoul_img.style=`opacity: 1;
		transition-duration: 0.6s;`
	}
	if (scrollY<2600 || scrollY>3500) {
		seoul_img.style=`opacity: 0;
		transition-duration: 0.6s;
		`
	}
})

let seoul_center_p=document.querySelector(".seoul-center-p");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (scrollY>3150 || scrollY<3800) {
		seoul_center_p.style=`opacity: 1;
		transform: translateX(0px);
		transition-duration: 0.8s;`
	}
	if (scrollY<3150 || scrollY>3800) {
		seoul_center_p.style=`opacity: 0;
		transform: translateX(-200px);
		transition-duration: 0.8s;
		`
	}
})

let seoul_center_img=document.querySelector(".seoul-center-img");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (scrollY>3150 || scrollY<3800) {
		seoul_center_img.style=`opacity: 1;
		transform: translateX(0px);
		transition-duration: 0.8s;`
	}
	if (scrollY<3150 || scrollY>3800) {
		seoul_center_img.style=`opacity: 0;
		transform: translateX(200px);
		transition-duration: 0.8s;
		`
	}
})

let span=document.querySelector(".span");
let ul=document.querySelector(".menu-mobile>ul");
span.addEventListener("click",()=>{
	
		span.classList.toggle("rotate");
		ul.classList.toggle("ul-display");

	
})