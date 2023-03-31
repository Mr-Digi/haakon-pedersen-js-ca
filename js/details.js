const params = new URLSearchParams(window.location.search);

const loadingIndicator = document.createElement('div');
const wantedHolder = document.getElementsByClassName("wanted")
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

        const liName = document.createElement('li');
        const liDescription = document.createElement('li');
        const liReward = document.createElement('li');
        const liImage = document.createElement('img');
        liImage.src = data.images[0].original
        liName.textContent = 'Name: ' + data.title;
        liDescription.textContent = 'Description: ' + data.description;
        liReward.textContent = 'Reward: ' + data.reward_text
    
        ul.appendChild(liName)
        ul.appendChild(liDescription);
        ul.appendChild(liReward)
        ul.appendChild(liImage);
        wantedHolder[0].appendChild(ul);
        document.body.removeChild(loadingIndicator);
    })
    .catch(error => {
        console.error(error);
        document.body.removeChild(loadingIndicator);
    })