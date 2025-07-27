import {showInfo} from "./showInfo.js";
import {statusInfo} from "./showInfo.js";
import {removeFavorites} from "./deleteAct.js";

export function contentFav(){  
    const quotes=[
        "Die Kritik der Macht ist das Fundament der Demokratie."
        ,"..."
        ,"Manchmal ist das Leben so schön, dass ich in alle Richtung davonrennen will und gleichzeitig mitten hinein."
        ,"..."
        ,"Mike Tyson, der Boxer, hat einmal gesagt: «Jeder hat einen Plan, bis er eins auf die Fresse bekommt.» "
        ,"..."
        ,"Wo es glitzert und der Exzess lebt, da ist meist auch Schatten zu finden, Heike Makatsch 2023"
        ,"..."
        ,"Ich kann meine Zufriedenheit nicht delegieren, sondern bin selber dafür verantwortlich"
        ,"..."
        ,"Man wird merken, dass das Reisen eine hohe Wertigkeit für die persönliche Zufriedenheit, die eigene Entwicklung und für das Verständnis des Planeten und fremde Kulturen haben kann.... ,Andre Lüthi, Globetrotter Chef, Sonntagszeitung 11. Juni 2023 "
        ,"..."
        ,"Jeder soll sein Leben auf seine beste Art führen, die für ihn möglich ist."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"..."
        ,"Wer sich auf die erotische Leidenschaft mit einer anderen Person einlässt, geht eigentlich das grösste denkbare Risiko ein: Es gibt jetzt nämlich etwas Schlimmeres als den eigenen Tod – den Tod der anderen Person."
        ,"Wer Sehen lernen will, muss die Wahrnehmung von seiner Erwartung befreien."
        ,"Wir treiben das System nicht mehr mit unseren Bedürfnissen an, sondern das System treibt uns an."
        ,"Take your passion and make it happen"
        ,"..."
        ,"Glückliche Menschen haben nicht dasBeste von allem, glückliche Menschen machen das beste aus allem"
        ,"..."
        ,"Wir geraten hin uhd wieder in beschissene Situationen, die wir ertragen müssen. Keiner von uns hat die absolute Kontrolle über sein Umfeld."
        ,"..."
        ,"Liebe ist! Aus zwei Einzelnen ein Wir zu formen das seine Magie daraus bezieht dass jeder in dem Wir ein Ich bleiben darf."
        ,"..."
        ,"«In der Schweiz gibt es alles, aber nicht für alle.»"

    ]

    function getRandomQuote() {
        let min = 0;
        let max = Math.floor(quotes.length+1);
        let quoteIndex = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        return quotes[quoteIndex]

    }

    function getStageName(stageId) {
        const stage = stages.find(s => s.id === Number(stageId));
        return stage ? stage.name : "Unknown";
    }


    // Generating content based on the template
    const favoritesStored = JSON.parse(localStorage.getItem("favorites"))
    const actsSorted = acts.sort(function(a,b){return a.start-b.start})
    let favoritesFound = 0
    const template = `<div class="act">
        <div class="actName">
            <h4>ACT_NAME</h4>
        </div>
        <article>
            <div class="actData">
                <ul>
                <li>TYPE</li>
                <li><span>FROM</span> @ <span>WHERE</span></li>
                </ul>
            </div>

            <div class="actButtons">
                <button class="round-btn" id="info_ID" data-id="ID">info</button>
                
                <button class="round-btn delete act" id="remove_ID" data-id="ID" aria-label="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                        <path d="M3 6h18v2H3V6zm2 3h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9zm5 2v8h2v-8H10zm4 0v8h2v-8h-2zM9 4h6v2H9V4z"/>
                    </svg>
                </button>
                
                <button class="round-btn"><a href='MFW_LINK'>MFW</a></button>
            </div>
        </article>
    </div>`;
    const templateEmptyDay = `<div class="act">
        <div class="actName">
            <h4>ACT_NAME</h4>
        </div>
        <article>
            <div class="actData">
                <ul>
                <li>TITLE</li>
                <li>QUOTE</li>
                </ul>
            </div>

             <div class="actButtons">
             </div>
        </article>
    </div>`;

    let content = '';
    for (let i = 0; i < actsSorted.length; i++) {
    if (favoritesStored.list.includes(actsSorted[i].id)
        && actsSorted[i].start>=localStorage.startTime 
        && actsSorted[i].start<=localStorage.endTime) {
        let entry = template.replace(/POS/g, (i + 1))
        .replace(/ACT_NAME/g, actsSorted[i].name)
        .replace(/TYPE/g, actsSorted[i].style)
        .replace(/MFW_LINK/g, actsSorted[i].mfwLink)
        .replace(/FROM/g, moment.unix(actsSorted[i].start).format("HH:mm"))
        .replace(/WHERE/g, getStageName(actsSorted[i].location))
        .replace(/ID/g, actsSorted[i].id);
        favoritesFound += 1
        
        entry = entry.replace('<a href=\'http:///\'></a>', '-');
        content += entry;
        }
    }
    const favoritePage = document.getElementById('content-favorites');
    if (favoritesFound == 0) {
        let selectedQuote = getRandomQuote()
        let emptyEntry = ""
        if (selectedQuote === "...") {
            emptyEntry = templateEmptyDay.replace(/ACT_NAME/g, "für de tag sind kei iiträg gspeicheret!")
            .replace(/TITLE/g, "") 
            .replace(/QUOTE/g, "")             
        }
        else {
            emptyEntry = templateEmptyDay.replace(/ACT_NAME/g, "für de tag sind kei iiträg gspeicheret!")
            .replace(/TITLE/g, "Spruch des Tages:") 
            .replace(/QUOTE/g, getRandomQuote()) 
        }
        console.log(quotes)
        content += emptyEntry
    }
    
    favoritePage.innerHTML = content;



    for (let i = 0; i < actsSorted.length; i++) {
    const infoButton = document.getElementById(`info_${actsSorted[i].id}`)
    if (infoButton) {
        infoButton.addEventListener("click",()=>{
            showInfo(actsSorted[i].id)
        })   
    }
    
    const removeButton = document.getElementById(`remove_${actsSorted[i].id}`)
    if (removeButton) {
        removeButton.addEventListener("click",()=>{
            removeFavorites(actsSorted[i].id)
            removeButton.parentElement.parentElement.parentElement.style.display = "none"
            

            
        })
    }

    }
    const nameField =document.getElementById("myName")
    if (localStorage.getItem("pubID")) {
        nameField.value = localStorage.myName;
        nameField.setAttribute("readonly","readonly")
    }
    
    const pubButton = document.getElementById("pub")
    if (pubButton) {
            pubButton.addEventListener("click",()=>{   
                if (!localStorage.getItem("pubID")) {
                    pubButtonEventFirst()
                }
                else{
                    console.log("allready published")
                    publishUpdate()
                }
            })
            
            

    }
    function pubButtonEventFirst(){
        let userName = document.getElementById("myName").value.toLowerCase()
        let xhrCheckName = new XMLHttpRequest
        xhrCheckName.open("GET",`https://yourdatabase.azurewebsites.net/checkName?name=${userName}`)
        xhrCheckName.setRequestHeader('Content-Type', 'application/json') ;
        xhrCheckName.setRequestHeader('Access-Control-Allow-Origin', '*' );
        xhrCheckName.send();
        xhrCheckName.onreadystatechange = function(){
            if (xhrCheckName.readyState == 4) {
                if (JSON.parse(xhrCheckName.response)[0].nameFound == 1) {
                    alert("name schon besetzt")
                } else {
                    let favoritesStored = JSON.parse(localStorage.getItem("favorites"))
                    let xhr = new XMLHttpRequest();
                    xhr.open("POST", "https://yourdatabase.azurewebsites.net/addEntry", true);
                    xhr.setRequestHeader('Content-Type', 'application/json') ;
                    xhr.setRequestHeader('Access-Control-Allow-Origin', '*' );
                    xhr.send(JSON.stringify({
                        "favorites": favoritesStored.list
                        ,"uploadTime" : moment().unix()
                        ,"name" : userName
                        ,"type" : "vorneLinks"
                    }));
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState === 4) {
                            console.log(JSON.parse(xhr.response).id);
                            localStorage.pubID = JSON.parse(xhr.response).id;
                            localStorage.myName = userName;
                            statusInfo(`dein Name "${userName}" wurde registriert`)
                        }
                    }
                }
                
            }
        }
        

    }
    function publishUpdate(){
        let favoritesStored = JSON.parse(localStorage.getItem("favorites"))
        let databaseID = localStorage.pubID
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://yourdatabase.azurewebsites.net/updateItem", true);
        xhr.setRequestHeader('Content-Type', 'application/json') ;
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*' );
        xhr.send(JSON.stringify({
            "value": favoritesStored.list
            ,"key" : "favorites"
            ,"taskID" : databaseID
        }));
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                console.log(xhr.responseType);
                console.log(JSON.parse(xhr.response).id);
                localStorage.pubID = JSON.parse(xhr.response).id;
                statusInfo("Merkzettel veröffentlicht")
            }
        }

    }
    const friendButton = document.getElementById("getFriends")
    friendButton.addEventListener("click",()=>{
    const newFriend = document.getElementById("friendsName").value.toLowerCase()
        if (newFriend.length>0) {
            let xhrCheckName = new XMLHttpRequest
            xhrCheckName.open("GET",`https://yourdatabase.azurewebsites.net/checkName?name=${newFriend}`)
            xhrCheckName.setRequestHeader('Content-Type', 'application/json') ;
            xhrCheckName.setRequestHeader('Access-Control-Allow-Origin', '*' );
            xhrCheckName.send(null);
            xhrCheckName.addEventListener("loadend",()=>{
                if (JSON.parse(xhrCheckName.response)[0].nameFound == 0) {
                    statusInfo(`"${newFriend}" nicht registriert`)
                }
                else{
                    let friendFav=JSON.parse(xhrCheckName.response)[1].favorites
                    let friendName=JSON.parse(xhrCheckName.response)[1].name
                    let oldList = JSON.parse(localStorage.friends)
                    let newElement = {}
                    newElement["favorites"]=friendFav
                    newElement["friendName"]=friendName
                    let check = 0
                    console.log("oldList",oldList)
                    for (let i = 0; i < oldList.length; i++) {
                        if (oldList[i].friendName == friendName){
                            check =1;
                            statusInfo(`"${newFriend}" war schon gespeichert`)
                        }
                        
                    }
                    if (check==0) {
                        //console.log("new element pushed")
                        oldList.push(newElement)
                        localStorage.friends=JSON.stringify(oldList)
                        statusInfo(`"${newFriend}" als Freund*In hinzugefügt`)
                        updateFriends()

                    }
                }
                
            })  
                    
        }updateFriends()
    })
            
    function updateFriends(){    
        let newList = []
        
        let xhr = new XMLHttpRequest
        xhr.open("GET",`https://yourdatabase.azurewebsites.net/getFriends`)
        xhr.setRequestHeader('Content-Type', 'application/json') ;
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*' );
        xhr.send(null);
        xhr.addEventListener("loadend",()=>{
            let response=JSON.parse(xhr.response)
            //console.log(response)
            for (let i_2 = 0; i_2 < response.length; i_2++) {
                for (const entry of JSON.parse(localStorage.friends)) {
                    //console.log("entry",entry,"response",response[i_2].name)
                    if (response[i_2].name == entry.friendName) {
                        //console.log("match found")
                        newList.push({
                            "friendName" : response[i_2].name,
                            "favorites" : response[i_2].favorites
                        })
                    }
                }
            }
        
        //console.log("stringified",JSON.stringify(newList),newList)
        if (JSON.stringify(newList).length>10) {
            localStorage.friends=JSON.stringify(newList)
        }
  
       
        })
    }
    const friendDeleteButton = document.getElementById("removeFriend")
    friendDeleteButton.addEventListener("click",()=>{
    const oldFriend = document.getElementById("friendsName").value
    let newList = []
    let check=0
        if (oldFriend.length>0) {
            for (const entry of JSON.parse(localStorage.friends)) {
                console.log("old friend",oldFriend,"entry",entry)
                if (oldFriend != entry.friendName) {
                    //console.log("match found")
                    newList.push({
                        "friendName" : entry.friendName,
                        "favorites" : entry.favorites
                    })
                }
                else{check=1}
            }
            if (JSON.stringify(newList).length>10) {
                localStorage.friends=JSON.stringify(newList)
            }

        }
        if (check == 0) {
            statusInfo(`"${oldFriend}" nicht gefunden`)
            
        } else {
            statusInfo(`"${oldFriend}" entfernt`)
        }
    })

    
      

}