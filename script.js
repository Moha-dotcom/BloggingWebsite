
const viewcontent = document.querySelector('.viewbtn');
const hidecontent = document.querySelector('.hidebtn');

const cardimage = document.querySelectorAll(".card-image");

const content = document.querySelector('.card-container'); 
const element = document.querySelectorAll('.elements');
const topic = document.querySelectorAll('.topics');
const article = document.querySelectorAll('.line2');
const footerimage = document.querySelectorAll('.footer-image');

var image = [
  "images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg",
"images/gabriel-heinzer-g5jpH62pwes-unsplash.jpg", "images/james-harrison-vpOeXr5wmR4-unsplash.jpg", "images/pankaj-patel-Fi-GJaLRGKc-unsplash.jpg",
"images/roman-synkevych-vXInUOv1n84-unsplash.jpg", "images/vipul-jha-a4X1cdC1QAc-unsplash.jpg"
];


var advices = ['Self Improvement', 'Case Study', 'RelationShip', 'Data Science', 'Programming', 'Productivity'];

var contents = {
    images : {0: "images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg",
                1: "images/gabriel-heinzer-g5jpH62pwes-unsplash.jpg",
                2 : "images/james-harrison-vpOeXr5wmR4-unsplash.jpg",
                 3: "images/pankaj-patel-Fi-GJaLRGKc-unsplash.jpg",
                4: "images/roman-synkevych-vXInUOv1n84-unsplash.jpg", 
                5: "images/vipul-jha-a4X1cdC1QAc-unsplash.jpg"},

    advices : { 0 : 'Self Improvement' , 1: 'Case Study', 2 : 'RelationShip' , 3 : 'Data Science', 4: 'Programming', 5: 'Productivity' },
    topics : {

        0: "Why Mariupol Will Resist and Revive ",
        1: "The Gen X work problem ",
        2: "Avoiding the Power Trip",
        3: "Russian Occupants Didnt Understand Why They Captured Chornobyl Nuclear Power Plant",
        4: "17 Questions Tech Doesnt Want You Asking ",
        5: "AI Will Soon Put Creators Out of Work. How Should We Adapt? "

    }, 


    article : {
        0 : "But I was born in Mariupol. My family, including my grandpa and two grandmas, lived there their whole lives. When the war started, they didnt know the city was about to be surrounded. \
        My grandpa owns a car dealership in Mariupol. Once the war started he drove there and moved the cars to the backyard to hide them from the looters. He spent a few nights in his store, watching the cars. Once Russians started bombing the city heavily, he returned home.",

        1: "I think the easiest idea is just groom X to take over for Boomers. That would be logical. And dont fire X as much — its hard to get jobs north of 40. Millennials — well, younger millennials — still have time before theyre iced out of the workplace by ridiculous hiring assumptions. Older millennials are almost Gen X anyway (“xillenials”) and thats a different ballgame.",
        2 : "I was a member of the psychedelic counterculture in the 1980s when pretty much every mind-expanding substance was illegal. For us, that illegality was just an obstacle. Taking a psychedelic or growing a marijuana plant was not considered a stand against a draconian legal system and repressive government but simply a way of getting what we wanted in spite of a draconian legal system and repressive government.",
        3 : "But I was born in Mariupol. My family, including my grandpa and two grandmas, lived there their whole lives. When the war started, they didnt know the city was about to be surrounded.My grandpa owns a car dealership in Mariupol. Once the war started he drove there and moved the cars to the backyard to hide them from the looters. He spent a few nights in his store, watching the cars. Once Russians started bombing the city heavily, he returned home.",

        4: "I think the easiest idea is just groom X to take over for Boomers. That would be logical. And dont fire X as much — its hard to get jobs north of 40. Millennials — well, younger millennials — still have time before theyre iced out of the workplace by ridiculous hiring assumptions. Older millennials are almost Gen X anyway (“xillenials”) and thats a different ballgame.",
        5 : "I was a member of the psychedelic counterculture in the 1980s when pretty much every mind-expanding substance was illegal. For us, that illegality was just an obstacle. Taking a psychedelic or growing a marijuana plant was not considered a stand against a draconian legal system and repressive government but simply a way of getting what we wanted in spite of a draconian legal system and repressive government."
        
    },


    FImages : {
        0: "image/pexels-moose-photos-1036623.jpg ",
        1: "image/pexels-andrea-piacquadio-3778876.jpg",
        2: "image/pexels-teddy-joseph-2955376.jpg ",
        3: "image/pexels-pixabay-532220.jpg ",
        4: " image/pexels-nappy-3460134.jpg",
        5: "image/pexels-christina-morillo-1181424.jpg"
    }
}


// console.log(articles.images[1])



// console.log(element[1].innerHTML)





for(let i =0; i< cardimage.length; i++){
    cardimage[i].src = contents.images[i]
    element[i].innerHTML = contents.advices[i];
    topic[i].innerHTML = contents.topics[i];
    article[i].innerHTML = contents.article[i];
    footerimage[i].src = contents.FImages[i]

  

}








