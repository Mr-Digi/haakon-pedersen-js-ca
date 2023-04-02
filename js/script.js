const apiUrl = 'https://api.fbi.gov/wanted/v1/list';

// create a loading indicator
const loadingIndicator = document.createElement('div');
const wantedHolder = document.getElementsByClassName("wanted")
loadingIndicator.textContent = 'Loading...';
document.body.appendChild(loadingIndicator);
try {
    fetch(apiUrl)
        .then(response => response.json()) //Convert the response to Json
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.items.length; i++) {
                const ul = document.createElement('ul');
                const image = document.createElement('img');
                const link = document.createElement('a');
                image.src = data.items[i].images[0].thumb
                link.href = 'details.html?wanted='+data.items[i].uid
                link.appendChild(image)

                const liName = document.createElement('li');
                const liValue = document.createElement('li');
                const liImage = document.createElement('li');
                liName.textContent = data.items[i].title;
                liValue.textContent = data.items[i].description;
                liImage.appendChild(link);
                link.appendChild(liName)
                ul.appendChild(link);
                ul.appendChild(liValue);
                ul.appendChild(liImage);
                wantedHolder[0].appendChild(ul);
            }
            document.body.removeChild(loadingIndicator);
        })
        .catch(error => {
            console.error(error);
            document.body.removeChild(loadingIndicator);
        })
} catch(error) {
    console.log('An error occured')
    document.body.removeChild(loadingIndicator);
}