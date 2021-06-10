import React from "react";
// import gsap from "gsap/gsap-core";
// import { ScrollTrigger } from "gsap/all";
import Section from "./Section";
import Header from "./Header";
import {animate_header_elements,animate_light_gsap} from './animate_functions'
import {social_list} from './images_lists'
import './style.sass'
import './section.sass'
import './header.sass'
import { gsap, ScrollTrigger } from "gsap/all";


class App extends React.Component {
  // List of sections id to use them for light animation and merg them with images realated to each section
  list=[
    {sec_id:'section1',key:1,social_list},
    {sec_id:'section2',key:2,social_list},
    {sec_id:'section3',key:3,social_list}
  ]

  
  componentDidMount(){
    // there is an issue with scrolltrigger in production phase
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // notice "resize" isn't in the list
    });
// call animation function
      animate_light_gsap()

// Animate header elements
      animate_header_elements()

  }

  render(){
  return (
    <div className="App">
      <Header/>
      {this.list.map((elem)=>{
        return(
      <Section sec_id={elem.sec_id} images_list={social_list} key={elem.key}/>
        )
      })}
    </div>
  );
}
}
export default App;
