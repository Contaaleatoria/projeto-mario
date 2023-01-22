const botaoTrailer = document.querySelector(".botao-trailer"); 
const modal=document.querySelector(".modal");
const botaoFecharModal=document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo =video.src;
 
function alternarModal(){
    modal.classList.toggle("aberto");
}

console.log(botaoTrailer);


botaoTrailer.addEventListener("click", () =>{
    console.log("clicou no botao veja o trailer");

    alternarModal()
    video.setAttribute("src", linkDoVideo)
});





botaoFecharModal.addEventListener("click",() =>{
  alternarModal()
 video.setAttribute("src", "");

})





