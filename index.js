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

function about_me_height(){
    const content_hei = innerHeight;
    document.querySelector("#about-me").style.height =
    content_hei+"px"
}
function content_height(){
    const content_hei = innerHeight;
    document.querySelector("#content").style.height =
    content_hei+"px"
}
function skill_height(){
    const content_hei = innerHeight;
    document.querySelector("#skill").style.height =
    content_hei+"px"
}
function project_height(){
    const content_hei = innerHeight;
    document.querySelector("#project",).style.height =
    content_hei+"px"
}
about_me_height();
content_height();
skill_height();
project_height();
