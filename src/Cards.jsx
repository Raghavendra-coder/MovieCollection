import React from 'react';
function Cards(prop){
    return (<div className="cards">
      <div className="card">
         <img src={prop.imgsrc}alt="not found" className="card__img"/>
            <div className="cards_info">
               <span className="card_category">{prop.title}</span>
                  <h2 className="card_name">{prop.sname}</h2>
                     <a href={prop.link} target="_lund">
                        <button>Watch Now</button>
                     </a>
           </div>
     </div>
    </div>);      
    }
    export default Cards;