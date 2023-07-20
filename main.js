//change navbar styles on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)   //whenever we scroll we will call this class window-scroll
 })
 
 //show/hide faq answer
 
 const faqs=document.querySelectorAll('.faq');
  //now loop thhrough each one of .faq class to add event listner
  faqs.forEach(faq=>{
     faq.addEventListener('click',()=>{
         faq.classList.toggle('open') ; //toggeling over class open on click
         //changing icon to - on click
         const icon=faq.querySelector('.faq_icon i');
         if(icon.className=='fa-solid fa-plus'){
             icon.className="fa-solid fa-minus";
         }
         else{
             icon.className="fa-solid fa-plus";
         }
     })
  })
 
  //show hide nav bar for tab sizes
 
 const menu=document.querySelector(".nav_menu");
 const menuBtn=document.querySelector("#open-menu-btn");
 const closeBtn=document.querySelector("#close-menu-btn");
 
 //open nove menu on clicking
 menuBtn.addEventListener('click',()=>{
     menu.style.display="flex";   //menu bar appears on click
     closeBtn.style.display="inline-block";  //cross appears
     menuBtn.style.display="none";
 })
 
 //close nav menu on clicking on cross
 
 const closeNav=()=>{
     menu.style.display="none";   //menu bar disappears on clicking cross
     closeBtn.style.display="none";  
     menuBtn.style.display="inline-block";
 
 }
 
 //adding event listener to close button
 closeBtn.addEventListener('click',closeNav)