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

    if (act.spotify && act.spotify.trim() !== "") {
        buttons += `
        <a href="${act.spotify}" target="_blank" class="social-btn spotify">
            ${spotifyIcon()} Spotify
        </a>`;
    }
    if (act.instagram && act.instagram.trim() !== "") {
        buttons += `
        <a href="${act.instagram}" target="_blank" class="social-btn instagram">
            ${instagramIcon()} Instagram
        </a>`;
    }
    if (act.youtube && act.youtube.trim() !== "") {
        buttons += `
        <a href="${act.youtube}" target="_blank" class="social-btn youtube">
            ${youtubeIcon()} YouTube
        </a>`;
    }

    return buttons ? `<div class="social-buttons">${buttons}</div>` : '<p>No social links available</p>';
}


// Inline SVG icons for offline use
function spotifyIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12zm5.508 17.432a.798.798 0 0 1-1.097.27c-3.008-1.837-6.785-2.252-11.221-1.231a.798.798 0 1 1-.354-1.558c4.835-1.098 9.029-.614 12.42 1.446a.797.797 0 0 1 .252 1.073zm1.557-3.467a1.003 1.003 0 0 1-1.379.338c-3.448-2.116-8.705-2.732-12.784-1.493a1.002 1.002 0 1 1-.584-1.92c4.595-1.4 10.329-.715 14.289 1.732a1.003 1.003 0 0 1 .458 1.343zm.363-3.734a1.202 1.202 0 0 1-1.652.422c-3.918-2.33-10.57-2.55-14.42-1.394a1.202 1.202 0 1 1-.68-2.308c4.38-1.292 11.754-1.03 16.225 1.678a1.202 1.202 0 0 1 .527 1.602z"/>
    </svg>`;
}

function instagramIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
        <path fill="white" d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
    </svg>`;
}

function youtubeIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
        <path d="M19.615 3.184a3.5 3.5 0 0 1 2.474 2.474C22.5 7.865 22.5 12 22.5 12s0 4.135-.411 6.342a3.5 3.5 0 0 1-2.474 2.474C17.865 21.5 12 21.5 12 21.5s-5.865 0-7.842-.411a3.5 3.5 0 0 1-2.474-2.474C1.5 16.135 1.5 12 1.5 12s0-4.135.411-6.342a3.5 3.5 0 0 1 2.474-2.474C6.135 2.5 12 2.5 12 2.5s5.865 0 7.842.684zM10 15.5l6-3.5-6-3.5v7z"/>
    </svg>`;
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
