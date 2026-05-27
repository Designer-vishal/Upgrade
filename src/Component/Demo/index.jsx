import React , {useState} from 'react';
import './demo.css';
const Demo = () => {
    
    const [SelectTitleColor, SetTitleColor] = useState('black');
    const menuItems = ['Home', 'About', 'Services', 'Contact'];
    

  return (
    <>
        <div className="container">
            <h1 id="welcome-title" style={{color: SelectTitleColor}}>Welcome Designer</h1>
            <div className="color-container-btn">
                <button className="color-btn" onClick={()=> SetTitleColor('red')}>Red</button>
                <button className="color-btn" onClick={()=> SetTitleColor('blue')}>Blue</button>
            </div>
            <hr/>
            <ul className="menu">
                {
                    menuItems.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    </>
  )
}
export default Demo;