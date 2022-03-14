export default function Sidebar() {
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