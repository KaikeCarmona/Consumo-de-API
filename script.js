function temperatura() {
    var cidades = document.getElementById("cidades").value;

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidades}&units=metric&lang=pt_br&appid=e6d0f8c8a9bbcbef9f9953cefd2d966f`


    let info = {
        method: 'GET',
        MODE: 'cors',
        cache: 'default'
    }

    fetch(url, info)
        .then((response) => response.json()) //Se dar certo = THEN - Exigencia json
        .then(data => inserir(data))
        .then((data) => console.log(data))

        .catch(erro => alert("Essa cidade não foi encontrada")) //Se dar errado = catch

    const inserir = (tempo) => {
        for (const campo in tempo) {
            document.getElementById("graus_celsius").innerText = Math.floor(tempo.main.temp) + "°C"
            document.getElementById("info").innerText = tempo.weather[0].description.toUpperCase()
            console.log(tempo.weather[0].description)
   
        }
    }
    document.getElementById("nome").innerText = cidades
}

