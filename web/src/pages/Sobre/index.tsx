import './styles.css'
import equipe from '../../assets/images/equipe.png'
import f1 from '../../assets/images/1.jpg'
import f2 from '../../assets/images/2.jpg'
import f3 from '../../assets/images/3.png'
import f4 from '../../assets/images/4.jpg'
import f5 from '../../assets/images/5.jpg'
import f6 from '../../assets/images/6.jpg'
import f7 from '../../assets/images/7.jpg'
import f8 from '../../assets/images/8.jpg'

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
            </div>
                <div className='galeria'>
                    <h2 className='titulo-galeria'>Um <span>pouco</span> do <em>nosso</em> trabalho</h2>

                    <div className='fotos'>
                        <div className='foto-1'>
                            <img className='f' src={f1} alt="" />
                            <div className='legenda'>
                                    <p>Dia de EcoAção na Escola São José</p>
                                    <p>Dia dos estudantes terem a chance de se conectar com a fauna da Mata Atlântica, conhecendo de pertinho animais como cobras e lagartos. A biodiversidade é incrível e merece ser protegida! 
                                    Dessa vez, a EcoAção foi no Colégio São José, dia repleto de aprendizado sobre o meio ambiente e em parceria com a escola, encerramos a emocionante EcoAção, promovida pela Secretaria Municipal de Meio Ambiente (DPFAUNA).
                                </p>
                            </div>
                        </div>

                        <div className='foto-1'>
                            <div className='legenda l2'>
                                <p>Após averiguação de possível maus-tratos, a equipe DPFAUNA averiguou que na vdd era uma cachorra comunitária que uma senhora cuidava, mas dava muitas crias por ter acesso a rua.. Acionado a nossa Equipe de Emergência com nossa Ambulância Animal (SARUÊ) para fazer a castração dessa cachorra.
                                    Missão dada é missão cumprida!!!!
                                </p>
                            </div>
                            <img className='f' src={f2} alt="" />
                        </div>
                        
                        <div className='foto-1'>
                            <img className='f' src={f3} alt="" />
                            <div className='legenda'>
                                    <p>Esse Nenezão veio tomar vacina… para quem não sabe, ele é um dos 60 cães resgatados do canil clandestino, vítima de maus tratos.. hoje ele está em novo lar e já está gordinho assim… quem viu e quem vê !!!!</p>
                            </div>
                        </div>

                        <div className='foto-1'>
                            <div className='legenda l2'>
                                    <p>Mais um dia da equipe cuidando da fauna silvestre para o bem da nossa cidade de Ribeirao Pires</p>
                            </div>
                            <img className='f' src={f4} alt="" />
                        </div>

                        
                    </div>
                </div>

        </main>
    )
 }