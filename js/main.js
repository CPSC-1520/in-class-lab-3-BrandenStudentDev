// Enter your code below.
const jsResources = document.querySelector(".javascript-resources");
const showResources = document.querySelector("#show-resources");

showResources.addEventListener('click',(event)=>{
    jsResources.classList.remove("d-none");
});

jsResources.addEventListener('mouseover',(event)=>{
    event.target.classList.add("fw-bold");
});

jsResources.addEventListener('mouseout',(event)=>{
    event.target.classList.remove("fw-bold");
});

jsResources.addEventListener('click',(event)=>{
    event.target.classList.add("fst-italic");
});