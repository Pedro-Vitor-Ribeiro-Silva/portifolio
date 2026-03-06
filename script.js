// Garante que o código só roda depois que o HTML carregar
document.addEventListener("DOMContentLoaded", function () {

    // MENU MOBILE SIMPLES

    // Selecionandos os elementos no HTML
    var btnMenu = document.getElementById("btn-menu");
    var menu = document.getElementById("menu");

    // Se o botão não existir ou algo der errado, a função trava para não dar erro
    if (!btnMenu || !menu) return;

    // Quando clico no botão do menu
    btnMenu.addEventListener("click", function () {
        // Alterno a classe "mostrar" na Nav: se tiver, ele tira, se não tirar, ele coloca.
        var estaAberto = menu.classList.toggle("mostrar");

        // Muda o texto do botão de acordo com estado
        if (estaAberto) {
            btnMenu.textContent = "✕ Fechar";
        } else {
            btnMenu.textContent = "☰ Menu";
        }
    });

    // FECHAR MENU AO CLICAR NOS LINKS (P/ CELULAR)

    // Pega todos os links dentro do menu
    var linksDoMenu = menu.querySelectorAll("a");

    // Passa por todos os links
    for (var i = 0; i < linksDoMenu.length; i++) {
        linksDoMenu[i].addEventListener("click", function () {

            // Só fecho automaticamente se eu estiver com tela de celular
            // E se o menu estiver aparecendo (com a classe mostrar)
            if (window.innerWidth <= 768 && menu.classList.contains("mostrar")) {
                menu.classList.remove("mostrar"); // Tira o menu
                btnMenu.textContent = "☰ Menu";   // Volta o ícone normal
            }
        });
    }

    // MODO ESCURO (DARK MODE) SIMPLES

    var btnTema = document.getElementById("btn-tema");
    var iconeTema = document.getElementById("icone-tema");

    // Verifica no LocalStorage se o usuário já preferia o modo escuro
    var temaSalvo = localStorage.getItem("tema");

    // Se tiver salvo como 'dark', é adicionado no body
    if (temaSalvo === "dark") {
        document.body.classList.add("dark-mode");
        if (iconeTema) {
            iconeTema.classList.replace("ph-moon", "ph-sun");
        }
    }

    // Quando clicar no botão do tema
    if (btnTema && iconeTema) {
        btnTema.addEventListener("click", function () {

            // Ativa ou desativa a classe 'dark-mode' do Body
            var isDark = document.body.classList.toggle("dark-mode");

            if (isDark) {
                iconeTema.classList.replace("ph-moon", "ph-sun");
                localStorage.setItem("tema", "dark");
            } else {
                iconeTema.classList.replace("ph-sun", "ph-moon");
                localStorage.setItem("tema", "light");
            }
        });
    }

});
