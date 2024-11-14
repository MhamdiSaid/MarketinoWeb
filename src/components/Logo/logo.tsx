import "./logo.css";
import React from 'react';

export default function Logo({width,height,src}:{width:number,height:number,src:string}){


    return(
        <div className="Store-logo" style={{"--mywidth":`${width}em`,"--myheight":`${height}em`}as any}>
            <img src={src} alt="Store's Logo"/>
        </div>
      
    );
}