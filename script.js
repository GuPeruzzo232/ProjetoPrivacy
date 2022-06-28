//var api = "http://api.jepherson.com.br/configuration.php";
const API_URL = "http://api.jepherson.com.br/configuration.php";
const REQUEST_HEADERS = {
  'Cache-Control': 'no-cache', 
  'Content-Type': 'application/json'
} 
const REQUEST_BODY = {
  "configuracao": {
    "cor_borda": "#167ac2",
           "cor_letra": "#000",
           "direcao": "left",
           "descricao": "Vamos<strong> conversar sobre o seu projeto de adequação à LGPD? </strong>"
   }
}
api.post(API_URL,REQUEST_BODY,{headers: REQUEST_HEADERS}).then(
  data =>{
    var x = data.data;
    console.log(x);
  }
).catch(error =>console.error(error));
