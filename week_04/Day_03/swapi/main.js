const button = document.querySelector('button');

const logger =()=>{
    console.log("button clicked");

    axios.get('https://swapi.dev/api/planets/?search=alderaan').then((res)=>{

    res.data.results[0].residents.forEach((resident)=> {
        axios.get(resident).then((res)=>{
           const element= document.createElement('h2');
           element.textContent=res.data.name;
           nameBox.appendChild(element)


            //console.timeLog(res.data.name);


        })

        
    });
    })
}

button.addEventListener("click" ,logger);
