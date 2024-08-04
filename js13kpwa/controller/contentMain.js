import {showInfo} from "./showInfo.js";
import {showFriends} from "./showInfo.js";
import {add2Favorites} from "./saveAct.js";
import {setFilterDate} from "./filterMenu.js";
import {removeFavorites} from "./deleteAct.js";

export function contentMain(){
    const serachBar= document.getElementById("search")
    const mainPage = document.getElementById('content-main');
    localStorage.searching = "inactive"
    serachBar.addEventListener('keyup',()=>{
        const searchRes= search(serachBar.value,acts.sort(function(a,b){return a.start-b.start}))
        if (searchRes.length>0) {
            
            localStorage.searching="active"
            renderMainPage(searchRes,mainPage)       
        }
    })
    if (localStorage.searching == "inactive") {
        renderMainPage(acts,mainPage)
    }
    
}
function renderMainPage(acts2Display,mainPage) {
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
                <li><strong>DATE</strong> <span>FROM</span> @ <span>WHERE</span></li>
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
        console.log(actsSorted[i].start>=localStorage.startTime && actsSorted[i].start<=localStorage.endTime)
        console.log(moment.unix(actsSorted[i].start).format("DD MMM YYYY HH:mm"))
        console.log(actsSorted[i].start)
        console.log(actsSorted[i])
        if (actsSorted[i].start>=localStorage.startTime && actsSorted[i].start<=localStorage.endTime ||
            localStorage.searching == "active") {
            let friendsCount=0
            let friendsList = ""
            for (const friend of JSON.parse(localStorage.friends)) {
                //console.log("friend",friend)
                for (const favorites of friend.favorites) {
                    if (favorites == i) {
                        friendsCount=friendsCount+1
                        friendsList += (friend.friendName+", ")
                    }                
                }
            }
            if (localStorage.searching == "inactive") {

                let entryNorm = template.replace(/POS/g, (i + 1))
                .replace(/ACT_NAME/g, actsSorted[i].name)
                .replace(/TYPE/g, actsSorted[i].style)
                .replace(/MFW_LINK/g, actsSorted[i].mfwLink)
                .replace(/FROM/g, moment.unix(actsSorted[i].start).format("HH:mm"))
                .replace(/WHERE/g, stages[actsSorted[i].location-1].name)
                .replace(/ID/g, actsSorted[i].id)
                .replace(/FRIENDS/g, friendsCount)
                .replace(/FLIST/g, friendsList)
                .replace(/DATE/g, "");
                entryNorm = entryNorm.replace('<a href=\'http:///\'></a>', '-');
                content += entryNorm;
                mainPage.innerHTML=content;
            }
            else{
                let dateString =""
                switch (parseInt(moment.unix(actsSorted[i].start).format("D"))) {
                    case 7:
                        dateString="MITTWUCH 7. "    
                        break;
                    case 8:
                        dateString="DUNSTIG 8. "    
                        break;
                    case 9:
                        dateString="FRITIK 09. "    
                        break;
                    case 10:
                        dateString="SAMSTIG 10. "    
                        break;
                    case 11:
                        dateString="SUNNTIG 11. "    
                        break;
                    case 12:
                        dateString="MENTIG 12. "    
                        break;
                    case 13:
                        dateString="TSISCHTIG 13. "    
                        break;
                    case 14:
                        dateString="MITTWUCH 14. "    
                        break;
                    case 15:
                        dateString="DUNSTIG 15. "    
                        break;
                    case 16:
                        dateString="FRITIK 16. "    
                        break;
                    case 17:
                        dateString="SAMSTIG 17. "    
                        break;
                    case 18:
                        dateString="SUNNTIG 18. "    
                        break;
                
                    default:
                        dateString="oOOops "
                        break;
                }
                let entrySearch = template.replace(/POS/g, (i + 1))
                .replace(/ACT_NAME/g, actsSorted[i].name)
                .replace(/TYPE/g, actsSorted[i].style)
                .replace(/MFW_LINK/g, actsSorted[i].mfwLink)
                .replace(/FROM/g, moment.unix(actsSorted[i].start).format("HH:mm"))
                .replace(/WHERE/g, stages[actsSorted[i].location-1].name)
                .replace(/ID/g, actsSorted[i].id)
                .replace(/FRIENDS/g, friendsCount)
                .replace(/FLIST/g, friendsList)
                .replace(/DATE/g, dateString);
                entrySearch = entrySearch.replace('<a href=\'http:///\'></a>', '-');
                content += entrySearch;
                mainPage.innerHTML=content;

            }
            
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
                for (const favoriteIndex of JSON.parse(localStorage.favorites).list) {
                    if (favoriteIndex == acts[i].id) {
                        saveButton.classList.add("selected")
                    }
                }
                saveButton.addEventListener("click",()=>{
                    saveButton.classList.add("selected")
                    add2Favorites(acts[i].id)
                 
                    
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
    
    
    