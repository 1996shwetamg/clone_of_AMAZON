let key=document.getElementById("submit");
let arr = [1234,1254,2563,2589]
let count = 0
let x = 0
let otp = document.getElementById("otp")

key.addEventListener("click",()=>{
    let value = otp.value
   

    
    
    if(value == arr[2]){
        alert(`YOUR PAYMENT HAS BEEN SUCESSFUL`);
        window.location = "./happyshopping.html"
        window.location.assign(happyshopping.html)
    }
    else{
        alert("PLEASE ENTER CORRECT OTP")
    }
    x++

})

document.getElementById("btn").addEventListener("click",()=>{
    alert(`YOUR OTP IS ${arr[2]} `)
    count++
})

