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
        document.title = data.title
        const liName = document.createElement('li');
        const liDescription = document.createElement('li');
        const liReward = document.createElement('li');
        const liImage = document.createElement('img');
        liImage.src = data.images[0].original;
        liName.textContent = 'Name: ' + data.title;
        liDescription.textContent = 'Description: ' + data.description;
        //Check if there is a reward. If there is, display it. if not, display "No reward"
        if (data.reward_text) {
            liReward.textContent = 'Reward: ' + data.reward_text;
        } else {
            liReward.textContent = 'Reward: No reward';
        }
    
        ul.appendChild(liName);
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