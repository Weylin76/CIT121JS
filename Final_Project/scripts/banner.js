let date = new Date();
let dayOfWeek = date.getDay();
let weekday = '';
let banner = document.getElementById('banner');

switch (dayOfWeek){
    case 0: 
        weekday = 'Sunday';
        break;
    case 1:
        weekday = 'Monday';
        break;
    case 2:
        weekday = 'Tuesday';
        break;
    case 3:
        weekday = 'Wednesday';
        break;
    case 4:
        weekday = 'Thursday';
        break;
    case 5:
        weekday = 'Friday';
        break;
    default: 
        weekday= 'Saturday'
};

if (dayOfWeek === 0){
    //Sunday
    let span = document.createElement('span');
    span.textContent = `Today is ${weekday}. Time to take a break from work, and enjoy the time off!`;
    banner.appendChild(span);
} else if (dayOfWeek === 1){
    //Monday
    let span = document.createElement('span');
    span.textContent = `Today is ${weekday}. I am a Friday person in a Monday world!`
    banner.appendChild(span);
} else if (dayOfWeek === 2){
    //Tuesday
    let span = document.createElement('span');
    span.textContent = `Today is ${weekday}. I guess it is better than Monday, but barely!`
    banner.appendChild(span);
} else if (dayOfWeek === 3){
    //Wednesday
    let span = document.createElement('span');
    span.textContent = `Today is ${weekday}. Mike! Mike! Mike! What day is it Mike? .... Hump Day, Yeah!`
    banner.appendChild(span);
} else if (dayOfWeek === 4){
    //Thursday
    let span = document.createElement('span');
    span.textContent = `Today is ${weekday}. Yeah, if Thursday could be Friday, That would be great!`
    banner.appendChild(span);
} else if (dayOfWeek === 5){
    //Friday
    let span = document.createElement('span');
    span.textContent = `Today is ${weekday}, We "Work"!`
    banner.appendChild(span);
} else {
    //Saturday
    let span = document.createElement('span');
    span.textContent = `OH, ${weekday} ........ I so love you"!`
    banner.appendChild(span);}