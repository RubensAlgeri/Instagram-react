export default function Posts() {
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