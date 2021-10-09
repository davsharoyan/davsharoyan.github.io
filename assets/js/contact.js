// let popc=document.querySelector(".popular-content");
// window.addEventListener("scroll",()=>{
// 	if (scrollY>750) {
// 		popc.style=`opacity: 1;
// 		transition-duration: 0.6s;`
// 	}
// 	if (scrollY<750 || scrollY>1400) {
// 		popc.style=`opacity: 0;
// 		transition-duration: 0.6s;
// 		`
// 	}
// })

let span=document.querySelector(".span");
let ul=document.querySelector(".menu-mobile>ul");
span.addEventListener("click",()=>{
	
		span.classList.toggle("rotate");
		ul.classList.toggle("ul-display");

	
})
