window.onload = getAdvice()

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then((response)=> response.json())
    .then((data)=> displayData(data))
     .catch((error)=>{
         console.log(error);
    })
}

function displayData(data){
    hideLoader()
    const adviceBox = qs(".advice-box")
    const adviceId = qs('.advice-id')
    adviceBox.innerHTML = ''
    adviceId.innerHTML = ''
    adviceId.innerHTML = `advice #${data.slip.id}`
    adviceBox.innerHTML = data.slip.advice
}

//query selector short cut
function qs(selector, parent = document){
    return parent.querySelector(selector);
}

function hideLoader(){
    qs('.loader').style.display = 'none'

    qs(".advice-box").style.display = 'flex'
    qs('.advice-id').style.display = 'flex'
}

function showLoader(){ 
    qs(".advice-box").style.display = 'none'
    qs('.advice-id').style.display = 'none'

    qs('.loader').style.display = 'flex'
}
//activate the request by the button click
qs('.make-request').addEventListener('click', ()=>{
    showLoader()
    getAdvice()
})