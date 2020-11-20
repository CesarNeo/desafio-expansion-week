import React from 'react';
import './assets/css/LandingPage.css';
import headerImage from './assets/images/criatividade.png';
import imageCreativity from './assets/images/pensar-fora-da-caixa.png'
import imageDevCreativity from './assets/images/designer-grafico.png';
import './assets/css/Animations.css'

export default function LandingPage() {
    return( 
        <>
        <div id="container">
            <header className="animate-up">
                <div id="text-header">
                <h1>Criatividade, você precisar dessa Soft Skill!!</h1>
                    <p>
                        "Existe uma essência que habita todos nós, e é responsável pelas mais variadas transformações, desde o segredinho na receita do jantar até o surgimento de grandes empresas inspiradoras. Criatividade não é genética, não é dom, sorte, muito menos magia. Ser criativo é ser autêntico e inovador."
                        <span>Fonte: <a href="https://rockcontent.com/br/blog/criatividade/" target="_blank">https://rockcontent.com/br/blog/criatividade/</a></span>
                    </p>
                </div>
            </header>
            <main>
                <h2>
                    Primeiramente vamos entender o que é criatividade 
                    <img src={imageCreativity}/>
                </h2>
                <p>
                    A criatividade não é um dom, mas uma habilidade do ser humano ligada à nossa capacidade de invenção, reinvenção e inovação. Assim como qualquer competência, é possível praticar a criatividade para despertá-la e desenvolvê-la, tornando-se uma pessoa mais criativa.
                </p>
                <h2>
                    Porque você que é um desenvolvedor precisa dessa soft skill?
                    <img src={imageDevCreativity}/>
                </h2>
                <p>
                    Se você é um dev, a criatividade faz parte de uma das habilidades fundamental para resolvermos novos problemas e conseguir criar novas soluções.
                </p>
                <p>
                    E se você acha que não tem criatividade,<span> você esta muito enganado!!</span>.
                    Na verdade você só não está praticando ela, por isso não perca as experanças, logo você terá essa habilidade, se treinar ela.
                    <br/><br/>
                    Por isso eu mais que recomendo você desenvolver essa habilidade, <span>você precisa dessa habilidade agora!!</span>
                </p>
                <p>
                    Mas se você ainda está inseguro com relação a como ter essa soft skill, veja esse video abaixo muito delicinha e feito de uma forma divertida que mostra como ter mais criatividade na hora de programar:
                </p>
                <div id="video-link">
                    <iframe width="100%" height="265" src="https://www.youtube.com/embed/GPEmREpUs0A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </main>
        </div>
        </>
    )
}

