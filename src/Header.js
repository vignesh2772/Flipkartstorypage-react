import React from 'react';
import logo from './assets/logo.png';
import footer from './assets/footer.png';
import discover from './assets/discover.png';
import navbar from './assets/navbar.png';
import rewind from "./assets/rewind.png";
import Covid19 from "./assets/Covid19.jpg";
import notification from "./assets/notification.png";
import flipkartimpact from "./assets/flipkartimpact.png";
import language from "./assets/language.png";
import customerfirst from "./assets/customerfirst.png";
import review from "./assets/review.png";
import bottomlink from "./assets/bottomlink.png";
import sellerstory from "./assets/sellerstory.jpg";
import social from "./assets/social.png";
import SocialFollow from "./SocialFollow";
import Slideshow from './Slide';



function Header (){
    return( 
<div> 
        <div class="main"> 
    
           
                <div className="medialogo">
                    <img src={logo} alt="logo" />
                    
                </div>                   
            
            {/*<img src={navbar} alt="navbar-page" className="navbar-page"/>*/}
            <Slideshow class="submain"/>
            <img src={navbar} alt="navbar" class="navimage"/>
            
            <img src={sellerstory} alt="sellerstory" class="submain"/>
            <p className="line"><hr/> 2020 IN REVIEW  <hr/></p> 
            <img src={review} alt="review" class="submain" /><br/> 
            <div class="wrapper">
            <button class="button">VIEW ALL</button>
            </div>       
            <br/><img src={Covid19} alt="covid19" class="submain"/>
            <p className="line"><hr/> FLIPKART IMPACT  <hr/></p> 
            <img src={flipkartimpact} alt="flipkartimpact" class="submain" />
            <div class="wrapper">
            <button class="button">VIEW ALL</button>
            </div>
            <p className="line"><hr/> CUSTOMER FIRST  <hr/></p> 
            <img src={customerfirst} alt="customerfirst" class="submain" />
            <div class="wrapper">
            <button class="button">VIEW ALL</button>
            </div>
            <img src={rewind} alt="rewind" class="image"/>
            <p className="line"><hr/>INTRODUCING REGIONAL LANGUAGE<hr/></p> 
            <img src={language} alt="language" class="submain" />
            <div class="wrapper">
            <button class="button">VIEW ALL</button>
            </div>
            <img src={discover} alt="discover" class="image"/>
            <br/>
            <img src={footer} alt="footer" class="bottom" />
            <img src={notification} alt="notification" class="bottom-notofication" />
            <div className="bottomfix">
            <img src={bottomlink} alt="bottomlink" class="bottomlink-image" />
            </div>
        </div>
        
       </div>
        
    )
}

export default Header;