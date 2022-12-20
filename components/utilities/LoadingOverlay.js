import React from "react";
import { Segment, Dimmer, Loader } from "semantic-ui-react";


const LoadingOverlay = (props) => {
 return (
   <Segment>
     <Dimmer active={props.active} inverted>
       <Loader style={{ fontSize: "25px", top: "150px" }}>
         Loading
       </Loader>
     </Dimmer>
     {props.children}
   </Segment>
 );
}

export default LoadingOverlay;