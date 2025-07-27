export function showInfo(actID){
    const modal=document.getElementById("modal")
    document.getElementById("closeModal").addEventListener("click",()=>{
    modal.style.display = "none"})
    modal.style.display = "block"
    for (const act of acts) {
        if (act.id == actID) {
            // Set act info
            document.getElementById("infoModal").innerText= act.info

            // Set image if available
            if (act.hasOwnProperty('image')) {
                document.getElementById("actImage").src= act.image   
            }

            // Add social buttons
            const socialContainer = document.getElementById("socialLinks");
            if (socialContainer) {
                socialContainer.innerHTML = renderSocialButtons(act);
            }                        
        }
      }
}

function renderSocialButtons(act) {
    let buttons = '';

    if (act.spotify) {
        buttons += `<a href="${act.spotify}" target="_blank" class="social-btn spotify">Spotify</a>`;
    }
    if (act.instagram) {
        buttons += `<a href="${act.instagram}" target="_blank" class="social-btn instagram">Instagram</a>`;
    }
    if (act.youtube) {
        buttons += `<a href="${act.youtube}" target="_blank" class="social-btn youtube">YouTube</a>`;
    }

    return buttons ? `<div class="social-buttons">${buttons}</div>` : '';
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
