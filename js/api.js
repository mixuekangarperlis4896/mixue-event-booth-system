async function saveToGoogleSheet(tab, payload){
  const res = await fetch(WEB_APP_URL,{method:"POST",body:JSON.stringify({tab,payload})});
  const result = await res.json();
  if(!result.success) throw new Error(result.message || "Google Sheet save failed");
  return result;
}

function $(id){return document.getElementById(id)}

function setToday(id){
  const el=$(id);
  if(el) el.valueAsDate=new Date();
}

function showStatus(message){
  const s=$("statusMsg");
  if(!s) return;
  s.style.display="block";
  s.innerHTML=message;
}

function copyText(text,msg){
  const fallback=()=>{
    const t=document.createElement("textarea");
    t.value=text;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  };

  if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(text)
      .then(()=>{showStatus(msg);alert(msg)})
      .catch(()=>{fallback();showStatus(msg);alert(msg)});
  }else{
    fallback();
    showStatus(msg);
    alert(msg);
  }
}

function getStaff(){
  return JSON.parse(localStorage.getItem("mixueCurrentStaff") || "null");
}

function requireLogin(){
  const staff=getStaff();
  if(!staff){
    location.href="index.html";
    return null;
  }
  return staff;
}

function normalizeRole(role){
  return (role || "").replace(/\s+/g,"").toLowerCase();
}

function canAccessModule(role, moduleName){
  const r = normalizeRole(role);

  if(r === "systemcontroller" || r === "admin") return true;

  if(r === "boss"){
    return moduleName === "home" || moduleName === "dashboard";
  }

  const normalStaffRoles = [
    "outletstaff",
    "partimerstaff",
    "outletcrew",
    "boothcrew",
    "runner",
    "packingcrew"
  ];

  if(normalStaffRoles.includes(r)){
    return (
      moduleName === "home" ||
      moduleName === "packing" ||
      moduleName === "runner" ||
      moduleName === "closing"
    );
  }

  return (
    moduleName === "home" ||
    moduleName === "packing" ||
    moduleName === "runner" ||
    moduleName === "closing"
  );
}

function nav(){
  const staff = getStaff();
  const role = staff ? staff.role : "";

  const links = [
    {module:"home", label:"Home", href:"index.html"},
    {module:"packing", label:"Packing", href:"packing-final.html"},
    {module:"runner", label:"Runner", href:"runner-final.html"},
    {module:"closing", label:"Closing", href:"closing-final.html"},
    {module:"dashboard", label:"Admin", href:"admin-final.html"}
  ];

  const visibleLinks = links
    .filter(link => canAccessModule(role, link.module))
    .map(link => `<a href="${link.href}">${link.label}</a>`)
    .join("");

  return `<div class="topbar">${visibleLinks}</div>`;
}
