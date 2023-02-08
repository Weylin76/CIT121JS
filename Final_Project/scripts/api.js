const url = 'https://randomuser.me/api/?results=10';
const btn = document.getElementById('button');
const output = document.getElementById('output');
let wage = [];

window.addEventListener('load', fetchRandomData);
 
async function fetchRandomData (){
    output.innerHTML = '';
    let response = await fetch(url);
    let data = await response.json();
   complieData(data.results)
};

function complieData(data) {
    data.forEach(val => {
        let div = document.createElement('div');
        div.textContent = `${val.name.first} ${val.name.last}`
        output.appendChild(div);

        let image = document.createElement('img');
        image.setAttribute('src', val.picture.large);
        image.setAttribute('alt', `Picture of ${val.name.first} ${val.name.last}`);
        output.appendChild(image);
        
        let salary = document.createElement('div');
        let money = Math.floor(Math.random() * (250000 - 50000 + 1) + 50000);
        wage.push(money);
        salary.textContent = 'Salary: ' + money.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        output.appendChild(salary);
    })
  
};

setTimeout(function(){
    let wageOutput = document.getElementById('allWages');
   
    let combinedWages = wage.reduce(function(total, num){
        return total + num;
    })
    allWages.textContent = combinedWages.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    wageOutput.appendChild(allWages);
}, 2000);