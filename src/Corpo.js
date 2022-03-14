export default function Corpo() {

    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    <Stories />
                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div class="posts">
                    <Posts />
                </div>
            </div>

            <div class="sidebar">

                <div class="usuario">
                    <img src="assets/img/catanacomics.svg" alt="" />
                    <div class="texto">
                        <strong>catanacomics</strong>
                        Catana
                    </div>
                </div>

                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>
                    <div class="sugestoes">
                        <Sidebar />
                    </div>

                    <div class="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                    </div>

                    <div class="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>
        </div>
    )
}
function Stories() {
    const stories = [
        {
            imagem: "assets/img/9gag.svg",
            usuario: "9gag"
        }, {
            imagem: "assets/img/meowed.svg",
            usuario: "meowed"
        }, {
            imagem: "assets/img/barked.svg",
            usuario: "barked"
        }, {
            imagem: "assets/img/nathanwpylestrangeplanet.svg",
            usuario: "nathanwpylestrangeplanet"
        }, {
            imagem: "assets/img/wawawicomics.svg",
            usuario: "wawawicomics"
        }, {
            imagem: "assets/img/respondeai.svg",
            usuario: "respondeai"
        }, {
            imagem: "assets/img/filomoderna.svg",
            usuario: "filomoderna"
        }, {
            imagem: "assets/img/memeriagourmet.svg",
            usuario: "memeriagourmet"
        }
    ]
    return (
        stories.map(story =>
            <div class="story">
                <div class="imagem">
                    <img src={story.imagem} alt={story.usuario} />
                </div>
                <div class="usuario">
                    {story.usuario}
                </div>
            </div>
        )
    )
}
function Posts() {
    const posts = [
        {
            imagem: "assets/img/meowed.svg",
            usuario: "meowed",
            conteudo: "assets/img/gato-telefone.svg",
            curtidasImg: "assets/img/respondeai.svg",
            curtidasUsuario: 'respondeai',
            curtidasNumero: "101.523"
        }, {
            imagem: "assets/img/barked.svg",
            usuario: "barked",
            conteudo: "assets/img/dog.svg",
            curtidasImg: "assets/img/adorable_animals.svg",
            curtidasUsuario: 'adorable_animals',
            curtidasNumero: "99.159"
        }
    ]

    return (
        posts.map(post =>
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={post.imagem} alt={post.usuario} />
                        {post.usuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={post.conteudo} alt={post.imagem} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={post.curtidasImg} alt="" />
                        <div class="texto">
                            Curtido por <strong>{post.curtidasUsuario}</strong> e <strong>outras {post.curtidasNumero} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
function Sidebar() {
    const sugestoes = [
        {
            imagem: "assets/img/bad.vibes.memes.svg",
            nome: "bad.vibes.memes"
        }, {
            imagem: "assets/img/chibirdart.svg",
            nome: "chibirdart"
        }, {
            imagem: "assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar"
        }, {
            imagem: "assets/img/adorable_animals.svg",
            nome: "adorable_animals"
        }, {
            imagem: "assets/img/smallcutecats.svg",
            nome: "smallcutecats"
        }
    ]
    return (
        sugestoes.map(sugestao =>
            <div class="sugestao">
                <div class="usuario">
                    <img src={sugestao.imagem} alt={sugestao.nome} />
                    <div class="texto">
                        <div class="nome">{sugestao.nome}</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        )
    )
}