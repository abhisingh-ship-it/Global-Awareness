const questions=[
{q:"Which gas is the largest contributor to human-caused long-term warming?",a:["Carbon dioxide (CO₂)","Oxygen (O₂)","Nitrogen (N₂)","Helium (He)"],c:0},
{q:"Which activity is a major source of human-caused carbon dioxide emissions?",a:["Burning fossil fuels","Planting forests","Using solar panels","Recycling paper"],c:0},
{q:"Which is a greenhouse gas?",a:["Methane (CH₄)","Argon (Ar)","Neon (Ne)","Hydrogen (H₂)"],c:0},
{q:"What is one important effect of global warming?",a:["Sea-level rise","More polar ice everywhere","Permanent global cooling","Less heat in oceans"],c:0},
{q:"Which action can help reduce greenhouse-gas emissions?",a:["Improving energy efficiency","Leaving lights on","Burning more coal","Increasing food waste"],c:0},
{q:"Why are forests important for the climate?",a:["They absorb and store carbon","They create fossil fuels","They stop all storms","They eliminate all greenhouse gases"],c:0},
{q:"Which energy source is renewable?",a:["Solar energy","Coal","Petroleum","Natural gas"],c:0},
{q:"What does climate mitigation mean?",a:["Reducing or preventing greenhouse-gas emissions","Moving every city inland","Predicting tomorrow's weather","Increasing fossil-fuel use"],c:0},
{q:"Which sector can produce methane emissions?",a:["Agriculture and livestock","Solar power generation","Wind turbines","LED lighting"],c:0},
{q:"Why does individual and collective action matter?",a:["Many actions together can reduce emissions and climate risks","One person can instantly stop warming","Only weather changes matter","Climate solutions have no effect"],c:0}
];
let index=0,score=0,selected=null;
const qEl=document.querySelector("#question"), aEl=document.querySelector("#answers"), pEl=document.querySelector("#quiz-progress"), next=document.querySelector("#next"), result=document.querySelector("#result");
function render(){
 selected=null;next.disabled=true;
 const item=questions[index]; pEl.textContent=`QUESTION ${index+1} OF ${questions.length}`;
 qEl.textContent=item.q;aEl.innerHTML="";
 item.a.forEach((text,i)=>{const b=document.createElement("button");b.className="answer";b.textContent=text;b.onclick=()=>choose(i,b);aEl.appendChild(b)});
 next.textContent=index===questions.length-1?"See my result →":"Next question →";
}
function choose(i,b){
 if(selected!==null)return; selected=i;
 document.querySelectorAll(".answer").forEach(x=>x.disabled=true);
 b.classList.add(i===questions[index].c?"correct":"wrong");
 if(i!==questions[index].c)document.querySelectorAll(".answer")[questions[index].c].classList.add("correct");
 if(i===questions[index].c)score++;
 next.disabled=false;
}
next.onclick=()=>{
 if(index<questions.length-1){index++;render();window.scrollTo({top:document.querySelector("#quiz").offsetTop-80,behavior:"smooth"})}
 else{document.querySelector(".quiz-box").innerHTML=`<div class="result"><p class="eyebrow">QUIZ COMPLETE</p><h2>You scored ${score}/${questions.length}</h2><p>${score>=8?"Excellent work! You have a strong understanding of climate basics.":score>=5?"Good effort! Keep learning and sharing reliable climate information.":"Keep exploring! Understanding the basics is a great first step toward action."}</p><button class="btn btn-primary" onclick="location.reload()">Try again ↻</button></div>`}
};
document.querySelector(".menu-btn").onclick=()=>document.querySelector(".nav-links").classList.toggle("open");
render();
