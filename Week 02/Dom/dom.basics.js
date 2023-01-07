const newParagraph = document.createElement("p");
newParagraph.innerText = "added with JavaScript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute('src', 'https://placeimg.com/200/200/animals');
newImage.setAttribute('alt', 'pic of animal');
document.body.appendChild(newImage);

const newDiv = document.createElement('div');
newDiv.innerHTML = '<ul><li>One</li><li>Two</li><li>Three</li></ul>';
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
const newH2 = document.createElement('h2');
newH2.innerHTML = 'CSE 121b';
const newPara = document.createElement('P');
newPara.innerHTML = 'Welcome to Jaascript Language'
document.body.appendChild(newSection);
newSection.appendChild(newH2);
newSection.appendChild(newPara);