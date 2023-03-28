import "../components/tabs.css"
import { useContext } from "react"
import { TabContext } from "../App";
import publish from "../assets/img/publish.svg"
import reply from "../assets/img/reply.svg"
import analyze from "../assets/img/analyze.svg"


export const TabPanel = () => {
    
    const {activeIndex, setActiveIndex} = useContext(TabContext);

    const handleClick = (index) => {
        setActiveIndex(index)
        console.log("hola")
      }

    return(
        <div className="container"> 
            <div className="box-tabs">
             <button 
             className={activeIndex === 0 ? "tabs active-tabs": "tabs"}
             onClick={()=>{handleClick(0)}}>Publish</button>
            <button
            className={activeIndex === 1 ? "tabs active-tabs": "tabs"}
            onClick={()=>{handleClick(1)}}>Reply</button>
            <button
            className={activeIndex === 2 ? "tabs active-tabs": "tabs"}
            onClick={()=>{handleClick(2)}}>Analyze</button>
                
            </div>

            <div className="content-tabs">
                <div 
                className={activeIndex === 0 ? "content active-content" : "content"}> 
                    <div className="div-contentTabs">
                        <img src={publish} alt="img-analyze" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            
                <div 
                className={activeIndex === 1 ? "content active-content" : "content"}> 
                    <div className="div-contentTabs">
                        <img src={reply} alt="img-analyze" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>

                <div 
                className={activeIndex === 2 ? "content active-content" : "content"}>
                    <div className="div-contentTabs">
                        <img src={analyze} alt="img-analyze" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            
            </div>
        </div>

    )
}


