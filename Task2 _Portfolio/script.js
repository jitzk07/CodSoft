const toggleinfo = () =>{
     let edubtn1=document.getElementById("edubtn");
     let aboutcontent=document.getElementById("aboutcontent");
    if(edubtn1.style.display=='none'){
        aboutcontent.style.display='none';
        edubtn1.style.display='block';
    }
    else{
        aboutcontent.style.display="block";
        edubtn1.style.display='none';
    }
}

let loader=document.getElementById("preloader");
let navbar=document.getElementById("navbar");
window.addEventListener("load",function(){
    loader.style.display="none";
    navbar.style.display="block";    
});

const navigationHeight=document.querySelector('.primary-navigation').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationHeight+"px")
