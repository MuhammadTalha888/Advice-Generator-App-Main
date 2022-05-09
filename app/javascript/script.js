
api_url = "https://api.adviceslip.com/advice";

async function clicked(){ 
    var tab = document.getElementsByClassName('tab');
    var p = tab[0].getElementsByTagName('p');
    var h1 = tab[0].getElementsByTagName('h1');
    
    var response = await fetch(api_url);
    var jsonData = await response.json();
    
    var adviceNum = jsonData.slip.id;
    var advice = jsonData.slip.advice;

    
    
    
    p[0].innerHTML = "ADVICE #" + adviceNum; 
    h1[0].innerHTML = "\"" + advice + "\"";
}