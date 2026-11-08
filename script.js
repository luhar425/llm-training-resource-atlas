"use strict";
const form=document.getElementById("budget-form");
function calculate(){
 if(!form.reportValidity())return;
 const get=id=>Number(document.getElementById(id).value);
 const h=get("hours"),g=get("gpus"),w=get("watts"),r=get("rate");
 if(![h,g,w,r].every(Number.isFinite)||h<=0||g<=0||w<=0||r<0)return;
 const f=(v,d=1)=>v.toLocaleString("en-US",{maximumFractionDigits:d,minimumFractionDigits:d});
 document.getElementById("budget-result").innerHTML=`<div><strong>${f(h/g/24)} days</strong>Elapsed-time equivalent</div><div><strong>${f(h*w/1e9,3)} GWh</strong>Device electricity scenario</div><div><strong>$${f(h*r,0)}</strong>Compute rental equivalent</div>`;
}
form.addEventListener("submit",e=>{e.preventDefault();calculate()});
form.addEventListener("reset",()=>setTimeout(calculate,0));calculate();
