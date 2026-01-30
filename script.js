const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let dropdowns=document.querySelectorAll(".select-box select")


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
        updatef(evt,target);
    });
}

const updatef=(element)=>{
    console.log(element);
}