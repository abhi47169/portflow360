const data={
"CNU1025":{status:"Documentation Clearance",cargo:"Containerized Electronics",weight:"21.4 t",location:"Yard B · Stack 14",vessel:"MV Ocean Star",eta:"04 Oct · 14:30"},
"CNU1031":{status:"Yard Movement Pending",cargo:"Consumer Goods",weight:"18.2 t",location:"Yard A · Stack 08",vessel:"MV Gujarat Express",eta:"04 Oct · 16:00"},
"CNU1040":{status:"Gate Release Ready",cargo:"Auto Components",weight:"19.7 t",location:"Yard C · Stack 06",vessel:"MV Western Pearl",eta:"05 Oct · 10:15"}};
document.getElementById("track").addEventListener("submit",e=>{
e.preventDefault();let key=document.getElementById("cno").value.trim().toUpperCase(),x=data[key],r=document.getElementById("result");
if(!key){r.textContent="Enter a container number, e.g. CNU1025.";return}
if(!x){r.textContent=`No demo record found for "${key}". Try CNU1025, CNU1031 or CNU1040.`;return}
r.innerHTML=`<div class="rbox"><div class="rhead"><b>${key}</b><span class="status">${x.status}</span></div><div class="rgrid"><div><small>Cargo</small><b>${x.cargo}</b></div><div><small>Gross Weight</small><b>${x.weight}</b></div><div><small>Yard Location</small><b>${x.location}</b></div><div><small>Vessel / ETA</small><b>${x.vessel}<br>${x.eta}</b></div></div></div>`});
const vals=[2600,3100,2850,3350,3600,3140],days=["Mon","Tue","Wed","Thu","Fri","Sat"],max=Math.max(...vals);
document.getElementById("chart").innerHTML=vals.map((v,i)=>`<div class="chartcol"><div class="chartbar" style="height:${v/max*100}%"></div><small>${days[i]}</small></div>`).join("");
document.getElementById("heroBars").innerHTML=vals.map(v=>`<div style="height:${v/max*100}%"></div>`).join("");
document.getElementById("menu").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>document.getElementById("nav").classList.remove("open"));
document.getElementById("enquiry").addEventListener("submit",e=>{e.preventDefault();let n=new FormData(e.target).get("name");document.getElementById("msg").textContent=`Thank you, ${n}. Your enquiry has been recorded for this demo.`;e.target.reset()});
