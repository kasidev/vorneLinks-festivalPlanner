export function showInfo(actID){
    const modal=document.getElementById("modal")
    document.getElementById("closeModal").addEventListener("click",()=>{
    modal.style.display = "none"})
    modal.style.display = "block"
    document.getElementById("infoModal").innerText= acts[actID].info

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
    //infoBar.style.display = "block"
    infoBar.innerText= infoMsg

}   