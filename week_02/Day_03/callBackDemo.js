/////////Calculator Function//////////////
//create four function : add ,substract ,Multiply,Divide
const add =(num1,num2)=>num1+num2
const substract=(num1,num2)=>num1-num2
const multiply=(num1,num2)=>num1*num2
const divide =(num1,num2)=> num1/num2

////checking to see if input is coercible to a number
const calculator =(num1,num2,cb)=>{
if (+num1&& +num2) {
    num1 = Number(num1)
    num2 = +num2
    return cb(num1,num2)
   
}else{
    console.log("Please provide a number only");
}
}

console.log(calculator(10,5,divide));


///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]


//

const applyPercentDiscount=(product,discount)=>{
    product.displayPrice=product.basePrice*(1-discount)
}

const applyFlatDiscount =(product,discount)=>{
    product.displayPrice= product.basePrice-1
}

////higher-order method that allows us to write a loop once and apply discounts
const applyDiscount=(arr,cb,discount)=>{
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i],discount)
        
        
    } 
    }

//applyDiscount(dogProducts,applyFlatDiscount,1)
//applyDiscount(catProducts,applyPercentDiscount,.20)

const discountByCategory = (arr,cb,discount,catagory)=>{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].catagory===catagory) {
            cb(arr[i],discount)
            
        }
        
        
    }

}

discountByCategory(dogProducts,applyFlatDiscount,2,1)
discountByCategory(catProducts,applyPercentDiscount,.10,2)
console.log(dogProducts)
console.log(catProducts)


const applyDiscountByInventory = (arr,cb,discount,amount) => {
    for(let i =0;i < arr.length;i++){
      if(arr[i].inventory < amount){
        cb(arr[i],discount)
      }
    }
  }