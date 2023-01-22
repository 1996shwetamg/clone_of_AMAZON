window.addEventListener("load",()=>{
    display()
})

let shoes=document.getElementById("shoes")
let acc=document.getElementById("acc")
let mans=document.getElementById("mans")
let womans=document.getElementById("womans")
let kids=document.getElementById("kids")
let allcloths=document.getElementById("allcloths")
let l_to_high=document.getElementById("l_to_high")
let thousands=document.getElementById("thousands")

let Data = []
let cartdata = JSON.parse(localStorage.getItem("cart"))||[]

 async function display(){
    await fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        Data = data
        console.log(Data)
        let arr=[]
        for(let item of data){
            let ans=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category,item.id)
        arr.push(ans)
        }
        document.getElementById("product_div").innerHTML=arr.join(" ")
    })

    let btn = document.querySelectorAll(".hover")
    for(let key of btn){
        key.addEventListener("click",(e)=>{
            let current = e.target.dataset.id
            for(let key of Data){
                if(key.id === current ){
                    let obj = {
                        category:key.Category,
                        description : key.Discription,
                        id : key.id,
                        image : key.Avtar,
                        price : key.Price,
                        quantity : 1,
                        title : key.Title
                    }
                    cartdata.push(obj)
                    console.log(obj)
                    localStorage.setItem("cart",JSON.stringify(cartdata))
                }
            }
        })
    }
}

function fetchdata(img,title,des,price,cate,id){
    let obj=`
    <div class="divnew">
        <img width="90%"  src=${img} alt="">
        <h3 class="color">${title}</h3>
        <p id="description">${des}</p>
        <h3 class="color">Rs.${price}</h3>
        <div>
        <button class="hover" data-id=${id}>Add to Cart</button>
        </div>
    </div>
    `
    return obj
}


shoes.addEventListener("click",shoesfun)
function shoesfun(){
   // document.getElementById("product_div").innerHTML="";
    fetch("https://6399861629930e2bb3d5abc9.mockapi.io/ShoesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        //console.log(data)
        let arr2=[]
        data.forEach(item => {
            let newans=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
            arr2.push(newans)
        });
        document.getElementById("product_div").innerHTML=arr2.join(" ")
    })
}

acc.addEventListener("click",accfun)
function accfun(){
   // document.getElementById("product_div").innerHTML="";
    fetch("https://639c1fe142e3ad692727c7a2.mockapi.io/Accesso")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        //console.log(data)
        let arr3=[]
        data.forEach(item => {
            let newans1=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
            arr3.push(newans1)
        });
        document.getElementById("product_div").innerHTML=arr3.join(" ")
    })
}
mans.addEventListener("click",mansfun)
function mansfun(){
    document.getElementById("product_div").innerHTML="";
    fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        let ans4=data.filter((val,index)=>{
            
            if(val.Category=="Mens"){
            
                return val
            }
        })
        console.log(ans4)
        let finalres=[]
        ans4.forEach(item => {
            let newans6=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
            finalres.push(newans6)
        });
    document.getElementById("product_div").innerHTML=finalres.join(" ")
    })
}
womans.addEventListener("click",womansfun)
function womansfun(){
    document.getElementById("product_div").innerHTML="";
    fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        let ans4=data.filter((val,index)=>{
            
            if(val.Category=="Womens"){
            
                return val
            }
        })
        console.log(ans4)
        let finalres=[]
        ans4.forEach(item => {
            let newans6=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
            finalres.push(newans6)
        });
    document.getElementById("product_div").innerHTML=finalres.join(" ")
    })
}
kids.addEventListener("click",kidssfun)
function kidssfun(){
    document.getElementById("product_div").innerHTML="";
    fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        let ans4=data.filter((val,index)=>{
            
            if(val.Category=="Kids"){
            
                return val
            }
        })
        console.log(ans4)
        let finalres=[]
        ans4.forEach(item => {
            let newans6=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
            finalres.push(newans6)
        });
    document.getElementById("product_div").innerHTML=finalres.join(" ")
    })
}
allcloths.addEventListener("click",allclothssfun)
function allclothssfun(){
    document.getElementById("product_div").innerHTML="";
    fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        //console.log(data)
        let arr=[]
        for(let item of data){
            let ans=fetchdata(item.Avtar,item.Title,item.Discription,item.Price,item.Category)
        arr.push(ans)
        }
        document.getElementById("product_div").innerHTML=arr.join(" ")
    })
}
l_to_high.addEventListener("click",assending)
function assending(){
    fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
       // console.log(data)
        let ans3=data.sort((a,b)=>{
            return a.Price-b.Price

        })
        //console.log(ans3)
        let arr=[]
        for(let item of ans3){
            let ans=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
        arr.push(ans)
        }
        document.getElementById("product_div").innerHTML=arr.join(" ")
    })
}
h_to_low.addEventListener("click",desending)
function desending(){
    fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
       // console.log(data)
        let ans3=data.sort((a,b)=>{
            return b.Price-a.Price

        })
        //console.log(ans3)
        let arr=[]
        for(let item of ans3){
            let ans=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
        arr.push(ans)
        }
        document.getElementById("product_div").innerHTML=arr.join(" ")
    })
}
thousands.addEventListener("click",under1000)
function under1000(){
    fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        let ans=data.filter((val,index)=>{
            if(val.Price<=1000){
                return val
            }
        })
        console.log(ans)
        let finalres=[]
        ans.forEach(item => {
            let newans6=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
            finalres.push(newans6)
        });
    document.getElementById("product_div").innerHTML=finalres.join(" ")
    })
}

let thousandstofive1=document.getElementById("thousandstofive")
thousandstofive1.addEventListener("click",thousandstofive2)
function thousandstofive2(){
    fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        let ans=data.filter((val,index)=>{
            if(val.Price>1000 && val.Price<=5000){
                return val
            }
        })
        let sortdata=ans.sort((a,b)=>{
            return a.Price-b.Price
        })
       // console.log(ans)
        let finalres=[]
        sortdata.forEach(item => {
            let newans6=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
            finalres.push(newans6)
        });
    document.getElementById("product_div").innerHTML=finalres.join(" ")
    })
}
let fivetoten=document.getElementById("fivetoten")
fivetoten.addEventListener("click",fivetoten2)
function fivetoten2(){
    fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        let ans=data.filter((val,index)=>{
            if(val.Price>5000 && val.Price<=10000){
                return val
            }
        })
        let sortdata=ans.sort((a,b)=>{
            return a.Price-b.Price
        })
       // console.log(ans)
        let finalres=[]
        sortdata.forEach(item => {
            let newans6=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
            finalres.push(newans6)
        });
    document.getElementById("product_div").innerHTML=finalres.join(" ")
    })
}
let tentotwenty=document.getElementById("tentotwenty")
tentotwenty.addEventListener("click",tentotwenty2)
function tentotwenty2(){
    fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        let ans=data.filter((val,index)=>{
            if(val.Price>10000 && val.Price<=20000){
                return val
            }
        })
        let sortdata=ans.sort((a,b)=>{
            return a.Price-b.Price
        })
       // console.log(ans)
        let finalres=[]
        sortdata.forEach(item => {
            let newans6=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
            finalres.push(newans6)
        });
    document.getElementById("product_div").innerHTML=finalres.join(" ")
    })
}
let abovetwenty=document.getElementById("abovetwenty")
abovetwenty.addEventListener("click",abovetwenty2)
function abovetwenty2(){
    fetch("https://6398b72e29930e2bb3bff0a7.mockapi.io/ClothesProd")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        let ans=data.filter((val,index)=>{
            if( val.Price>20000){
                return val
            }
        })
        let sortdata=ans.sort((a,b)=>{
        return a.Price-b.Price
        })
       // console.log(ans)
        let finalres=[]
        sortdata.forEach(item => {
            let newans6=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
            finalres.push(newans6)
        });
    document.getElementById("product_div").innerHTML=finalres.join(" ")
    })
}
let watches1=document.getElementById("watches")
watches1.addEventListener("click",watchfun1)
function watchfun1(){
   // document.getElementById("product_div").innerHTML="";
    fetch("https://639c1fe142e3ad692727c7a2.mockapi.io/Accesso")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        let ans=data.filter((val,index)=>{
            if(val.Category=="Watches"){
                return val
            }
        })
        let sortdata=ans.sort((a,b)=>{
            return a.Price-b.Price
        })
       // console.log(ans)
        let finalres=[]
        sortdata.forEach(item => {
            let newans6=fetchdata(item.Avtar,item.Title,item.Discription.substring(0,75),item.Price,item.Category)
            finalres.push(newans6)
        });
    document.getElementById("product_div").innerHTML=finalres.join(" ")
    })
}

//backtop

let backtop=document.querySelector(".backtop");
backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})

//cart

let total = document.getElementById("cartitems")

let cartdata1 = JSON.parse(localStorage.getItem("cart"))||[]

window.addEventListener("load",()=>{
    total.innerText = cartdata1.length
})