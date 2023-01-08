//******************************************
//***            Using Map method        ***
//******************************************

let new_array = ["1","2","3"];
const listElements = new_array.map(function (new_array){
    return `<li>${new_array}</li>`;
});
document.getElementById('myList').innerHTML = listElements.join("");

let weatherConditions = ['rain', 'snow', 'wind', 'sunny'];
const weather = weatherConditions.map(function (weatherConditions){
    return `<li>${weatherConditions}</li>`;
});
document.getElementById('weather').innerHTML = weather.join("");

const favDogs = ['cocoa', 'cheaters', 'Mr. Miles'];
const dogList = favDogs.map(function (favDogs){
    return `<li>${favDogs}</li>`
})
document.getElementById('doggies').innerHTML = dogList.join("");

const grades = ['A','B','C','D','F', 'B', 'C', 'A'];

function gradePoints (grade) {
        let points = 0;
        if (grade === 'A'){
            points = 4.0
        }else if(grade === 'B'){
            points = 3.0
        }else if(grade === 'C'){
            points = 2.0
        }else if(grade ==='D'){
            points = 1.5
        }else if(grade ==='F'){
            points =1.0}
        return `<li>${points}</li>`;
};
const gpaPoints = grades.map(gradePoints);
let gradeEarned = document.getElementById('grades');
gradeEarned.innerHTML = gpaPoints.join("");

const stores = ['Target', 'Home Depot', 'Best Buy', 'Game Stop', 'Five Below', 'Pet Smart'];

function storeRanking (store){
    let rank = '';
    if (store === 'Home Depot'){
        rank = 'Excellent'
    } else if (store === 'Best Buy'){
        rank = 'Good'
    } else if (store === 'Game Stop'){
        rank = 'okay'
    } else if (store === 'Target'){
        rank = 'Trash, unless you get BWW sauces!'
    }else if (store === 'Five Below'){
        rank = 'Amazing!'
    }else if (store === 'Pet Smart'){
        rank = 'Ok'
    }
    return `<li>${store} is ${rank}!</li>`
}
const storeRank = stores.map(storeRanking);
document.getElementById('store').innerHTML = storeRank.join("");

const BYUIGrades = ['A', 'B', 'A'];
function BYUIGradePoints (grade) {
    let points = 0;
    if (grade === 'A'){
        points = 4.0
    }else if(grade === 'B'){
        points = 3.0
    }else if(grade === 'C'){
        points = 2.0
    }else if(grade ==='D'){
        points = 1.5
    }else if(grade ==='F'){
        points =1.0}
    return points;
};

//******************************************
//***          Using Reduce Method       ***
//******************************************

const collegeGPA = BYUIGrades.map(BYUIGradePoints);
const collegeOverallGPA = collegeGPA.reduce((accumulator, current_value) => accumulator + current_value, 0);
let trueGPA = (collegeOverallGPA/(BYUIGrades.length)).toFixed(2);
document.getElementById('BYUIGPA').innerText = trueGPA;

const basketBallScores = [89,78,113,102,92,85,78,77,84,87,113]
const totalBasketBallScores = basketBallScores.reduce((a, c)=> a + c, 0);
document.querySelector('#bBallScores').innerText = totalBasketBallScores;

//******************************************
//***          Using Filter Method       ***
//******************************************

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const longFruitNames = fruits.filter(fruit => fruit.length>5);
document.getElementById('fruitNames').innerText = longFruitNames;

const shortWords = fruits.filter((fruits)=>fruits.length<6);
console.log(shortWords);
document.querySelector('#smallWords').innerText = shortWords;

//******************************************
//***        Using index of Method       ***
//******************************************

const animals = ['donkey', 'bison', 'camel', 'duck', 'bison'];
console.log((animals.indexOf('bison')));
//expected output: 1

console.log((animals.indexOf('bison',2)));
//expected output: 4

console.log((animals.indexOf('bison',-1)));
//expected output: 4

console.log(animals.indexOf('rabbit'));
//expected output: -1

//Example 2
const numbers = [12,34,21,54];
const luckyNumber = 21;
let results = (numbers.indexOf(luckyNumber));
document.querySelector('#luckyNum').innerHTML = results;

//******************************************
//***        Using includes Method       ***
//******************************************
const numbers2 = [12,34,21,54];
const luckyNumber2 = 21;
let results2 = (numbers2.includes(luckyNumber2));
document.querySelector('#luckyNum2').innerHTML = results2;

