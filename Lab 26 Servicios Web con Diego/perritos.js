async function perritos(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    console.log(data.message);
    createBreedList(data.message);
}
perritos();
function createBreedList(breedlist){
    document.getElementById("breed").innerHTML = `<img src=" ${breedlist}" >`;
}