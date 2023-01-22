
const swiper = new Swiper('.swiper', {
    autoplay:{
    delay:3000,
    disableOnInteraction:false,
    },
    loop: true,


    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    
});

let total = document.getElementById("cartitems")

let cartdata = JSON.parse(localStorage.getItem("cart"))||[]

window.addEventListener("load",()=>{
    total.innerText = cartdata.length
})


let leftbtn=document.querySelector(".l-btn");
let rightbtn=document.querySelector(".r-btn");
leftbtn.addEventListener("click",(event)=>{
    document.querySelector(".product-slide").scrollLeft-=1100;
    event.preventDefault();
    });
    
    rightbtn.addEventListener("click",(event)=>{
        document.querySelector(".product-slide").scrollLeft+=1100;
        event.preventDefault();
        });


let leftbtn1=document.querySelector(".btn-1b");
let rightbtn1=document.querySelector(".btn-1a");

    leftbtn1.addEventListener("click",(event)=>{
        document.querySelector(".product-slide-1").scrollLeft-=1100;
        event.preventDefault();
        });
        
        rightbtn1.addEventListener("click",(event)=>{
            document.querySelector(".product-slide-1").scrollLeft+=1100;
            event.preventDefault();
            });

            let leftbtn2=document.querySelector(".btn-2b");
            let rightbtn2=document.querySelector(".btn-2a");
            
                leftbtn2.addEventListener("click",(event)=>{
                    document.querySelector(".product-slide-2").scrollLeft-=1100;
                    event.preventDefault();
                    });
                    
                    rightbtn2.addEventListener("click",(event)=>{
                        document.querySelector(".product-slide-2").scrollLeft+=1100;
                        event.preventDefault();
                        });


            let leftbtn3=document.querySelector(".btn-3b");
            let rightbtn3=document.querySelector(".btn-3a");
            
                leftbtn3.addEventListener("click",(event)=>{
                    document.querySelector(".product-slide-3").scrollLeft-=1100;
                    event.preventDefault();
                    });
                    
                    rightbtn3.addEventListener("click",(event)=>{
                        document.querySelector(".product-slide-3").scrollLeft+=1100;
                        event.preventDefault();
                        });

let backtop=document.querySelector(".backtop");
backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})

let sidebar=document.querySelector(".sidebar");
let xmark=document.querySelector(".fa-xmark");
let black=document.querySelector(".black");
let sidebtn=document.querySelector(".second-1");

sidebtn.addEventListener("click",()=>{
sidebar.classList.add("active");
xmark.classList.add("active");
black.classList.add("active");
document.body.classList.add("stop-scroll");
})

xmark.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    xmark.classList.remove("active");
    black.classList.remove("active");
    })

    //sign in&lists

  let sign=document.querySelector(".ac");
  let triangle=document.querySelector(".triangle");
  let signin=document.querySelector(".hidden-sign");

  sign.addEventListener("click",()=>{
    console.log("ok")
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    triangle.classList.toggle("active");
  })
