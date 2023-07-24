export function removeFavorites(actID){
    var favoritesStored = JSON.parse(localStorage.getItem("favorites"))

   

    if (favoritesStored.list.includes(actID)) {
        const index2Delete = favoritesStored.list.indexOf(actID)
        favoritesStored.list.splice(index2Delete,1)
        localStorage.favorites = JSON.stringify({ "list": favoritesStored.list});
        // location.reload()
    }
    else{
        favoritesStored.list.push(actID)
        console.log(`act with id ${actID} not in favorites`)
    }
    
    

}