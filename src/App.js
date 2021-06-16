import React from "react";
// import gsap from "gsap/gsap-core";
// import { ScrollTrigger } from "gsap/all";
import Section from "./Section";
import Header from "./Header";
import Menu from './Menu'
import Footer from "./Footer";
import {animate_header_elements,animate_light_gsap} from './animate_functions'
import {sections_images_list} from './sections_images_list'
import './style.sass'
import './section.sass'
import './header.sass'
import './menu.sass'
import './footer.sass'
import './image.sass'
import { gsap, ScrollTrigger } from "gsap/all";


class App extends React.Component {

  
  componentDidMount(){
    // there is an issue with scrolltrigger in production phase
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
    
// call animation function
console.log("INER width "+window.innerWidth);
if(window.innerWidth>450){
  if(!/Edge/.test(navigator.userAgent))
  animate_light_gsap()     
}
// Animate header elements
      animate_header_elements()
  }

  render(){
  return (
    <div className="App">
      <Menu/>
      <Header/>
      {sections_images_list.map((elem)=>{
        return(
      <Section 
        section_id={elem.section_id}
        section_name={elem.section_name}
        key={elem.key}
        images={elem.images}
        fullScreen_div={elem.fullScreen_div}
      />
        )
      })}
      <Footer/>
    </div>
  );
}
}
export default App;
