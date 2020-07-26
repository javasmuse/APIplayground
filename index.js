
async function getChars() {
const res = await fetch('https://www.breakingbadapi.com/api/characters/');
const data = await res.json();

const chars = data.map(people => {
    return {
            peopleName: people.name,
            peopleNick: people.nickname, 
            peoplePic: people.img
    };
});
console.log(chars);

// chars.forEach(char => {
    
// });

const actor = chars[3].peopleName;
const nickN = chars[3].peopleNick;
const picPeep = new Image(100, 200);
picPeep.src = 'chars[3].peoplePic';


const nameCard = document.getElementsByClassName('card');
const nickCard = document.getElementsByClassName('card');
const pic = document.getElementById('pic');

nameCard.innerHTML = actor; 
nickCard.innerHTML = nickN; 
pic.innerHTML = picPeep;


}

getChars();



// fetch('https://www.breakingbadapi.com/api/characters/').then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data);

//     const chars = data.data.map( dat => {

//     })
    

// }).catch((err) => {
//     console.warn(error);
// });