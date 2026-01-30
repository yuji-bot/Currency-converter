const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
let dropdowns=document.querySelectorAll(".selectdiv select")
const button=document.querySelector(".btn");
let fromcrr=document.querySelector(".from select");
let tocrr=document.querySelector(".to select");


for(let select of dropdowns){
    for(let curr in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=curr;
        newOption.value=curr;
        if(select.name==="from" && curr==="USD"){
            newOption.selected="selected";
        }else if(select.name==="to" && curr==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updatef(evt.target);
    });
}

const updatef=(element)=>{
    currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
}

button.addEventListener("click", async (e) => {
  e.preventDefault();

  let from = fromcrr.value.toLowerCase();
  let to = tocrr.value.toLowerCase();

  try {
    const response = await fetch(`${BASE_URL}${from}.json`);

    if (!response.ok) {
      throw new Error("API Error");
    }

    const data = await response.json();

    let rate = data[from][to];
    console.log(rate);

  } catch (error) {
    console.error("Fetch failed:", error);
  }

    // console.log(finalAmount);
    // document.querySelector(".rate").innerText =`${amtval} ${fromcrr.value} = ${finalAmount.toFixed(2)} ${tocrr.value}`;

});
