base_URL="https://v6.exchangerate-api.com/v6/1e6c7e5009e4a34b1858d238/pair";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const amount=document.querySelector(".amount input");
const msg=document.querySelector(".msg");




for (let select of dropdowns){
   for(currCode in countryList){
    let newOption=document.createElement("Option");
    newOption.innerText=currCode;
    newOption.value=currCode;
    select.append(newOption);
    if (select.name==="from" && currCode==="USD")
    {
      newOption.selected="selected";
    }
    else if(select.name==="to" && currCode==="INR")
    {
        newOption.selected="selected";
    }
   }
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
})   
}

const updateExchangeRate = async()=>{
  let amount=document.querySelector(".amount input");
  let amountVal=amount.value;
  if(amountVal===""||amountVal<1)
  {
   amountVal=1;
   amount.value="1";
  }
  const URL=`${base_URL}/${fromCurr.value}/${toCurr.value}`;
  let response=await fetch(URL);
  let data=await response.json();
  let rate=data.conversion_rate;
  let finalAmount=rate*amount.value;
  msg.innerText=`${amount.value} ${fromCurr.value} is ${finalAmount} ${toCurr.value}`;
}
const updateFlag=(element)=>{
  let currCode=element.value;
  let countryCode=countryList[currCode];
  let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
  let img=element.parentElement.querySelector("img");
  img.src=newSrc;
}


btn.addEventListener("click",(evt)=>{
   evt.preventDefault();
   updateExchangeRate();
})
window.addEventListener("load",()=>{
  updateExchangeRate();
})