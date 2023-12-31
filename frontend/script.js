let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", fetchContent);

function fetchContent(){
    let selects = document.getElementsByTagName("select");
    let muscle = selects[0].value;
    let equipment = selects[1].value;
    const url = "http://localhost:8080/exercise?muscle=" + muscle + "&equipment=" + equipment;

    fetch(url)
        .then(response => response.json())
        .then(data => insertContent(data))
}


function insertContent(jsonData){
    let cardsContainer = document.getElementsByClassName("cards-container")[0];
    cardsContainer.innerHTML = '';
    if(!jsonData.length){
        let notFound = document.createElement("div");
        notFound.className = "notfound-div"
        notFound.innerHTML = "<p>No content found</p>"
        cardsContainer.appendChild(notFound);
    } else {  
        for(let i = 0; i < jsonData.length; i++){
            cardsContainer.appendChild(createCard(jsonData[i]));
        }   
    }
}

function createCard(jsonData){
    let name = jsonData.name;
    let muscle = jsonData.muscle;
    let equipment = jsonData.equipment;
    let embedLink = jsonData.link.substring(32,43)
    let exerciseCard = document.createElement("div");
    exerciseCard.className="exercise-card"
    exerciseCard.innerHTML = `
    <h3>${name}</h3>
    <p><b>Muscle</b> : ${muscle}</p>
    <p><b>Equipment</b> : ${equipment}</p>
    <iframe width="500em" height="350em" src="https://www.youtube.com/embed/${embedLink}"" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
    return exerciseCard;
}