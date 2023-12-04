import React from 'react';
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText})=>(
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center" > {text} </p>  
    <Link to={link} className="neo-brutalism-white neo-btn" >
      {btnText}
      <img src={arrow} className="w-4 h4 object-contain" />
    </Link>
  </div>
)

const renderContent ={
  1:(
    <h1 className="sm:text-xl s:leading-snug text-center
     neo-brutalism-blue py-4 px-8 text-white mx-5 ">
       Hi， I am <span className="font-semibold"> Shuang Xu </span> 👋
       <br/>
       A Software Engineer from Monash University
     </h1>
  ),
  2:(
    <InfoBox 
      text ="Experience with different technologies and languages"
      link="/about"
      btnText="Learn more"
    />
  ),
  3:(
    <InfoBox 
      text ="Make different amazing projects"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4:(
    <InfoBox 
      text ="Need a Developer or a bralliant "
      link="/contact"
      btnText="Let's talk"
    />
  ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo