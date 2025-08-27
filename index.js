console.log(document);

function getElement(id){
    const element = document.getElementById(id);
    return element;
}

//traversing 
const cartbtns =  document.getElementsByClassName("card-btn");
console.log(cartbtns);

for(let cartButton of cartbtns){
    cartButton.addEventListener("click",function(){
           
        const productTitle = cartButton.parentNode.childNodes[3].innerText;

        console.log(productTitle);

        const productPrice = cartButton.parentNode.childNodes[5].childNodes[0].innerText;

        console.log(productPrice);


        const totalPrice = getElement("total-price").innerText;

        const currentTotal= Number(productPrice) + Number(totalPrice);
        
        getElement("total-price").innerText=currentTotal;


        //cart-container k dor..
    const cartContainer = getElement("cart-container");



    //const div banao...

    const newCart = document.createElement("div");

    newCart.innerHTML=`
            <div class="bg-slate-300 flex justify-around w-[320px] p-4">
                <img src="./assets/kitchen-1.png" alt="">
                <div  class="mt-12">
                    <h2 class="font-bold">${productTitle}</h2>
                    <h2 class="">${productPrice}</h2>
                </div>
            </div>
    
    `;

    //cart-container e add kora

    cartContainer.append(newCart);

   const  quantity = getElement("total-quantity").innerText;

   const currentQuantity= Number(quantity)+1;

   getElement("total-quantity").innerText=currentQuantity;

});

}


document.getElementById("btn-clear").addEventListener("click",function(){
        const cartContainer = getElement("cart-container");
        cartContainer.innerHTML="";
        getElement("total-price").innerText=0;
        getElement("total-quantity").innerText=0;
});























































/*function getElement(id){
    const element = document.getElementById(id);
    return element;
}

document.getElementById("card-btn-1").addEventListener("click",function(){
     
    const title = getElement("card-title-1").innerText;
    const price = getElement("price-1").innerText;
    
    console.log(title,price);
    
    const totalPrice = getElement("total-price").innerText;
    const currentTotal = Number(totalPrice) + Number(price);
    

    console.log(currentTotal);

    getElement("total-price").innerText = currentTotal;

    //cart-container k dor..
    const cartContainer = getElement("cart-container");



    //const div banao...

    const newCart = document.createElement("div");

    newCart.innerHTML=`
            <div class="bg-slate-300 flex justify-around w-[320px] p-4">
                <img src="./assets/kitchen-1.png" alt="">
                <div  class="mt-12">
                    <h2 class="font-bold">${title}</h2>
                    <h2 class="">${price}</h2>
                </div>
            </div>
    
    `;

    //cart-container e add kora

    cartContainer.append(newCart);
});*/

























/*function removeSpace(str){
    return str.replaceAll(" ","").toUpperCase();
}

const titles = document.querySelectorAll(".card-title");
console.log(titles);


for(let title of titles){
    title.innerHTML=`<span class='text-pink-500'>${removeSpace(title.innerText)}</span>`;
}


const images = document.getElementsByTagName("img");
console.log(images);

for(let img of images){
    img.addEventListener("mouseenter",function(){
        img.src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTkZ56H8PEUECnmCcnTaG3XwEUK8k5vE-03Xi7xTXXYzr9zZf_S-kubVgmdHIbjqnUBotYs-gPx2MO4WMnmgN-SK0vY7R8kclx0DZlRr569";
    });
}*/

