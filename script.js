function copyCA(){
  const ca=document.getElementById("ca").innerText;
  navigator.clipboard.writeText(ca);
  alert("Contract copied!");
}

const faders=document.querySelectorAll('.fade');
const appearOnScroll=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('show');
  });
},{threshold:0.2});

faders.forEach(el=>appearOnScroll.observe(el));
