import React, { useState }  from 'react';
import "./AvExpert.scss";
import { Solve, AV, Essilor, Landing } from "../../dataPortfolio"; 


export default function TemplateProject () {
    const [dataPortfolio] = useState(Solve, AV, Essilor, Landing);
    
    return (
        <>   
        {dataPortfolio.map((dataPortfolio) => 
        <section key={dataPortfolio.id}>
        {/* Section porfolio header */}
<div className="modal__header modal__header-av">
    <div className="modal-header__text-box">
        <h1 className="heading-primary modal-header__title">{dataPortfolio.headTitle}</h1>
        <article className="modal-header__info-content">
        <p className="paragraph"><strong> {dataPortfolio.roleTitle} </strong> {dataPortfolio.role}</p>
        <p className="paragraph"><strong> {dataPortfolio.dateTitle} </strong> {dataPortfolio.date}</p>
        <p className="paragraph"><strong> {dataPortfolio.companyTitle} </strong> {dataPortfolio.company}</p>
        </article>
    </div>

</div>

<section className="modal__container">
{/* <!-- Section project info --> */}
<section className="modal__project-info">
    <article className="project-info__container">
        <img className="project-info__img" src="img/av-expert/project.svg" loading="lazy"  alt="AV Expert project"/>
        <div className="project-info__text-box">
            <span className="body-large">{dataPortfolio.subtitleResume}</span>
            <h3 className="heading-tertiary project-info__name">{dataPortfolio.titleResume}</h3>
            <p className="paragraph">{dataPortfolio.contentResume}</p>
        </div>
    </article>
</section>

{/* <!-- Section define --> */}
<section className="modal__define define">
    <article className="modal__text-box">
        <h2 className="heading-secondary modal__title">{dataPortfolio.titleIntroduction}</h2>
        <p className="paragraph modal__text">{dataPortfolio.contentIntroduction}</p>
    </article>
    <article className="define__boxes">
        
        <div className="define__box define__box--dark">
            <h3 className="heading-tertiary modal__title">Project Goals</h3>
            <ol>
                <ul className="define__goal-list">
                    <li className="paragraph define__goal-item">To become an useful tool to the Samsung promoters.</li>
                    <li className="paragraph define__goal-item">Develop an intuitive interface with relevant information.</li>
                    <li className="paragraph define__goal-item">Provide technical information about the different products and releases.</li>
                    <li className="paragraph define__goal-item">Create the selling tips section that allow the promoter to reinforce the sales speech.</li>
                </ul>
            </ol>
        </div>
        <div className="define__box">
            <h3 className="heading-tertiary modal__title">customer mindsets</h3>
            <div className="define__mindset-box">
                <span className="body-large">New promoters | “i want to know more about products”</span>
                <p className="paragraph">When they have doubts about products, they ask to their coworkers but  they want a tool to guide them in tech features.</p>
            </div>
            <div className="define__mindset-box">
                <span className="body-large">Experimented promoters | “a digital guide would be useful”</span>
                <p className="paragraph">Sometimes the technical references are limited to a printed guide, difficult to handle and to search quickly.</p>
            </div>
        </div>

    </article>
</section>
{/* <!-- Section ideate --> */}
<section className="modal__ideate">
    <article className="modal__text-box">
        <h2 className="heading-secondary modal__title">Ideate</h2>
        <p className="paragraph modal__text">We used different research tools with the UX team such user journeys, user empathy and interviews to help to understand their needs, motivations and frustrations, based on it, we have identified relevant points to improve.</p>
    </article>

        <picture>
            <source srcSet="https://sebgraph.co/img/thumbnail-solve-for-tomorrow.png" media="(max-width:900px)"/>
            <img className="modal__img-complete" src="img/av-expert/ideate.png" loading="lazy"  alt="ideate"/>
        </picture>

  
</section>

{/* <!-- Section prototyping --> */}
<section className="modal__prototype prototype">
    <article className="modal__text-box">
        <h2 className="heading-secondary modal__title">Prototyping</h2>
        <p className="paragraph modal__text">I started the process identifying the current applications that the promoters have been using, the main problem is actually turn these apps in  tools that provided them value in their daily work, for this reason we focused in a news feed with releases and important communications, to learn and to search easily the prooducts and sales speech.</p>
    </article>

    <picture>
        <source srcSet="https://sebgraph.co/img/thumbnail-solve-for-tomorrow.png" media="(max-width:900px)"/>
        <img className="modal__img-complete" src="img/av-expert/prototyping.png" loading="lazy"  alt="prototyping"/>
    </picture>
    
    <picture>
        <source srcSet="https://sebgraph.co/img/thumbnail-solve-for-tomorrow.png" media="(max-width:900px)"/>
        <img className="modal__img-complete" src="img/av-expert/prototyping-onboarding.png" alt=""/>
    </picture>

    <picture>
        <source srcSet="https://sebgraph.co/img/thumbnail-solve-for-tomorrow.png" media="(max-width:900px)"/>
        <img className="modal__img-complete" src="img/av-expert/prototyping-home.png" loading="lazy"  alt=""/>
    </picture>

    <article className="prototype__text-img">
        <h3 className="heading-tertiary modal__title prototype__title">Keywords</h3>
        <p className="paragraph modal__text prototype__text">Sometimes the technical terms about different product categories are complex for the promoters, based on that we used keywords in chips that explains the topics deeply and show products and specific speeches related with each of the products.</p>
        <picture>
            <source srcSet="https://sebgraph.co/img/thumbnail-solve-for-tomorrow.png" media="(max-width:900px)"/>
            <img className="modal__img-complete" src="img/av-expert/prototyping-keyword.png" loading="lazy"  alt=""/>
        </picture>
    </article>

    <article className="prototype__text-img">
        <h3 className="heading-tertiary modal__title prototype__title">Advanced search</h3>
        <p className="paragraph modal__text prototype__text">Searching for products features represents a relevant point in the sales process, for this reason we categorize the words with specific products, keywords and family products, providing to the promoter different possibilities for quick search, besides that we used a tab bar button to faster access.</p>
        <picture>
            <source srcSet="https://sebgraph.co/img/thumbnail-solve-for-tomorrow.png" media="(max-width:900px)"/>
            <img className="modal__img-complete" src="img/av-expert/prototyping-advanced-search.png" loading="lazy"  alt=""/>
        </picture>
    </article>

    <article className="prototype__text-img">
        <h3 className="heading-tertiary modal__title prototype__title">product library</h3>
        <p className="paragraph modal__text prototype__text">The product library can be access through different sections in the app allowing the promoter search for all information about  references, the unique code named SKU and images to a visual reference also the technological features and technical features.</p>
        <picture>
            <source srcSet="https://sebgraph.co/img/thumbnail-solve-for-tomorrow.png" media="(max-width:900px)"/>
            <img className="modal__img-complete" src="img/av-expert/prototyping-product.png" loading="lazy"  alt=""/>
        </picture>

        <picture>
            <source srcSet="https://sebgraph.co/img/thumbnail-solve-for-tomorrow.png" media="(max-width:900px)"/>
            <img className="modal__img-complete" src="img/av-expert/prototyping-product2.png" loading="lazy" alt=""/>
        </picture>
    </article>

    <article className="prototype__text-img">
        <h3 className="heading-tertiary modal__title prototype__title">Comparative</h3>
        <p className="paragraph modal__text prototype__text">The comparative section is another relevant feature because it let the promoter to compare easily references, in this part we used a component that let the user select a product and see the direct competence but also the promoter is able to change both the Samsung products and the other brands products.</p>
        <picture>
            <source srcSet="img/av-expert/prototyping-comparative-mobile.png" media="(max-width:900px)"/>
            <img className="modal__img-complete" src="img/av-expert/prototyping-comparative.png" loading="lazy"  alt=""/>
        </picture>
    </article>
</section>

{/* <!-- Section visual design --> */}
<section className="modal__visual-design visual-design">
    <article className="modal__text-box">
        <h2 className="heading-secondary modal__title">Visual design</h2>
        <p className="paragraph modal__text">For the design system, I was based on brand values and developed a colour palette that identified the av category with a dark pattern with a gold color contrast that
            highlighted relevant information, also I defined a type scale with the Samsung fonts and developed components with these rules that provide consistency to the flow.</p>
    </article>

    <picture>
        <source srcSet="https://sebgraph.co/img/thumbnail-solve-for-tomorrow.png" media="(max-width:900px)"/>
        <img className="modal__img-complete" src="img/av-expert/visual-design-tipography-colors.png" loading="lazy"  alt=""/>
    </picture>

    <picture>
        <source srcSet="https://sebgraph.co/img/thumbnail-solve-for-tomorrow.png" media="(max-width:900px)"/>
        <img className="modal__img-complete" src="img/av-expert/visual-design-icons.png" loading="lazy"  alt=""/>
    </picture>

    <picture>
        <source srcSet="https://sebgraph.co/img/thumbnail-solve-for-tomorrow.png" media="(max-width:900px)"/>
        <img className="modal__img-complete" src="img/av-expert/visual-design-components.png" loading="lazy"  alt=""/>
    </picture>
    
</section>

{/* <!-- Ending --> */}
<section className="modal__other-projects end">
    <article className="modal__text-box">
        <hr className="end__line"/>
        <h2 className="heading-secondary modal__title end__text">Thank you</h2>
    </article>
</section>

</section>

</section>

        )}
        </>
        

        
        
       
        
    )
}
