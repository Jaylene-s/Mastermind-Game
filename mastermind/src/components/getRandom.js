//fetch from API to get a random number 

async function getRandomNumber(){

    let url = `https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new`;

    return fetch(url,{
        method:'GET',
    })
    .then((response) => response.text())
    .then((number) => {
       return number.replace(/(?:\r\n|\r|\n)/g, "").toString()
    })
    .catch(error => console.log(error))

}

export default getRandomNumber;