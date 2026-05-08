async function saveToGoogleSheet(tab, payload){
  const res = await fetch(WEB_APP_URL,{method:"POST",body:JSON.stringify({tab,payload})});
  const result = await res.json();
  if(!result.success) throw new Error(result.message || "Google Sheet save failed");
  return result;
}
function $(id){return document.getElementById(id)}
function setToday(id){const el=$(id); if(el) el.valueAsDate=new Date()}
function showStatus(message){
  const s=$("statusMsg"); if(!s) return;
  s.style.display="block"; s.innerHTML=message;
}
function copyText(text,msg){
  const fallback=()=>{const t=document.createElement("textarea");t.value=text;document.body.appendChild(t);t.select();document.execCommand("copy");document.body.removeChild(t)}
  if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(text).then(()=>{showStatus(msg);alert(msg)}).catch(()=>{fallback();showStatus(msg);alert(msg)})
  }else{fallback();showStatus(msg);alert(msg)}
}
function getStaff(){
  return JSON.parse(localStorage.getItem("mixueCurrentStaff") || "null");
}
function requireLogin(){
  const staff=getStaff();
  if(!staff){ location.href="index.html"; return null; }
  return staff;
}
function nav(){
  return `<div class="topbar">
    <a href="index.html">Home</a><a href="packing-final.html">Packing</a>
    <a href="runner-final.html">Runner</a><a href="closing-final.html">Closing</a>
    <a href="admin-final.html">Admin</a>
  </div>`;
}
