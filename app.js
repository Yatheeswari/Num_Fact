console.log('up and running');
const submit = document.getElementById('submit');
const numberForm = document.getElementById('number-form');
const numResponse = document.getElementById('number-response');
let numVal;
let fetchUrl;

submit.addEventListener('click', function(e){
    if(numberForm.value){
    numVal = numberForm.value
    console.log(numVal);
    //numberForm.value = '';

    fetchUrl = `http://numbersapi.com/${numVal}`

    fetch(`${fetchUrl}`)
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            numResponse.innerHTML = `<p id="response-text">${data}</p>`
        })
    }
});
