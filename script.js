fetch(" https://icanhazdadjoke.com/slack")
.then(data=>data.json())
.then(jokeData=>{
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerHTML=jokeText;
})

const refreshBtn = document.getElementById("refresh-btn");
refreshBtn.addEventListener('click',()=>{
    location.reload();
})