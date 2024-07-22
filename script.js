

var tmp=document.getElementsByClassName('tmp')
console.log(tmp[0]);
var icon=document.getElementsByClassName('img')
 // form.addEventListener('submit', handleForm);
 function fetchapi(e) {
    e.preventDefault()
    var pays = document.loginForm.pays.value

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=a03cf2cabcaa4353971164038230401&q=${pays}&days=5&aqi=no&alerts=no`,{
        method: 'GET',
        headers:{
                "X-RapidAPI-Key": "8bd9d6c688msh68d31c229fdad4ap11c13ajsn87b83ab7f99a",
                "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
 }}).then(response => console.log(response.json().then((res)=>{tmp[0].innerHTML= res.current.temp_c,icon[0].setAttribute('src',res.current.condition.icon)})))
        .catch(error => console.error( error))
   }