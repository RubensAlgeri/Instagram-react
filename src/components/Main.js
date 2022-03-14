import Sidebar from "./mainComponents/Sidebar"
import Stories from "./mainComponents/Stories"
import Posts from "./mainComponents/Posts"
import User from "./mainComponents/sidebarComponents/User"

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
                <User />

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
