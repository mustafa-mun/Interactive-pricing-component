const slider1 = document.getElementById('myRange');
const viewEl = document.getElementById('views');
const priceText = document.getElementById('price-text');
const slider2 = document.getElementById('myRange2');
const planText = document.getElementById('plan-text');

const prices = [8,12,16,24,36];
const yearlyPrices = prices.map(item=> (item*12) - (item*12)/100*25);


viewEl.innerHTML = '10K PAGEVIEWS' // Default values
priceText.innerHTML = '8.00$'
planText.innerHTML = '/month'

slider1.addEventListener('mousemove',function(){ // Desktop function
  
  let value = slider1.value;
  let value2 = slider2.value;
  
  let color = 'linear-gradient(90deg, hsl(174, 77%, 80%)'+ value + '%, rgb(214,214,214)' + value + '%)';
  slider1.style.background = color;

  changePlan(value,viewEl);
  if(value2 === "1"){
    changePlan(value,viewEl);
  } else{
    changePlanDiscount(value,viewEl)
  }
})
slider1.addEventListener('touchmove',function(){ // Mobile function
  let value = slider1.value;
  let value2 = slider2.value
  let color = 'linear-gradient(90deg, hsl(174, 77%, 80%)'+ value + '%, rgb(214,214,214)' + value + '%)';
  slider1.style.background = color;
  
  changePlan(value,viewEl);
  if(value2 === "1"){
    changePlan(value,viewEl);
  } else{
    changePlanDiscount(value,viewEl)
  }
})

slider2.addEventListener("click",function(){
  let value = slider1.value;
  let value2 = slider2.value;
  
  if(value2 === "1"){
    changePlan(value,viewEl);
  } else{
    changePlanDiscount(value,viewEl)
  }
})
slider2.addEventListener('touchmove', function(){
  let value = slider1.value;
  let value2 = slider2.value;
  
  if(value2 === "1"){
    changePlan(value,viewEl);
  } else{
    changePlanDiscount(value,viewEl)
  }
})



const changePlan = (val, element) =>{  // Reflect Prices

  if(val <= 20){
    element.innerHTML = '10K PAGEVIEWS'
    priceText.innerHTML = `$${prices[0]}.00`
    planText.innerHTML = '/ month'
  } else if(val <= 40){
    element.innerHTML = '50K PAGEVIEWS'
    priceText.innerHTML = `$${prices[1]}.00`
    planText.innerHTML = '/ month'
  } else if(val <= 60){
    element.innerHTML = '100K PAGEVIEWS'
    priceText.innerHTML = `$${prices[2]}.00`
    planText.innerHTML = '/ month'
  } else if(val <= 80){
    element.innerHTML = '500K PAGEVIEWS'
    priceText.innerHTML = `$${prices[3]}.00`
    planText.innerHTML = '/ month'
  } else{
    element.innerHTML = '1M PAGEVIEWS'
    priceText.innerHTML = `$${prices[4]}.00`
    planText.innerHTML = '/ month'
  }
}

const changePlanDiscount = (val, element) => { // Reflect Discounted Prices
  if(val <= 20){
    element.innerHTML = '10K PAGEVIEWS'
    priceText.innerHTML = `$${yearlyPrices[0]}.00`
    planText.innerHTML = '/ year'
  } else if(val <= 40){
    element.innerHTML = '50K PAGEVIEWS'
    priceText.innerHTML = `$${yearlyPrices[1]}.00`
    planText.innerHTML = '/ year'
  } else if(val <= 60){
    element.innerHTML = '100K PAGEVIEWS'
    priceText.innerHTML = `$${yearlyPrices[2]}.00`
    planText.innerHTML = '/ year'
  } else if(val <= 80){
    element.innerHTML = '500K PAGEVIEWS'
    priceText.innerHTML = `$${yearlyPrices[3]}.00`
    planText.innerHTML = '/ year'
  } else{
    element.innerHTML = '1M PAGEVIEWS'
    priceText.innerHTML = `$${yearlyPrices[4]}.00`
    planText.innerHTML = '/ year'
  }
}