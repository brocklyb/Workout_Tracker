const CHEST_WORKOUTS = ["Dumbell Press","Cable Fly","Close Grip Bench", "Incline Bench Press", "Dumbell Press"]
const ARM_WORKOUTS = ["Preacher Curls", "Underhand Grip Curl","Pull Ups","Dumbell Curl","Cable Curl", "Shoulder Press"]
const LEG_WORKOUTS = ["Romainian Deadlift", "Leg Curl", "Leg Extension", "Lunges" , "Calve Raises"]
const BACK_WORKOUTS = ["Barbell Row", "Cable Row", "Lat Pull Down", "Shrugs" , "Lat Fly"]

function createUserConstructor(fname,age,height,weight,benchpress,squat,deadlift){
    fname:
    age:
    height:
    weight:
    benchpress:
    squat:
    deadlift:
    return {fname,age,height,weight,benchpress,squat,deadlift}
}

function newUser(){
    let fname = document.getElementById("fname").value
    let age = document.getElementById("age").value
    let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value
    let benchpress = document.getElementById("benchpress").value
    let squat = document.getElementById("squat").value
    let deadlift = document.getElementById("deadlift").value
    const newuser = new createUserConstructor(fname,age,height,weight,benchpress,squat,deadlift)
    newWorkoutSchedule(newuser)
}


function createWorkoutConstructor(monday,tuesday,wednesday,thursday,friday,saturday,sunday){
    monday:
    tuesday:
    wednesday:
    thursday:
    friday:
    saturday:
    sunday:
    return {monday,tuesday,wednesday,thursday,friday,saturday,sunday}
}

function newWorkoutSchedule(user){
    let monday = document.getElementById("mon_selection").value
    let tuesday = document.getElementById("tue_selection").value
    let wednesday = document.getElementById("wed_selection").value
    let thursday = document.getElementById("thu_selection").value
    let friday = document.getElementById("fri_selection").value
    let saturday = document.getElementById("sat_selection").value
    let sunday = document.getElementById("sun_selection").value
    const workoutschedule = new createWorkoutConstructor(monday,tuesday,wednesday,thursday,friday,saturday,sunday)
    displaySchedule(user,workoutschedule)
}


function randomWorkout(limb_choice){
    if(limb_choice == "chest"){
        let chest = CHEST_WORKOUTS[(Math.floor(Math.random() * CHEST_WORKOUTS.length))]
        return chest
    }

    if(limb_choice == "arms"){
        let arms = ARM_WORKOUTS[(Math.floor(Math.random() * ARM_WORKOUTS.length))]
        return arms
    }

    if(limb_choice == "legs"){
        let legs = LEG_WORKOUTS[(Math.floor(Math.random() * LEG_WORKOUTS.length))]
        return legs
    }

    if(limb_choice == "back"){
        let back = BACK_WORKOUTS[(Math.floor(Math.random() * BACK_WORKOUTS.length))]
        return back
    }

    
}

function displaySchedule(user,schedule){
    console.log(user,schedule)

    /* MONDAY SECTION if chest*/
    if (schedule.monday == "chest"){
        monday.innerHTML = "Monday: " + schedule.monday
        main_lift_mon.innerHTML="Bench Press: " + user.benchpress
        excercise2_mon.innerHTML = randomWorkout("chest")
        excercise3_mon.innerHTML = randomWorkout("chest")
        excercise4_mon.innerHTML = randomWorkout("chest")
        excercise5_mon.innerHTML = randomWorkout("chest")
        excercise6_mon.innerHTML = randomWorkout("chest")
    }
    /* MONDAY SECTION if arms */
    if (schedule.monday == "arms"){
        monday.innerHTML = "Monday: " + schedule.monday
        main_lift_mon.innerHTML = ""
        excercise2_mon.innerHTML = randomWorkout("arms")
        excercise3_mon.innerHTML = randomWorkout("arms")
        excercise4_mon.innerHTML = randomWorkout("arms")
        excercise5_mon.innerHTML = randomWorkout("arms")
        excercise6_mon.innerHTML = randomWorkout("arms")
    }
    /* MONDAY SECTION if legs */
    if (schedule.monday == "legs"){
        monday.innerHTML = "Monday: " + schedule.monday
        main_lift_mon.innerHTML = "Squat" + user.squat
        excercise2_mon.innerHTML = randomWorkout("legs")
        excercise3_mon.innerHTML = randomWorkout("legs")
        excercise4_mon.innerHTML = randomWorkout("legs")
        excercise5_mon.innerHTML = randomWorkout("legs")
        excercise6_mon.innerHTML = randomWorkout("legs")
    }
    /* MONDAY SECTION if back */
    if (schedule.monday == "back"){
        monday.innerHTML = "Monday: " + schedule.monday
        main_lift_mon.innerHTML = "Deadlift:" + user.deadlift
        excercise2_mon.innerHTML = randomWorkout("back")
        excercise3_mon.innerHTML = randomWorkout("back")
        excercise4_mon.innerHTML = randomWorkout("back")
        excercise5_mon.innerHTML = randomWorkout("back")
        excercise6_mon.innerHTML = randomWorkout("back")
    }

    /* MONDAY SECTION if rest */
    if (schedule.monday == "rest"){
        monday.innerHTML = "Monday: " + schedule.monday
        main_lift_mon.innerHTML = "REST"
        excercise2_mon.innerHTML = "REST"
        excercise3_mon.innerHTML = "REST"
        excercise4_mon.innerHTML = "REST"
        excercise5_mon.innerHTML = "REST"
        excercise6_mon.innerHTML = "REST"
    }

    /************************TUESDDAY****************************/
    /* tuesday SECTION if chest*/
    if (schedule.tuesday == "chest"){
        tuesday.innerHTML = "Tuesday: " + schedule.tuesday
        main_lift_tue.innerHTML="Bench Press: " + user.benchpress
        excercise2_tue.innerHTML = randomWorkout("chest")
        excercise3_tue.innerHTML = randomWorkout("chest")
        excercise4_tue.innerHTML = randomWorkout("chest")
        excercise5_tue.innerHTML = randomWorkout("chest")
        excercise6_tue.innerHTML = randomWorkout("chest")
    }
    /* tuesday SECTION if arms */
    if (schedule.tuesday == "arms"){
        tuesday.innerHTML = "Tuesday: " + schedule.tuesday
        main_lift_tue.innerHTML = ""
        excercise2_tue.innerHTML = randomWorkout("arms")
        excercise3_tue.innerHTML = randomWorkout("arms")
        excercise4_tue.innerHTML = randomWorkout("arms")
        excercise5_tue.innerHTML = randomWorkout("arms")
        excercise6_tue.innerHTML = randomWorkout("arms")
    }
    /* tuesday SECTION if legs */
    if (schedule.tuesday == "legs"){
        tuesday.innerHTML = "Tuesday: " + schedule.tuesday
        main_lift_tue.innerHTML = "Squat" + user.squat
        excercise2_tue.innerHTML = randomWorkout("legs")
        excercise3_tue.innerHTML = randomWorkout("legs")
        excercise4_tue.innerHTML = randomWorkout("legs")
        excercise5_tue.innerHTML = randomWorkout("legs")
        excercise6_tue.innerHTML = randomWorkout("legs")
    }
    /* tuesday SECTION if back */
    if (schedule.tuesday == "back"){
        tuesday.innerHTML = "Tuesday: " + schedule.tuesday
        main_lift_tue.innerHTML = "Deadlift:" + user.deadlift
        excercise2_tue.innerHTML = randomWorkout("back")
        excercise3_tue.innerHTML = randomWorkout("back")
        excercise4_tue.innerHTML = randomWorkout("back")
        excercise5_tue.innerHTML = randomWorkout("back")
        excercise6_tue.innerHTML = randomWorkout("back")
    }

    /* tuesday SECTION if rest */
    if (schedule.tuesday == "rest"){
        tuesday.innerHTML = "Tuesday: " + schedule.tuesday
        main_lift_tue.innerHTML = "REST"
        excercise2_tue.innerHTML = "REST"
        excercise3_tue.innerHTML = "REST"
        excercise4_tue.innerHTML = "REST"
        excercise5_tue.innerHTML = "REST"
        excercise6_tue.innerHTML = "REST"
    }


    /* wednesday SECTION if chest*/
    if (schedule.wednesday == "chest"){
        wednesday.innerHTML = "Wednesday: " + schedule.wednesday
        main_lift_wed.innerHTML="Bench Press: " + user.benchpress
        excercise2_wed.innerHTML = randomWorkout("chest")
        excercise3_wed.innerHTML = randomWorkout("chest")
        excercise4_wed.innerHTML = randomWorkout("chest")
        excercise5_wed.innerHTML = randomWorkout("chest")
        excercise6_wed.innerHTML = randomWorkout("chest")
    }
    /* wednesday SECTION if arms */
    if (schedule.wednesday == "arms"){
        wednesday.innerHTML = "Wednesday: " + schedule.wednesday
        main_lift_wed.innerHTML = ""
        excercise2_wed.innerHTML = randomWorkout("arms")
        excercise3_wed.innerHTML = randomWorkout("arms")
        excercise4_wed.innerHTML = randomWorkout("arms")
        excercise5_wed.innerHTML = randomWorkout("arms")
        excercise6_wed.innerHTML = randomWorkout("arms")
    }
    /* wednesday SECTION if legs */
    if (schedule.wednesday == "legs"){
        wednesday.innerHTML = "Wednesday: " + schedule.wednesday
        main_lift_wed.innerHTML = "Squat" + user.squat
        excercise2_wed.innerHTML = randomWorkout("legs")
        excercise3_wed.innerHTML = randomWorkout("legs")
        excercise4_wed.innerHTML = randomWorkout("legs")
        excercise5_wed.innerHTML = randomWorkout("legs")
        excercise6_wed.innerHTML = randomWorkout("legs")
    }
    /* wednesday SECTION if back */
    if (schedule.wednesday == "back"){
        wednesday.innerHTML = "Wednesday: " + schedule.wednesday
        main_lift_wed.innerHTML = "Deadlift:" + user.deadlift
        excercise2_wed.innerHTML = randomWorkout("back")
        excercise3_wed.innerHTML = randomWorkout("back")
        excercise4_wed.innerHTML = randomWorkout("back")
        excercise5_wed.innerHTML = randomWorkout("back")
        excercise6_wed.innerHTML = randomWorkout("back")
    }

    /* wednesday SECTION if rest */
    if (schedule.wednesday == "rest"){
        wednesday.innerHTML = "Wednesday: " + schedule.wednesday
        main_lift_wed.innerHTML = "REST"
        excercise2_wed.innerHTML = "REST"
        excercise3_wed.innerHTML = "REST"
        excercise4_wed.innerHTML = "REST"
        excercise5_wed.innerHTML = "REST"
        excercise6_wed.innerHTML = "REST"
    }
   



    /* thursday SECTION if chest*/
    if (schedule.thursday == "chest"){
        thursday.innerHTML = "Thursday: " + schedule.thursday
        main_lift_thu.innerHTML="Bench Press: " + user.benchpress
        excercise2_thu.innerHTML = randomWorkout("chest")
        excercise3_thu.innerHTML = randomWorkout("chest")
        excercise4_thu.innerHTML = randomWorkout("chest")
        excercise5_thu.innerHTML = randomWorkout("chest")
        excercise6_thu.innerHTML = randomWorkout("chest")
    }
    /* thursday SECTION if arms */
    if (schedule.thursday == "arms"){
        thursday.innerHTML = "Thursday: " + schedule.thursday
        main_lift_thu.innerHTML = ""
        excercise2_thu.innerHTML = randomWorkout("arms")
        excercise3_thu.innerHTML = randomWorkout("arms")
        excercise4_thu.innerHTML = randomWorkout("arms")
        excercise5_thu.innerHTML = randomWorkout("arms")
        excercise6_thu.innerHTML = randomWorkout("arms")
    }
    /* thursday SECTION if legs */
    if (schedule.thursday == "legs"){
        thursday.innerHTML = "Thursday: " + schedule.thursday
        main_lift_thu.innerHTML = "Squat" + user.squat
        excercise2_thu.innerHTML = randomWorkout("legs")
        excercise3_thu.innerHTML = randomWorkout("legs")
        excercise4_thu.innerHTML = randomWorkout("legs")
        excercise5_thu.innerHTML = randomWorkout("legs")
        excercise6_thu.innerHTML = randomWorkout("legs")
    }
    /* thursday SECTION if back */
    if (schedule.thursday == "back"){
        thursday.innerHTML = "Thursday: " + schedule.thursday
        main_lift_thu.innerHTML = "Deadlift:" + user.deadlift
        excercise2_thu.innerHTML = randomWorkout("back")
        excercise3_thu.innerHTML = randomWorkout("back")
        excercise4_thu.innerHTML = randomWorkout("back")
        excercise5_thu.innerHTML = randomWorkout("back")
        excercise6_thu.innerHTML = randomWorkout("back")
    }

    /* thursday SECTION if rest */
    if (schedule.thursday == "rest"){
        thursday.innerHTML = "Thursday: " + schedule.thursday
        main_lift_thu.innerHTML = "REST"
        excercise2_thu.innerHTML = "REST"
        excercise3_thu.innerHTML = "REST"
        excercise4_thu.innerHTML = "REST"
        excercise5_thu.innerHTML = "REST"
        excercise6_thu.innerHTML = "REST"
    }
   

    /* friday SECTION if chest*/
    if (schedule.friday == "chest"){
        friday.innerHTML = "Friday: " + schedule.friday
        main_lift_fri.innerHTML="Bench Press: " + user.benchpress
        excercise2_fri.innerHTML = randomWorkout("chest")
        excercise3_fri.innerHTML = randomWorkout("chest")
        excercise4_fri.innerHTML = randomWorkout("chest")
        excercise5_fri.innerHTML = randomWorkout("chest")
        excercise6_fri.innerHTML = randomWorkout("chest")
    }
    /* friday SECTION if arms */
    if (schedule.friday == "arms"){
        friday.innerHTML = "Friday: " + schedule.friday
        main_lift_fri.innerHTML = ""
        excercise2_fri.innerHTML = randomWorkout("arms")
        excercise3_fri.innerHTML = randomWorkout("arms")
        excercise4_fri.innerHTML = randomWorkout("arms")
        excercise5_fri.innerHTML = randomWorkout("arms")
        excercise6_fri.innerHTML = randomWorkout("arms")
    }
    /* friday SECTION if legs */
    if (schedule.friday == "legs"){
        friday.innerHTML = "Friday: " + schedule.friday
        main_lift_fri.innerHTML = "Squat" + user.squat
        excercise2_fri.innerHTML = randomWorkout("legs")
        excercise3_fri.innerHTML = randomWorkout("legs")
        excercise4_fri.innerHTML = randomWorkout("legs")
        excercise5_fri.innerHTML = randomWorkout("legs")
        excercise6_fri.innerHTML = randomWorkout("legs")
    }
    /* friday SECTION if back */
    if (schedule.friday == "back"){
        friday.innerHTML = "Friday: " + schedule.friday
        main_lift_fri.innerHTML = "Deadlift:" + user.deadlift
        excercise2_fri.innerHTML = randomWorkout("back")
        excercise3_fri.innerHTML = randomWorkout("back")
        excercise4_fri.innerHTML = randomWorkout("back")
        excercise5_fri.innerHTML = randomWorkout("back")
        excercise6_fri.innerHTML = randomWorkout("back")
    }

    /* friday SECTION if rest */
    if (schedule.friday == "rest"){
        friday.innerHTML = "Friday: " + schedule.friday
        main_lift_fri.innerHTML = "REST"
        excercise2_fri.innerHTML = "REST"
        excercise3_fri.innerHTML = "REST"
        excercise4_fri.innerHTML = "REST"
        excercise5_fri.innerHTML = "REST"
        excercise6_fri.innerHTML = "REST"
    }


    /* saturday SECTION if chest*/
    if (schedule.saturday == "chest"){
        saturday.innerHTML = "Saturday: " + schedule.saturday
        main_lift_sat.innerHTML="Bench Press: " + user.benchpress
        excercise2_sat.innerHTML = randomWorkout("chest")
        excercise3_sat.innerHTML = randomWorkout("chest")
        excercise4_sat.innerHTML = randomWorkout("chest")
        excercise5_sat.innerHTML = randomWorkout("chest")
        excercise6_sat.innerHTML = randomWorkout("chest")
    }
    /* saturday SECTION if arms */
    if (schedule.saturday == "arms"){
        saturday.innerHTML = "Saturday: " + schedule.saturday
        main_lift_sat.innerHTML = ""
        excercise2_sat.innerHTML = randomWorkout("arms")
        excercise3_sat.innerHTML = randomWorkout("arms")
        excercise4_sat.innerHTML = randomWorkout("arms")
        excercise5_sat.innerHTML = randomWorkout("arms")
        excercise6_sat.innerHTML = randomWorkout("arms")
    }
    /* saturday SECTION if legs */
    if (schedule.saturday == "legs"){
        saturday.innerHTML = "Saturday: " + schedule.saturday
        main_lift_sat.innerHTML = "Squat" + user.squat
        excercise2_sat.innerHTML = randomWorkout("legs")
        excercise3_sat.innerHTML = randomWorkout("legs")
        excercise4_sat.innerHTML = randomWorkout("legs")
        excercise5_sat.innerHTML = randomWorkout("legs")
        excercise6_sat.innerHTML = randomWorkout("legs")
    }
    /* saturday SECTION if back */
    if (schedule.saturday == "back"){
        saturday.innerHTML = "Saturday: " + schedule.saturday
        main_lift_sat.innerHTML = "Deadlift:" + user.deadlift
        excercise2_sat.innerHTML = randomWorkout("back")
        excercise3_sat.innerHTML = randomWorkout("back")
        excercise4_sat.innerHTML = randomWorkout("back")
        excercise5_sat.innerHTML = randomWorkout("back")
        excercise6_sat.innerHTML = randomWorkout("back")
    }

    /* saturday SECTION if rest */
    if (schedule.saturday == "rest"){
        saturday.innerHTML = "Saturday: " + frischedule.saturday
        main_lift_sat.innerHTML = "REST"
        excercise2_sat.innerHTML = "REST"
        excercise3_sat.innerHTML = "REST"
        excercise4_sat.innerHTML = "REST"
        excercise5_sat.innerHTML = "REST"
        excercise6_sat.innerHTML = "REST"
    }


    /* sunday SECTION if chest*/
    if (schedule.sunday == "chest"){
        sunday.innerHTML = "Sunday: " + schedule.sunday
        main_lift_sun.innerHTML="Bench Press: " + user.benchpress
        excercise2_sun.innerHTML = randomWorkout("chest")
        excercise3_sun.innerHTML = randomWorkout("chest")
        excercise4_sun.innerHTML = randomWorkout("chest")
        excercise5_sun.innerHTML = randomWorkout("chest")
        excercise6_sun.innerHTML = randomWorkout("chest")
    }
    /* sunday SECTION if arms */
    if (schedule.sunday == "arms"){
        sunday.innerHTML = "Sunday: " + schedule.sunday
        main_lift_sun.innerHTML = ""
        excercise2_sun.innerHTML = randomWorkout("arms")
        excercise3_sun.innerHTML = randomWorkout("arms")
        excercise4_sun.innerHTML = randomWorkout("arms")
        excercise5_sun.innerHTML = randomWorkout("arms")
        excercise6_sun.innerHTML = randomWorkout("arms")
    }
    /* sunday SECTION if legs */
    if (schedule.sunday == "legs"){
        sunday.innerHTML = "Sunday: " + schedule.sunday
        main_lift_sun.innerHTML = "Squat" + user.squat
        excercise2_sun.innerHTML = randomWorkout("legs")
        excercise3_sun.innerHTML = randomWorkout("legs")
        excercise4_sun.innerHTML = randomWorkout("legs")
        excercise5_sun.innerHTML = randomWorkout("legs")
        excercise6_sun.innerHTML = randomWorkout("legs")
    }
    /* sunday SECTION if back */
    if (schedule.sunday == "back"){
        sunday.innerHTML = "Sunday: " + schedule.sunday
        main_lift_sun.innerHTML = "Deadlift:" + user.deadlift
        excercise2_sun.innerHTML = randomWorkout("back")
        excercise3_sun.innerHTML = randomWorkout("back")
        excercise4_sun.innerHTML = randomWorkout("back")
        excercise5_sun.innerHTML = randomWorkout("back")
        excercise6_sun.innerHTML = randomWorkout("back")
    }

    /* sunday SECTION if rest */
    if (schedule.sunday == "rest"){
        sunday.innerHTML = "Sunday: " + schedule.sunday
        main_lift_sun.innerHTML = "REST"
        excercise2_sun.innerHTML = "REST"
        excercise3_sun.innerHTML = "REST"
        excercise4_sun.innerHTML = "REST"
        excercise5_sun.innerHTML = "REST"
        excercise6_sun.innerHTML = "REST"
    }

   
}
