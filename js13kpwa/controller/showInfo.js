export function showInfo(actID){
    const modal=document.getElementById("modal")
    document.getElementById("closeModal").addEventListener("click",()=>{
    modal.style.display = "none"})
    modal.style.display = "block"
    document.getElementById("infoModal").innerText= acts[actID-1].info
    document.getElementById("actImage").src= acts[actID-1].image


}
export function showFriends(friendsButton){
    const modal=document.getElementById("modal")
    document.getElementById("closeModal").addEventListener("click",()=>{
    modal.style.display = "none"})
    modal.style.display = "block"
    document.getElementById("infoModal").innerText= friendsButton.dataset.friendslist

}   
export function statusInfo(infoMsg){
    const infoBar= document.getElementById("statusInfo")
    infoBar.innerText= infoMsg
    infoBar.classList.add("ani")
    setTimeout(() => {
        infoBar.classList.remove("ani")
    }, 5000);

}   