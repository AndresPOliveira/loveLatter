function loadText(params) {

    const date = new Date();
    let today = date.getDay();
    let title = document.getElementById('title');
    let text = document.getElementById('content');
    if (today == 0) {
        title.innerHTML = "Um dia de amor";
        text.innerHTML = "Todo dia com meu amor é uma experiencia nova e revigorante, mesmo fazendo as coisas iguais as vezes, são momentos muito gostosos. Um dia de amor com você pode ser vivendo um momento completamente unico ou apenas vendo um filminho muito ruim que você tem certeza que eu não gosto. <br><br> Enfim um dia de amor vem do simples fato de ter você comigo. <3"
    }
    if (today == 1) {
        title.innerHTML = "Primeiro encontro";
        text.innerHTML = "Você decidiu aceitar uma saida comigo, um estranho maluco que te chamou para conhecer seu jogo favorito, vivemos aquele dia quase como se fosse ser o ultimo, conversas que marcaram, conversas sinceras que trouxemos sobre tudo. <br> <br>Decidimos por ter esse momento, entre tentativas de beijos frustradas, onibus vazios e batatas fritas, a gente registrou aquele dia para sempre como um dos encontros mais lindos do mundo, praticamente um roteiro de comédia romantica."
    }
    if (today == 2) {
        title.innerHTML = "Conhecer um ao outro";
        text.innerHTML = "Estamos sempre nos conhecendo, e isso continua sendo magico para mim, mesmo que as vezes a gente possa se estressa um com o outro nessas descobertas hihi, mas a gente se encontra e se alinha e tras o melhor possivel um do outro. <br><br> Conhecer você foi uma coisa que aconteceu pra mim diversas vezes, primeiro na escola, depois denovo quando saimos, mais uma vez quando abriu seus problemas pra mim, e então finalmente você melhorando e mostrando cada vez mais coisas maravilhos sobre você e é para continuar te conhecendo que sigo com meu amorzinho."
    }
    if (today == 3) {
        title.innerHTML = "Escolhendo a cada dia";
        text.innerHTML = "Exatamente, eu te amo tanto, e amo tanto o nosso amor, que é simplesmente a coisa mais linda do mundo, com todas as dificuldades que temos em nossa vida, acordar todo dia e escolher passar o resto da minha vida com meu amorzinho. <br><br> Escolher estar junto todos os dias mesmo que não tendo a liberdade de ser fisicamente, estamos juntos e escolhemos seguir assim é uma delicia. <3"
    }
    if (today == 4) {
        title.innerHTML = "Destilando elogios";
        text.innerHTML = "Amorzinho do meu coração, esse dentro os todos os meus textinhos para você é apenas rasgação de seda, estou aqui para dizer como amo seu sorriso, como a forma que você se preocupa com a minha saude é linda, que o jeito que você desse do onibus para me abraçar é a coisa mais fofa do mundo. <br><br>Dar um espaço aqui e continuar, o seu cabelo é um dos cabelos mais lindos desse mundo, a forma como você se encaixa no meu colinho é simplesmente perfeita, sua força por ter enfrentado varias coisas e continuar seguindo em frente, simplesmente uma das mulheres mais fodas desse mundo. <3"
    }
    if (today == 5) {
        title.innerHTML = "Seguir em frente";
        text.innerHTML = "Amor da minha vidinha, essa aqui é minha mensagem para te apoiar com seus sonhos, quero que você saiba que sempre vou te apoiar, que vou te ajudar, que vou fazer de tudo que estiver ao meu alcance para fazer com que você atinja seus sonhos.<br><br>As vezes pode até ser que você fique sem saber quais são os seus sonhos, mas saiba que juntos nos iremos descobrir e fazer com que você os alcance, e se sinta completa e realizada com algo que realmente goste."
    }
    if (today == 6) {
        title.innerHTML = "Amor sem fim";
        text.innerHTML = "Acredito que já podemos afirmar que escolhemos esse amor para sempre, nosso amor cresce e se mostra resistente para com todas as coisas. Então que a gente trilhe esse caminho sempre e sempre. <br><br> Certo essa uma mensagem para começar muito bem a semana eu quero dizer que você é uma super gostosa que vai conquistar tudo sempre, meu amorzinho incrivel, te amo demais mesmo mulher maravilhosa do meu coração. <3"
    }
}

function passeio(params) {
    let rn = Math.floor(Math.random() * 10);
    let img = document.getElementById('resultado');

    if (rn == 0) {
        img.setAttribute("src", "assets/passeios/sorvete2.jpg")
    }
    if(rn == 1){
        img.setAttribute("src", "assets/passeios/cinema.avif")
    }
    if(rn == 2){
        img.setAttribute("src", "assets/passeios/piquenique.png")
    }
    if(rn == 3){
        img.setAttribute("src", "assets/passeios/hamburguer.jpg")
    }
    if(rn == 4){
        img.setAttribute("src", "assets/passeios/pizza.avif")
    }
    if(rn == 5){
        img.setAttribute("src", "assets/passeios/desenhar.webp")
    }
    if(rn == 6){
        img.setAttribute("src", "assets/passeios/puzzle.webp")
    }
    if(rn == 7){
        img.setAttribute("src", "assets/passeios/tabuleiro.jpg")
    }
    if(rn == 8){
        img.setAttribute("src", "assets/passeios/game.webp")
    }
    if(rn == 9){
        img.setAttribute("src", "assets/passeios/cozinhar.jpg")
    }
    console.log(rn)

}


