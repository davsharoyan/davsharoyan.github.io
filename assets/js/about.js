
let iframe=document.querySelector("iframe");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (scrollY>30 || scrollY<1200) {
		iframe.style=`transform: translateY(0px);
		opacity: 1;
		transition-duration: 0.8s;`
	}
	if (scrollY<30 || scrollY>1200) {
		iframe.style=`transform: translateY(200px);
		opacity: 0;
		transition-duration: 0.8s;`
	}
})

let admin=document.querySelector(".admin");
window.addEventListener("scroll",()=>{
	console.log(scrollY)
	if (scrollY>750 || scrollY<1700) {
		admin.style=`transform: translateY(0px);
		opacity: 1;
		transition-duration: 0.8s;`
	}
	if (scrollY<750 || scrollY>1700) {
		admin.style=`transform: translateY(200px);
		opacity: 0;
		transition-duration: 0.8s;`
	}
})


let span=document.querySelector(".span");
let ul=document.querySelector(".menu-mobile>ul");
span.addEventListener("click",()=>{
	
		span.classList.toggle("rotate");
		ul.classList.toggle("ul-display");

	
})