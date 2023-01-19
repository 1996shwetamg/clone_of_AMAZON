let divthird = document.getElementById("div3")


let divThreeImgArr = ["https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Halos/WA_ACS_1st-Gif-tILE_Category._CB615557690_.gif","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategory/newset/Premium-kurtas._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategorypage/Womens_jacket__coats._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategorypage/Festive_saree._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategorypage/Women_Swearer._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategorypage/Trendy_dress._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategory/SDNewww/Party-wear-kurtas._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategorypage/Kurta__Salwar_Suit._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategorypage/Premium_Lingerie._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategorypage/Denim._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategorypage/Everyday_Kurtas._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/SDNew/Kurtas_and_Salwar_Suit_Sets-edited._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategorypage/Everyday_Sarees._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/SareeBBD/MFA_Dresses--Tops._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategorypage/Winterwear._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategory/newset/Explore-more-tile-20-trendy-kurtas._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/Stealdealscategorypage/Lingerie_and_Sleepwear._SS400_QL85_.jpg","https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/JANART23/SDNew/Explore-more-tile._SS400_QL85_.jpg"]


redercard()
function redercard(){

  
let cardlist = `${divThreeImgArr.map(item =>creatediv(item))}`
divthird.innerHTML = cardlist

}

function creatediv(img){
    let card = `<pre class="inerdiv3"><img src=${img} alt="error"></pre>`
    return card
    console.log(card);
}