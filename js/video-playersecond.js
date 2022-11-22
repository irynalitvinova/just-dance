
let vidsec = document.querySelector(".video2"); 

function playVid() { 

  vidsec.play();
} 

function pauseVid() { 

  vidsec.pause(); 
}




vidsec.addEventListener('click', playVid);

