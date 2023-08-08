import "./styles.css"
import banner2 from '../../assets/images/banner-2.png'


export default function Banner(){
    return(
        <main>
            <section className="cont">
                <ul>
                    <li className="title1">
                    BEM VINDO!
                   </li>
                    <li className="title2">
                    <span className="azulao">Participe</span> da nossa <span className="laranjao">pesquisa,</span> <br/> 
                    <span className="laranjao">Cadastre</span> um <span className="azulao">bichinho!</span> 
                    </li>
                    <li className="title3">
                    Responda ao nosso formulário de censo para a contribuição da coleta de dados 
                    sobre a situação dos cães e gatos da cidade de Ribeirão Pires 
                    </li>
                </ul>
                <img src={banner2} alt="banner" className="foto" />
            </section>
        </main>
    )
}