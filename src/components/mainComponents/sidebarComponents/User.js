export default function User() {
    const user = [{
        image: "assets/img/catanacomics.svg",
        name: "catanacomics",
        atSymbol: "Catana"
    }
    ]
    return (
        <div class="usuario">
            <img src={image} alt={atSymbol} />
            <div class="texto">
                <strong>{name}</strong>
                {atSymbol}                
            </div>
        </div>
    )

}