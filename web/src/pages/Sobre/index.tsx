import './styles.css'
import equipe from '../../assets/images/equipe.png'

 export default function Sobre(){
    return(
        <main className='main-sobre'>
            <h1 className='titulo-sobre'><span>Departamento </span>de Proteção à <em>Fauna</em> Silvestre e <span>Bem-Estar</span> <em>Animal</em></h1>

            <div className='conteudo-sobre'>
                <img className='equipe' src={equipe}/>

                <div className='sobre-equipe'>
                    <p>A equipe criada em 10 de Junho de 2021 já realizou mais de 1891 resgates de animais, atuou em mais de 243 casos de maus tratos aos animais e conseguiu um lar para mais de 171 animais de rua. Apenas no mês de Abril passaram 
                        424 animais pelo o Departamento
                    </p>
                    <p>O DPFAUNA realiza diversos serviços a comunidade animal como a castração, atendimento de urgencia, ocorrencias de maus-tratos e o resgate de animais silvestres.Alem disso o Departamento faz palestra nas escolas publicas de Ribeirão Pires, onde os alunos podem
                        ter um contato com animais da fauna silvestres da estancia e ainda aprender sobre a importancia da conservação
                    </p>
                    <p>Alem dos casos atendidos no Departamento a equipe conta com o castramovel, que é uma van veterinaria que ja realizoumais de 1300 processos de castrações em cães e gatos, totalmente gratuitos</p>
                </div>

                <div className='galeria'>
                    <h2></h2>
                </div>
            </div>

        </main>
    )
 }