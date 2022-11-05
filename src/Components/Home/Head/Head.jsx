import React from 'react'
import doctor from "../../../assets/online-doctor-appointment.svg";

//Styles
import "./Head.css";

export default function Head() {
  return (
    <div>
        <div className="HomeHead">
            <div className="HeadContent">
                <p className="HeadContentTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
                <p className='HeadContentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat, mollitia itaque voluptatum illo inventore autem sequi delectus assumenda optio dolorem fugit obcaecati exercitationem, hic quia cupiditate consectetur temporibus eius.</p>
                <div>
                    <button className="HeadContentButton">Get Consulted</button>
                </div>
            </div>
            <div className='HeadImage wobble-hor-top'> 
                <img src={doctor} alt="doctor"/>
            </div>
        </div>
    </div>
  )
}
