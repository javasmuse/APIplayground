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

    var actor = chars[0].peopleName;
    const nameCard = document.getElementById('items-list');
    nameCard.innerHTML = actor;

    var nickN = chars[0].peopleNick;
    const nickCard = document.getElementById('item-two');
    nickCard.innerHTML = nickN;


}

getChars();

async function getQuote() {
    const res2 = await fetch('https://www.breakingbadapi.com/api/quote/random');
    const data2 = await res2.json();

    const quos = data2.map(quotes => {
        return {
            quote: quotes.quote,
            quoteAuth: quotes.author
        };
    });
    console.log(quos);


    const quoteR = quos[0].quote;
    const quoteHere = document.getElementById('quote');
    quoteHere.innerHTML = quoteR;

    const quoteA = quos[0].quoteAuth;
    const quoteAhere = document.getElementById('quoteA');
    quoteAhere.innerHTML = quoteA;

}

getQuote();