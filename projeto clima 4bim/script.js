document.querySelector('.busca').addEventListener('submit', async(event)=>{
    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    if(input !== ""){
        showWarning("carregando...")

        let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
           ${encodeURI(input)} &units=metrics&lang=lang=pt_br&appid=d06cdb298fafc83c520d5ab677fc477e`);
           let json = await results.json();

        if(json.cod ==200){

        }else{
            showWarning("Nao encontramos essa localização...")
        } 

    }else{

    }
})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}