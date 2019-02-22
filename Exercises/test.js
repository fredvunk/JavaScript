var legs = ["Air-squat",
                    "Barbell squat",
                    "Kettlebell squat",
                    "Sumo squat",
                    "Static squat",
                    "Wall ball",
                    "Lunges",
                    "Side lunges",
                    "Squat on chair",
                    "Air-jump squat",
                    "Overhead squat",
                    "RDL",
                    "Box jump",
                    "Split squat",
                    "Jump lunges",
                    "Partner wall ball",
                    "Glute bridge",
                    "Single leg glute bridge",
                    "Squat with ropes",
                    "Leg on chair lunge",
                    "TRX RDL",
                    "Hamstring on bosu",
                    "Hamstring on a ball",
                    "Step up on box",
                    "Box Squat",
                   ];
function Exercise() {
    var randomNumber = Math.floor(Math.random()* (legs.length));
    
   document.getElementById("demo").innerHTML = legs[randomNumber]; }

var back = ["Lat pull",
                    "Rope pulls",
                    "Row",
                    "Inverted row",
                    "Bent-over row",
                    "Bent-over row alternating",
                    "Underhand lat pull",
                    "Deadlift",
                    "TRX row",
                    "Facepull",
                    "Lat skiing",
                    "T-bar Deadlift",
                    "Row with ropes",
                    "RDL KB",
                   ];
function Exercise2() {
    var randomNumber = Math.floor(Math.random()* (back.length));
    
   document.getElementById("demo2").innerHTML = back[randomNumber]; }

    var chest = ["Push ups",
                     "Dumbbell press",
                     "Dumbbell fly",
                     "Dips",
                     "Push ups over box",
                     "Triceps overhead",
                   ];
function Exercise3() {
    var randomNumber = Math.floor(Math.random()* (chest.length));
    
   document.getElementById("demo3").innerHTML = chest[randomNumber]; }
var shoulders = ["Shoulder press",
                         "TBar shoulder press",
                         "Kettlebell press",
                         "Lateral raise",
                         "Front raise",
                         "Bus driver",
                         "facepull",
                         "upright row",
                         "upright row with rope",
                   ];
function Exercise4() {
    var randomNumber = Math.floor(Math.random()* (shoulders.length));
    
   document.getElementById("demo4").innerHTML = shoulders[randomNumber]; }

    var hiit = ["Kettlebell Swing",
                    "Burpee",
                    "Burpee with push up",
                    "Wall ball",
                    "Jump rope",
                    "KB Over Head",
                    "Jump back with ropes",
                   ];
function Exercise5() {
    var randomNumber = Math.floor(Math.random()* (hiit.length));
    
   document.getElementById("demo5").innerHTML = hiit[randomNumber]; }

    var core = ["Go home abs",
                    "Plank",
                    "Sit ups",
                    "Sit ups with ball Throw",
                    "Hip Crossover",
                    "Hip Crossover straight legs",
                    "Superman",
                   ];
function Exercise6() {
    var randomNumber = Math.floor(Math.random()* (core.length));
    
   document.getElementById("demo6").innerHTML = core[randomNumber]; } 