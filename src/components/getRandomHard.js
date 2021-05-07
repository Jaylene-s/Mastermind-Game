//fetch from API to get a random number of 8 digits

async function getRandomHard(){

    let url = `https://www.random.org/integers/?num=6&min=0&max=8&col=1&base=10&format=plain&rnd=new`;

    return fetch(url,{
        method:'GET',
    })
    .then((response) => response.text())
    .then((number) => {
       return number.replace(/(?:\r\n|\r|\n)/g, "").toString()
    })
    .catch(error => console.log(error))
}

export default getRandomHard;