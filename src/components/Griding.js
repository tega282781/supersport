import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Griding.css";


const Griding = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
         <div className="griding">
            <div data-aos="fade-up" className="container">

                <div className="griding1">
                <img src='./images/hazard.jpg' alt=''/>
                <h5>Eden Hazard retires from  National Team duty.</h5>
                <h6>
                    After Belgium disappointing 2022 worldcup appearance, 
                    Eden Hazard has decided to call it quit on this National team career.
                    He is now focused on his Real Madrid career after losing his place on the first eleven. 
                    He fell down the pecking order.  
                </h6>
                </div>

                <div className="griding1">
                <img src='./images/amrabat.jpg' alt=''/>
                <h5>Sofyan Amrabat Impresses</h5>
                <h6>I guess its going to be a busy transfer window. The Fiorentina Player has been amazing so far, he has shown to the world what he is made off
                    and so many elite europe clubs are after him at the moment. He helped his country Morocco get to the semi
                    final. 
                </h6>
                </div>

                <div className="griding1">
                <img src='./images/oshimen.jpg' alt=''/>
                <h5>Manchester United in need of a striker?</h5>
                <h6>
                    After the surprising departure of Cristiano Ronaldo, Manchester United should be looking to 
                    get themselves a striker in the january transfer window. Already they have their eyes on Cody Gakpo of PSV
                    But another they should be looking at is Victor Oshimen of Napoli, the striker has been  brilliant so far.
                </h6>
                </div>

            </div>
            </div> 

        </>
    )
}

export default Griding;