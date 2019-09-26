function verificaCadastro() {
    const
        nome = document.getElementById('inputNome').value,
        senha = document.getElementById('inputSenha').value;
    //pegando os dados do formulario...
    //pegando os dados do banco de dados...
    let
        usuarios,
        xmlHTTP = new XMLHttpRequest();
        xmlHTTP.open('GET', 'json/bd.json', 'true');
    xmlHTTP.onreadystatechange = () => {
        if (xmlHTTP.readyState == 4 && xmlHTTP.status == 200) {
            let res = JSON.parse(xmlHTTP.responseText);
            usuarios=res.usuario;
            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].login == nome && usuarios[i].senha == senha) {
                    carrega('associados.html', 'container');
                    console.log(usuarios);
                    carrega('menu.html', 'menu');
                }
            }
        }
    }
    
    xmlHTTP.send(null);
}