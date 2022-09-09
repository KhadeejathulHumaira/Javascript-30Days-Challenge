const cities=[]
const url='https://raw.githubusercontent.com/KhadeejathulHumaira/Cities/main/cities.json'
fetch(url)
    .then(res=>res.json())
    .then(res=>cities.push(...res))

const numberWithCommas=(x)=> {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

//to get the correct city or state that matches with the user search
const findMatchedCity=(wordToMatch,cities)=>{
    return cities.filter(place=>{
        const regex=new RegExp(wordToMatch,'gi')//global,insensitive(doesn't care about capitals )
        return place.city.match(regex)||place.state.match(regex)
    })
}
const displayMatch=(e)=>{
    //get data 
    const val=e.currentTarget.value
    const matchArr=findMatchedCity(val,cities)
    //console.log(matchArr)
    const html=matchArr.map(place=>{
        const regex=new RegExp(val,'gi')
        //city name is replaced with span tag to highlight the word that is searched
        const cityName=place.city.replace(regex,`<span class=hl>${val}</span>`)
        const stateName=place.state.replace(regex,`<span class=hl>${val}</span>`)
        return `
            <li>
            <span class="name">${cityName},${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `
    }).join('')
    suggestion.innerHTML=html
}

const search=document.querySelector('.search')
const suggestion=document.querySelector('.suggestions')

search.addEventListener('change',displayMatch)
search.addEventListener('keyup',displayMatch)