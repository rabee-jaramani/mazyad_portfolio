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
    .from(image_div,{opacity:0,duration:duration,delay:1})
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

    // refernces for all elements that you want to animate
    var header=document.getElementById('header');
    var section1=document.getElementById('section1');
    var section2=document.getElementById('section2');
    var section3=document.getElementById('section3');

    // define a scroll trigger
    gsap.registerPlugin(ScrollTrigger)

    // CONFIGURE THE ANIMATION FOR EACH ELEMENT TIMELINE
    header_t.to(header,{filter:"brightness(1.2)",duration:1.5,delay:2})

    // animate section 1
    section1_t.to(section1,{filter:"brightness(1.2)",duration:1.5})
    // animate section 2
    section2_t.to(section2,{filter:"brightness(1.2)",duration:1.5})
    // animate section 3
    section3_t.to(section3,{filter:"brightness(1.2)",duration:1.5})

    // CALL SCROLL TRIGGER FUNCTION FOR EACH ELEMENT
    scroll_trigger_time_lines(section1,section1_t);
    scroll_trigger_time_lines(section2,section2_t);
    scroll_trigger_time_lines(section3,section3_t);

  }
    