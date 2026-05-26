import React , {useEffect} from 'react';
import './demo.css';
const Demo = () => {
    useEffect(()=>{
        const WelcomeTitle = document.getElementById('welcome-title');
        console.log('WelcomeTitle', WelcomeTitle.innerHTML);
    },[]);

    const setSelectedColor = color =>{
        const Title = document.getElementById('welcome-title');;
        Title.style.color = color;
    }

  return (
    <>
        <div className="container">
            <h1 id="welcome-title">Welcome Designer</h1>
            <div className="color-container-btn">
                <button className="color-btn" onClick={()=> setSelectedColor('red')}>Red</button>
                <button className="color-btn" onClick={()=> setSelectedColor('blue')}>Blue</button>
            </div>
        </div>
    </>
  )
}
export default Demo;