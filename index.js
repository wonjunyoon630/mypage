const header = document.querySelector("#header");
const headertopoffset =header.offsetTop

window.addEventListener("scroll", e=>{
    if(window.pageYOffset >= headertopoffset ) {
        header.style.position="fixed";
        header.style.top=0;
        header.style.left=0;
        header.style.right=0;
    }
    else{
        header.style.position='';
        header.style.top='';
    }
})
