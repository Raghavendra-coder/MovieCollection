import React from 'react';
import Cards from './Cards';
import './index.css';
import Sdata from './Sdata';

  function App(){
    return ( <> 
    <h1>Some of the BEST Movies You Should Watch</h1>
     <Cards
     imgsrc={Sdata[0].imgsrc}
     title={Sdata[0].title}
     sname={Sdata[0].sname}
     link={Sdata[0].link}

     
    />
     <Cards
      imgsrc={Sdata[1].imgsrc}
     title={Sdata[1].title}
     sname={Sdata[1].sname}
     link={Sdata[1].link}

    />
    <Cards
    imgsrc={Sdata[2].imgsrc}
     title={Sdata[2].title}
     sname={Sdata[2].sname}
     link={Sdata[2].link}
  
    />
     <Cards
     imgsrc={Sdata[3].imgsrc}
     title={Sdata[3].title}
     sname={Sdata[3].sname}
     link={Sdata[3].link}
 
    />
     <Cards
      imgsrc={Sdata[4].imgsrc}
     title={Sdata[4].title}
     sname={Sdata[4].sname}
     link={Sdata[4].link}

       />
     <Cards
     imgsrc={Sdata[5].imgsrc}
     title={Sdata[5].title}
     sname={Sdata[5].sname}
     link={Sdata[5].link}

      />
    </>);
  }
  export default App;