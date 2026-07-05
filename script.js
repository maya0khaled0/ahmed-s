const pages = document.querySelectorAll(".page");

let currentPage = 0;

function nextPage() {

    pages[currentPage].classList.remove("active");

    currentPage++;

    if(currentPage >= pages.length){
        currentPage = pages.length - 1;
    }

    pages[currentPage].classList.add("active");

}

function showGift(){

    document.getElementById("finalMessage").style.display = "block";

    createHearts();

}

function createHearts(){

    for(let i=0;i<50;i++){

        let heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-20px";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        heart.style.transition="4s linear";

        heart.style.pointerEvents="none";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top="110vh";

            heart.style.opacity="0";

        },50);

        setTimeout(()=>{

            heart.remove();

        },4000);

    }

}