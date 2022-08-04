import {showInfo} from "./showInfo.js";
import {showFriends} from "./showInfo.js";
import {add2Favorites} from "./saveAct.js";
import {setFilterDate} from "./filterMenu.js";
import {removeFavorites} from "./deleteAct.js";

export function contentMain(){
    const serachBar= document.getElementById("search")
    const mainPage = document.getElementById('content-main');
    let content = ""
    if (serachBar.value.length<3) {
         content=renderMainPage(acts,mainPage,serachBar)
        
    }
}
function renderMainPage(acts2Display,mainPage,serachBar) {
    // Generating content based on the template
    const actsSorted = acts2Display.sort(function(a,b){return a.start-b.start})
    const template = `<div class="act">
        <div class="actName">
            <h3>ACT_NAME</h3>
        </div>
        <article>
            <div class="actData">
                <ul>
                <li>TYPE</li>
                <li><span>FROM</span> - <span>TO</span> @ <span>WHERE</span></li>
                </ul>
            </div>

            <div class="actButtons">
                <button class="round-btn" id="info_ID" data-id="ID">info</button>
                <button class="round-btn" id="save_ID" data-id="ID">save</button>
                <button class="round-btn"><a href='MFW_LINK'>MFW</a></button>
                <button class="round-btn" id="friends_ID" data-friendsCount=FRIENDS data-friendsList=FLIST>FRIENDS</button>
            </div>
        </article>
    </div>`;
    let content = '';
    for (let i = 0; i < actsSorted.length; i++) {
        if (actsSorted[i].start>=localStorage.startTime && actsSorted[i].start<=localStorage.endTime) {
            let friendsCount=0
            let friendsList = ""
            for (const friend of JSON.parse(localStorage.friends)) {
                //console.log("friend",friend)
                for (const favorites of friend.favorites) {
                    if (favorites == i) {
                        friendsCount=friendsCount+1
                        friendsList += (friend.friendName+", ")
                        console.log("friendslist",friendsList)
                    }                
                }
            }
            let entry = template.replace(/POS/g, (i + 1))
                .replace(/ACT_NAME/g, actsSorted[i].name)
                .replace(/TYPE/g, actsSorted[i].style)
                .replace(/MFW_LINK/g, actsSorted[i].mfwLink)
                .replace(/FROM/g, moment.unix(actsSorted[i].start).format("HH:mm"))
                .replace(/TO/g, moment.unix(actsSorted[i].end).format("HH:mm"))
                .replace(/WHERE/g, stages[actsSorted[i].location-1].name)
                .replace(/ID/g, actsSorted[i].id)
                .replace(/FRIENDS/g, friendsCount)
                .replace(/FLIST/g, friendsList);
                
                
            entry = entry.replace('<a href=\'http:///\'></a>', '-');
            content += entry;
            mainPage.innerHTML=content;
            
        }
    
    }
    for (let i = 0; i < acts.length; i++) {
        const infoButton = document.getElementById(`info_${acts[i].id}`)
        if (infoButton) {
            infoButton.addEventListener("click",()=>{
                showInfo(acts[i].id)
            })  
        }
        const saveButton= document.getElementById(`save_${acts[i].id}`)
            if(saveButton){
                saveButton.addEventListener("click",()=>{
                    add2Favorites(acts[i].id)
                    saveButton.classList.add("selected")
                })          
            }
        const friendsButton= document.getElementById(`friends_${acts[i].id}`)
            if(friendsButton && friendsButton.dataset.friendscount=="0"){
                friendsButton.remove()
            }
            if (friendsButton && friendsButton.dataset.friendscount !="0") {
            friendsButton.addEventListener('click',()=>{
                showFriends(friendsButton)
                 })
            }        
    }
    serachBar.addEventListener('keyup',()=>{
        const res= search(serachBar.value,acts.sort(function(a,b){return a.start-b.start}))
        console.log(res)
    })

    setFilterDate()
}

        
    function search(term,acts){
        //console.log(term)
        
        if(term.length<3) {
            let matches2=[]
            return matches2
        }
        let matches = acts.filter((act)=>{
            const regex = new RegExp(`${term}`,`gi`)
            if (act.name){
                //console.log(airport.iata)
                return act.name.match(regex) || act.style.match(regex)
    
            }
        })
        
        if(matches.length>0){
            for (const actFound of matches) {
                //console.log(actFound)
            }
            
    
        }
        return matches
    
    }
    
    
    