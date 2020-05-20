var login_usu;
var senha_user;

function verificar_usuario()
{
    // variaveis recebendo os dados do login.html
    login_usu = (email_usu.value);
    senha_user = (senha_usu.value);

    // validação do login, verifica se o login e a senha são os desejados
    if(senha_user == 'admin' && login_usu == 'admin')
    {
        //Redireciona para a tela da dashboard
        window.location.href = '../html/menu-principal.html'
    }
    else
    {
        //caso o login não seja válido, exibe um alerta de erro
        alert('Login ou senha inválidos');
    }
}