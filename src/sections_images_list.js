import model1 from './images/models/model1.png'
import model2 from './images/models/model2.png'
import model3 from './images/models/model3.png'
import model4 from './images/models/model4.png'
import maternity1 from './images/maternity/maternity1.png'
import maternity2 from './images/maternity/maternity2.png'
import maternity3 from './images/maternity/maternity3.png'
import maternity4 from './images/maternity/maternity4.png'
import freestyle1 from './images/freestyle/freestyle1.jpg'
import freestyle2 from './images/freestyle/freestyle2.jpg'
import freestyle3 from './images/freestyle/freestyle3.jpg'
import freestyle4 from './images/freestyle/freestyle4.jpg'
import freestyle5 from './images/freestyle/freestyle5.jpg'
import freestyle6 from './images/freestyle/freestyle6.jpg'
import freestyle7 from './images/freestyle/freestyle7.jpg'
import freestyle8 from './images/freestyle/freestyle8.jpg'
// 
import baby1 from './images/babies/baby1.jpg'
import baby2 from './images/babies/baby2.jpg'
import baby3 from './images/babies/baby3.jpg'
import baby4 from './images/babies/baby4.jpg'
import cosmetic1 from './images/cosmetics/cosmetic1.png'
import cosmetic2 from './images/cosmetics/cosmetic2.png'
import cosmetic3 from './images/cosmetics/cosmetic3.png'
import cosmetic4 from './images/cosmetics/cosmetic4.png'
import poster1 from './images/posters/poster1.png'
import poster2 from './images/posters/poster2.png'
import poster3 from './images/posters/poster3.png'
import poster4 from './images/posters/poster4.png'
import food1 from './images/food/food1.png'
import food2 from './images/food/food2.png'
import food3 from './images/food/food3.png'
import food4 from './images/food/food4.png'
import drink1 from './images/drinks/drink1.png'
import drink2 from './images/drinks/drink2.png'
import drink3 from './images/drinks/drink3.png'
import drink4 from './images/drinks/drink4.png'
import war1 from './images/war/war5.jpg'
import war2 from './images/war/war1.jpg'
import war3 from './images/war/war2.jpg'
import war4 from './images/war/war3.jpg'
import war5 from './images/war/war4.jpg'
import car1 from './images/cars/car1.jpg'
import car2 from './images/cars/car2.jpg'
import car3 from './images/cars/car3.jpg'


var section1_info="taken by mazyad aljaramani";
var section2_info="taken by mazyad aljaramani";
var section3_info="taken by mazyad aljaramani";
var section4_info="taken by mazyad aljaramani";
var section5_info="taken by mazyad aljaramani";
var section6_info="taken by mazyad aljaramani";
var section7_info="taken by mazyad aljaramani";
var section8_info="taken by mazyad aljaramani";
var section9_info="taken by mazyad aljaramani";
var section10_info="taken by mazyad aljaramani";




export const sections_images_list=[
    {
        section_id:'section1',
        section_name:'MODELS',
        fullScreen_div:'fullScreen_div1',
        key:1,
        images:[
            {image_id:'model1',image_src:model1,image_info:section1_info},
            {image_id:'model2',image_src:model2,image_info:section1_info},
            {image_id:'model3',image_src:model3,image_info:section1_info},
            {image_id:'model4',image_src:model4,image_info:section1_info}
        ]
    },
    {
        section_id:'section2',
        section_name:'MATERNITY',
        fullScreen_div:'fullScreen_div2',
        key:2,
        images:[
            {image_id:'maternity1',image_src:maternity1,image_info:section2_info},
            {image_id:'maternity2',image_src:maternity2,image_info:section2_info},
            {image_id:'maternity3',image_src:maternity3,image_info:section2_info},
            {image_id:'maternity4',image_src:maternity4,image_info:section2_info}
        ]
    },
    {
        section_id:'section3',
        section_name:'FREESTYLE',
        fullScreen_div:'fullScreen_div3',
        key:3,
        images:[
            {image_id:'freestyle1',image_src:freestyle1,image_info:section3_info},
            {image_id:'freestyle2',image_src:freestyle2,image_info:section3_info},
            {image_id:'freestyle3',image_src:freestyle3,image_info:section3_info},
            {image_id:'freestyle4',image_src:freestyle4,image_info:section3_info},
            {image_id:'freestyle5',image_src:freestyle5,image_info:section3_info},
            {image_id:'freestyle6',image_src:freestyle6,image_info:section3_info},
            {image_id:'freestyle7',image_src:freestyle7,image_info:section3_info},
            {image_id:'freestyle8',image_src:freestyle8,image_info:section3_info}
        ]
    },
    {
        section_id:'section4',
        section_name:'BABIES',
        fullScreen_div:'fullScreen_div4',
        key:4,
        images:[
            {image_id:'baby1',image_src:baby1,image_info:section4_info},
            {image_id:'baby2',image_src:baby2,image_info:section4_info},
            {image_id:'baby3',image_src:baby3,image_info:section4_info},
            {image_id:'baby4',image_src:baby4,image_info:section4_info}
        ]
    },
    {
        section_id:'section5',
        section_name:'COSMETICS',
        fullScreen_div:'fullScreen_div5',
        key:5,
        images:[
            {image_id:'cosmetic1',image_src:cosmetic1,image_info:section5_info},
            {image_id:'cosmetic2',image_src:cosmetic2,image_info:section5_info},
            {image_id:'cosmetic3',image_src:cosmetic3,image_info:section5_info},
            {image_id:'cosmetic4',image_src:cosmetic4,image_info:section5_info}
        ]
    },
    {
        section_id:'section6',
        section_name:'POSTERS',
        fullScreen_div:'fullScreen_div6',
        key:6,
        images:[
            {image_id:'poster1',image_src:poster1,image_info:section6_info},
            {image_id:'poster2',image_src:poster2,image_info:section6_info},
            {image_id:'poster3',image_src:poster3,image_info:section6_info},
            {image_id:'poster4',image_src:poster4,image_info:section6_info}
        ]
    },
    {
        section_id:'section7',
        section_name:'FOOD',
        fullScreen_div:'fullScreen_div7',
        key:7,
        images:[
            {image_id:'food1',image_src:food1,image_info:section7_info},
            {image_id:'food2',image_src:food2,image_info:section7_info},
            {image_id:'food3',image_src:food3,image_info:section7_info},
            {image_id:'food4',image_src:food4,image_info:section7_info}
        ]
    },
    {
        section_id:'section8',
        section_name:'DRINKS',
        fullScreen_div:'fullScreen_div8',
        key:8,
        images:[
            {image_id:'drink1',image_src:drink1,image_info:section8_info},
            {image_id:'drink2',image_src:drink2,image_info:section8_info},
            {image_id:'drink3',image_src:drink3,image_info:section8_info},
            {image_id:'drink4',image_src:drink4,image_info:section8_info}
        ]
    },
    {
        section_id:'section9',
        section_name:'REMMANTS OF WAR',
        fullScreen_div:'fullScreen_div9',
        key:9,
        images:[
            {image_id:'war1',image_src:war1,image_info:section9_info},
            {image_id:'war2',image_src:war2,image_info:section9_info},
            {image_id:'war3',image_src:war3,image_info:section9_info},
            {image_id:'war4',image_src:war4,image_info:section9_info},
            {image_id:'war5',image_src:war5,image_info:section9_info}

        ]
    },
    {
        section_id:'section10',
        section_name:'CARS',
        fullScreen_div:'fullScreen_div9',
        key:9,
        images:[
            {image_id:'car1',image_src:car1,image_info:section10_info},
            {image_id:'car2',image_src:car2,image_info:section10_info},
            {image_id:'car3',image_src:car3,image_info:section10_info},

        ]
    },
  
]