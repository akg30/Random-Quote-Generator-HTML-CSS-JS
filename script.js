var myQuote=document.getElementById('myQuote')

apiUrl='https://api.adviceslip.com/advice'

async function showQuote(){
    var response=await fetch(apiUrl)
    try{
        if(response.ok){
            var data=await response.json()
            myQuote.textContent=data['slip']['advice']
        }
    }
    catch(error){
        myQuote.textContent='Not Found'
    }
}

showQuote()