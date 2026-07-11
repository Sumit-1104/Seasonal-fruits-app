
import React from "react";

const Menucard = ({ menudata }) => {
//   console.log(menudata);
  return (
    <div>
      <seaction className="main-card--cointainer">
        {
           menudata.map((curelem)=>( 
              <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{curelem.id}</span>
            <span className="card-author subtle">{curelem.category}</span>
            <h2 className="card-title">{curelem.name}</h2>
            <span className="card-description subtle">
              On Instagram, post a picture of your space before you moved in and
              started your restaurant. In the caption, talk about why you chose
              that location – was it the connection to the community or its
              proximity to fresh, local produce? Tell similar stories about the
              logo you chose or the name of your restaurant. You know these
              stories – your audience doesn’t. Share them.
            </span>
            <div className="card-read">Read </div>
          </div>
          
        </div>
      </div>   
            ))
        }
      
      </seaction>
    </div>
  );
};
export default Menucard;