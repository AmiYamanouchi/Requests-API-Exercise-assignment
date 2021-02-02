const ul = document.querySelector('ul');
const btn = document.querySelector('button');

const getDataJokes = async () => {
    return res = await axios.get('https://icanhazdadjoke.com', {
        headers: { 'Accept': 'application/json' }
    });
    
};

btn.addEventListener('click', ()=>{
    getDataJokes()
        .then((response)=>{
            const li = document.createElement('li');
            li.innerText = res.data.joke;
            ul.appendChild(li);
        })
        .catch(()=>{
            alert("wrong!!!!!!")
        })
})