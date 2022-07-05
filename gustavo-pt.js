

var credencial = {
     token:'a40356461fe9e78f01d8c7ebfa24f5fd'
};

const body={ 
     credencial: this.credencial
};
function Start(){
  // fetch("http://api.jepherson.com.br/start_chat.php",
  //      {method:'post',body:JSON.stringify(body)}).then((response)=> response.json())
  //      .then((data) =>{
  //         console.log("Start" + data);
  //      });
  

var raw = JSON.stringify({
  "credencial": {
    "token": "a40356461fe9e78f01d8c7ebfa24f5fd"
  }
});

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("http://api.jepherson.com.br/start_chat.php", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function Lista(){
     fetch("http://api.jepherson.com.br/list_chat.php",
          {
               method: 'post',
               body: JSON.stringify(body)
          }).then((response)=> response).then(
               (data) => {
                    console.log("Lista" + data);
               }
          ); 
}

var credencialDelet = {
  token:'a40356461fe9e78f01d8c7ebfa24f5fd',
  
  code_chat:'d2890113113fd5854ade26c3917135ea'
}

const bodyDelet={
  credencialDelet: this.credencialDelet
}

function delet(){
  fetch("http://api.jepherson.com.br/end_chat.php",
       {method:'post',body:JSON.stringify(bodyDelet)}).then((response)=> response.json())
       .then((data) =>{
          console.log("End" + data);
       })
      
};

function Configuracao(){
     fetch("http://api.jepherson.com.br/configuration.php",
          {method:'post',body:JSON.stringify(body)}).then((response)=> response.json())
          .then((data) =>{
               document.getElementById("desc").innerHTML = data.configuracao.descricao;
               var image = data.configuracao.imagem;
               document.getElementById("img").style.backgroundImage = 'url('+image+')';
               document.getElementById("img2").style.backgroundImage = 'url('+image+')';

               console.log("Configuração" + data);
                // Lista();
                // delet();
          });
}



Configuracao();

function removerMens(){
     document.getElementById("toggle").style.display = 'none';
}

setTimeout(removerMens,3000);
        
function trocar(i){
     if(!i){
          let chat = document.getElementById('chat');
          chat.style.display = 'inline';
          let botao = document.getElementById('botao');
          botao.style.display = 'none';
          Start();
     }
     else{
          let chat = document.getElementById('chat');
          chat.style.display = 'none';
          let botao = document.getElementById('botao');
          botao.style.display = 'inline';
          removerMens();
         Lista()
          
     }
     
}

