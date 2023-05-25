/* eslint-disable react/prop-types */

export default function Footer({ situation, sessao, dados }){
    if(situation==="desativado"){
        return null;
    }else{
       
        const { id, title, posterURL } = dados;
    
        return(
    
                <footer className={`${situation}`}>
                    <figure key={id}>
                        <img src={posterURL} alt={title}/>
                        <figcaption>
                            <h4>
                                {title}
                            </h4>
                            <h4>{sessao? sessao : ''}
                            </h4>             
                        </figcaption>
                    </figure>
                </footer>
        
        )
    }
}