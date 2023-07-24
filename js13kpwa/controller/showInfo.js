export function showInfo(actID){
    const modal=document.getElementById("modal")
    document.getElementById("closeModal").addEventListener("click",()=>{
    modal.style.display = "none"})
    modal.style.display = "block"
    for (const act of acts) {
        if (act.id == actID) {
            document.getElementById("infoModal").innerText= act.info
            if (act.hasOwnProperty('image')) {
                document.getElementById("actImage").src= act.image   
            }
                        
        }
      }
    


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