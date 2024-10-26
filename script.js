//using js for amounts in billing

function billing() {
    let amounts = document.querySelectorAll(".item_price");
    let sum = 0;
    amounts.forEach(element => {
        let price = eval(element.innerText.slice(1,));
        sum = sum + price;
    });
    
    let twodeci = (num) => {return Math.floor(num*100)/100}
    
    let sub_total = document.querySelector(".Sub_total").children[1];
    sub_total.innerText ="$"+sum;
    
    let tax = document.querySelector(".Tax").children[1];
    tax.innerText = "$"+(twodeci( sum*0.24));
    
    let total = document.querySelector(".Total").children[1];
    total.innerText = "$"+twodeci(sum + (sum*0.24));
    
}
billing();

//to remove cart items
const cross_btns = document.querySelectorAll(".cross_btn");
cross_btns.forEach(element => {
    element.addEventListener("click",(e)=>{
        element.parentElement.remove();
        let removed_price = element.previousElementSibling.innerText;
        billing();
    })
});

let coupon_btn = document.querySelector(".coupon").children[1];
let coupon_input = document.querySelector(".coupon").children[0];
let coupon_code = undefined;
coupon_btn.addEventListener("click",e => {
    if (coupon_input.value!='') {
        coupon_code = coupon_input.value;
        console.log(coupon_code);
    }
    else{
        console.log("no coupon")
    }
});

//details filling
let inputs = document.querySelector("form").querySelectorAll("input");
let values = [];

let mydetails = {
    fullname : '',
    email : '',
    postal_code : '',
    country : ''
};

const continue_btn = document.querySelector("form").lastElementChild;
continue_btn.addEventListener("click",(e)=>{
    e.preventDefault(); //prevent page from reloding

    for (const element of inputs) {
        values.push(element.value);
    }
    Object.keys(mydetails).forEach((key,index)=>{
        mydetails[key] = values[index]; 
    });

    console.log(mydetails);

    let msg = "submitted";
    for (const key in mydetails) {
        if(mydetails[key]==''){
            msg = "missing input";
            break;
        }
    }
    console.log(msg);

})