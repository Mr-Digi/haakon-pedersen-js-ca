const params = new URLSearchParams(window.location.search);

const loadingIndicator = document.createElement('div');
const wantedHolder = document.getElementsByClassName("details")
const ul = document.createElement('ul');
const img = document.createElement('img');
loadingIndicator.textContent = 'Loading...';
document.body.appendChild(loadingIndicator);
card = params.get('wanted')
apiUrl = 'https://api.fbi.gov/@wanted-person/'+card
fetch(apiUrl)
    .then(response => response.json()) //Convert the response to Json
    .then(data => {
        console.log(data)
        const ul = document.createElement('ul');
        document.title = data.title
        
        const nameDiv = document.createElement('div')
        nameDiv.setAttribute("class", 'detailDiv')

        const nameTitle = document.createElement('b');
        const wantedName = document.createElement('p');

        const occupationTitle = document.createElement('b');
        const wantedOccupation = document.createElement('p');

        const sexTitle = document.createElement('b');
        const wantedSex = document.createElement('p');

        const raceTitle = document.createElement('b');
        const wantedRace = document.createElement('p');
        
        const descriptionTitle = document.createElement('b');
        const wantedDescription = document.createElement('p');
        
        const rewardTitle = document.createElement('b');
        const wantedReward = document.createElement('p');
        
        const textHolder = document.createElement('li');
        const liImage = document.createElement('img');
        liImage.src = data.images[0].original;

        nameTitle.textContent = "Name:  ";
        wantedName.textContent = data.title;

        occupationTitle.textContent = "Work:  ";
        if (data.occupations) {
            wantedOccupation.textContent = data.occupations[0];
        } else {
            wantedOccupation.textContent = "Unknown";
        }

        sexTitle.textContent = "Sex:  ";
        wantedSex.textContent = data.sex;

        raceTitle.textContent = "Race:  ";
        wantedRace.textContent = data.race;

        descriptionTitle.textContent = "Descripton: ";
        wantedDescription.textContent = data.description;
        
        rewardTitle.textContent = "Reward: ";
        if (data.reward_text) {
            wantedReward.textContent = data.reward_text;
        } else {
            wantedReward.textContent = 'No reward';
        }

        nameDiv.appendChild(nameTitle);
        nameDiv.appendChild(wantedName);

        nameDiv.appendChild(occupationTitle);
        nameDiv.appendChild(wantedOccupation);

        nameDiv.appendChild(sexTitle);
        nameDiv.appendChild(wantedSex);

        nameDiv.appendChild(raceTitle);
        nameDiv.appendChild(wantedRace);

        nameDiv.appendChild(descriptionTitle);
        nameDiv.appendChild(wantedDescription);

        nameDiv.appendChild(rewardTitle);
        nameDiv.appendChild(wantedReward);

        textHolder.appendChild(nameDiv);

        ul.appendChild(liImage);
        ul.appendChild(textHolder);
        wantedHolder[0].appendChild(ul);
        document.body.removeChild(loadingIndicator);
    })
    .catch(error => {
        console.error(error);
        loadingIndicator.textContent('A error occured: ' + error);
    })