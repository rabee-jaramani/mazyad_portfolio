import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";


export const animate_header_elements=()=>{
    var header_elements_t=gsap.timeline();
    var image_div=document.querySelector('.image-div')
    var name=document.querySelector('.name')
    var job=document.querySelector('.job')
    var sign_div=document.querySelector('.sign')
    var link1=document.querySelector('.link1')
    var link2=document.querySelector('.link2')
    var link3=document.querySelector('.link3')
    var link4=document.querySelector('.link4')
    var duration=0.2;
    header_elements_t
    .from(image_div,{opacity:0,duration:duration,delay:3})
    .from(name,{opacity:0,duration:duration})
    .from(job,{opacity:0,duration:duration})
    .from(sign_div,{opacity:0,width:"800px",duration:duration+1})
    .from(link1,{opacity:0,duration:duration})
    .from(link2,{opacity:0,duration:duration})
    .from(link3,{opacity:0,duration:duration})
    .from(link4,{opacity:0,duration:duration})
  }
  

// FUNCTION CREATE SCROLL TRIGGER FUNCTION TAKES (ELEMENT, TIMELINE)
const scroll_trigger_time_lines=(trigger,timeline)=>{
    ScrollTrigger.create({
      trigger: trigger,
      start: "100px center",
      markers: true,
      onEnter: () => timeline.play(),
      onLeaveBack: () => timeline.reverse(),
      onRefreshInit: ()=> timeline.reverse()
    })
  }


  export const animate_light_gsap=()=>{
    // defiine time line for each section
    var header_t=gsap.timeline();
    var section1_t = gsap.timeline();
    var section2_t = gsap.timeline();
    var section3_t = gsap.timeline();
    var section4_t = gsap.timeline();
    var section5_t = gsap.timeline();
    var section6_t = gsap.timeline();
    var section7_t = gsap.timeline();
    var section8_t = gsap.timeline();

    // refernces for all elements that you want to animate
    var header=document.getElementById('header');
    var section1=document.getElementById('section1');
    var section2=document.getElementById('section2');
    var section3=document.getElementById('section3');
    var section4=document.getElementById('section4');
    var section5=document.getElementById('section5');
    var section6=document.getElementById('section6');
    var section7=document.getElementById('section7');
    var section8=document.getElementById('section8');

    // define a scroll trigger
    gsap.registerPlugin(ScrollTrigger)
    var duration=1;
    // CONFIGURE THE ANIMATION FOR EACH ELEMENT TIMELINE
    header_t.from(header,{filter:"brightness(0.1)",duration:duration,delay:2})

    // animate section 1 and its images
    section1_t.from(section1,{filter:"brightness(0.1)",duration:duration})

    // animate section 2
    section2_t.from(section2,{filter:"brightness(0.1)",duration:duration})
   
    
    // animate section 3
    section3_t.from(section3,{filter:"brightness(0.1)",duration:duration})
    

    // animate section 4
    section4_t.from(section4,{filter:"brightness(0.1)",duration:duration})
    // animate section 5
    section5_t.from(section5,{filter:"brightness(0.1)",duration:duration})
   
    // animate section 6
    section6_t.from(section6,{filter:"brightness(0.1)",duration:duration})
   
    // animate section 7
    section7_t.from(section7,{filter:"brightness(0.1)",duration:duration})  
    // animate section 8
    section8_t.from(section8,{filter:"brightness(0.1)",duration:duration})
  
    // CALL SCROLL TRIGGER FUNCTION FOR EACH ELEMENT
    scroll_trigger_time_lines(section1,section1_t);
    scroll_trigger_time_lines(section2,section2_t);
    scroll_trigger_time_lines(section3,section3_t);
    scroll_trigger_time_lines(section4,section4_t);
    scroll_trigger_time_lines(section5,section5_t);
    scroll_trigger_time_lines(section6,section6_t);
    scroll_trigger_time_lines(section7,section7_t);
    scroll_trigger_time_lines(section8,section8_t);

  }
    