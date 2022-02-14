import React from 'react';
import './Home.css';

function Home(props) {
  return(


   <div className="home">
       <h1 className="head">Blog Application</h1>
       <p>The world is animated by the wind. 
           This invisible, mysterious force can bring a landscape alive.
            Its absence can cast a calm stillness over the earth. 
            On barren mountain tops its power is barely perceptible; in forests and seas its 
            presence becomes manifest.
            Winds are wild, and sometimes destructive.</p>
            <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />

   </div>
     );
}

export default Home;
