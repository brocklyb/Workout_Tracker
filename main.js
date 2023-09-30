const CHEST_WORKOUTS = ["Dumbell Press","Cable Fly","Close Grip Bench", "Incline Bench Press", "Dumbell Press"]
const ARM_WORKOUTS = ["Preacher Curls", "Underhand Grip Curl","Pull Ups","Dumbell Curl","Cable Curl", "Shoulder Press"]
const LEG_WORKOUTS = ["Romainian Deadlift", "Leg Curl", "Leg Extension", "Lunges" , "Calve Raises"]
const BACK_WORKOUTS = ["Barbell Row", "Cable Row", "Lat Pull Down", "Shrugs" , "Lat Fly"]
const DAILY_ROUTINE = []

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

/*Exercise 1 is the main_lift for each dayfrimon
This constructro creates a workotu object for each day */
function dailyWorkoutConstructor(day,excercise1,excercise2,excercise3,excercise4,excercise5,excercise6){
    day:
    excercise1:
    excercise2:
    excercise3:
    excercise4:
    excercise5:
    excercise6:
    return {day,excercise1,excercise2,excercise3,excercise4,excercise5,excercise6}
}

/*Create a function that allows users to edit the workout and excercises */
function editWorkout(){

}


/*Create a function that allowsto log their rep count for each excercise*/
function logWorkout(){

}


function displayGrid(){
    
    monday_header.innerHTML = DAILY_ROUTINE[0].day 
    exc1_mon.innerHTML = DAILY_ROUTINE[0].excercise1
    exc2_mon.innerHTML = DAILY_ROUTINE[0].excercise2
    exc3_mon.innerHTML = DAILY_ROUTINE[0].excercise3
    exc4_mon.innerHTML = DAILY_ROUTINE[0].excercise4
    exc5_mon.innerHTML = DAILY_ROUTINE[0].excercise5
    exc6_mon.innerHTML = DAILY_ROUTINE[0].excercise6

    tuesday_header.innerHTML = DAILY_ROUTINE[1].day
    exc1_tue.innerHTML = DAILY_ROUTINE[1].excercise1
    exc2_tue.innerHTML = DAILY_ROUTINE[1].excercise2
    exc3_tue.innerHTML = DAILY_ROUTINE[1].excercise3
    exc4_tue.innerHTML = DAILY_ROUTINE[1].excercise4
    exc5_tue.innerHTML = DAILY_ROUTINE[1].excercise5
    exc6_tue.innerHTML = DAILY_ROUTINE[1].excercise6


    wednesday_header.innerHTML = DAILY_ROUTINE[2].day
    exc1_wed.innerHTML = DAILY_ROUTINE[2].excercise1
    exc2_wed.innerHTML = DAILY_ROUTINE[2].excercise2
    exc3_wed.innerHTML = DAILY_ROUTINE[2].excercise3
    exc4_wed.innerHTML = DAILY_ROUTINE[2].excercise4
    exc5_wed.innerHTML = DAILY_ROUTINE[2].excercise5
    exc6_wed.innerHTML = DAILY_ROUTINE[2].excercise6

    thursday_header.innerHTML = DAILY_ROUTINE[3].day
    exc1_thu.innerHTML = DAILY_ROUTINE[3].excercise1
    exc2_thu.innerHTML = DAILY_ROUTINE[3].excercise2
    exc3_thu.innerHTML = DAILY_ROUTINE[3].excercise3
    exc4_thu.innerHTML = DAILY_ROUTINE[3].excercise4
    exc5_thu.innerHTML = DAILY_ROUTINE[3].excercise5
    exc6_thu.innerHTML = DAILY_ROUTINE[3].excercise6

    friday_header.innerHTML = DAILY_ROUTINE[4].day
    exc1_fri.innerHTML = DAILY_ROUTINE[4].excercise1
    exc2_fri.innerHTML = DAILY_ROUTINE[4].excercise2
    exc3_fri.innerHTML = DAILY_ROUTINE[4].excercise3
    exc4_fri.innerHTML = DAILY_ROUTINE[4].excercise4
    exc5_fri.innerHTML = DAILY_ROUTINE[4].excercise5
    exc6_fri.innerHTML = DAILY_ROUTINE[4].excercise6


    saturday_header.innerHTML = DAILY_ROUTINE[5].day
    exc1_sat.innerHTML = DAILY_ROUTINE[5].excercise1
    exc2_sat.innerHTML = DAILY_ROUTINE[5].excercise2
    exc3_sat.innerHTML = DAILY_ROUTINE[5].excercise3
    exc4_sat.innerHTML = DAILY_ROUTINE[5].excercise4
    exc5_sat.innerHTML = DAILY_ROUTINE[5].excercise5
    exc6_sat.innerHTML = DAILY_ROUTINE[5].excercise6

    sunday_header.innerHTML = DAILY_ROUTINE[6].day
    exc1_sun.innerHTML = DAILY_ROUTINE[6].excercise1
    exc2_sun.innerHTML = DAILY_ROUTINE[6].excercise2
    exc3_sun.innerHTML = DAILY_ROUTINE[6].excercise3
    exc4_sun.innerHTML = DAILY_ROUTINE[6].excercise4
    exc5_sun.innerHTML = DAILY_ROUTINE[6].excercise5
    exc6_sun.innerHTML = DAILY_ROUTINE[6].excercise6


    /*
    for (let x=0; x<DAILY_ROUTINE.length; x++){
        var hold_object = DAILY_ROUTINE[x]

        
        const output_element = document.createElement("p")
        output_element.setAttribute("id",x)
        
        
        output_element.innerHTML = hold_object.day + hold_object.excercise1 + hold_object.excercise2 + hold_object.excercise3 + hold_object.excercise4 + hold_object.excercise5 + hold_object.excercise6
        

        
       /* document.getElementById("week_grid").appendChild(output_element) */ 

    
}


/*Exercise 1 is the main_lift for each day
this gathers all of the generated workouts displayed
and creates objects for each day that contain all workouts for that day
 */
function dailyRoutine(){
    let monday = "Monday"
    let main_lift_monday = main_lift_mon.innerHTML
    let excercise2_mon = document.getElementById("excercise2_mon").innerHTML
    let excercise3_mon = document.getElementById("excercise3_mon").innerHTML
    let excercise4_mon = document.getElementById("excercise4_mon").innerHTML
    let excercise5_mon = document.getElementById("excercise5_mon").innerHTML
    let excercise6_mon = document.getElementById("excercise6_mon").innerHTML
    const monday_routine = new dailyWorkoutConstructor(monday,main_lift_monday,excercise2_mon,excercise3_mon,excercise4_mon,excercise5_mon,excercise6_mon)
    
    let tuesday = "Tuesday"
    let main_lift_tuesday = main_lift_tue.innerHTML
    let excercise2_tue = document.getElementById("excercise2_tue").innerHTML
    let excercise3_tue = document.getElementById("excercise3_tue").innerHTML
    let excercise4_tue = document.getElementById("excercise4_tue").innerHTML
    let excercise5_tue = document.getElementById("excercise5_tue").innerHTML
    let excercise6_tue = document.getElementById("excercise6_tue").innerHTML
    const tuesday_routine = new dailyWorkoutConstructor(tuesday,main_lift_tuesday,excercise2_tue,excercise3_tue,excercise4_tue,excercise5_tue,excercise6_tue)

    let wednesday = "Wednesday"
    let main_lift_wednesday = main_lift_wed.innerHTML
    let excercise2_wed = document.getElementById("excercise2_wed").innerHTML
    let excercise3_wed = document.getElementById("excercise3_wed").innerHTML
    let excercise4_wed = document.getElementById("excercise4_wed").innerHTML
    let excercise5_wed = document.getElementById("excercise5_wed").innerHTML
    let excercise6_wed = document.getElementById("excercise6_wed").innerHTML
    const wednesday_routine = new dailyWorkoutConstructor(wednesday,main_lift_wednesday,excercise2_wed,excercise3_wed,excercise4_wed,excercise5_wed,excercise6_wed)

    let thursday = "Thursday"
    let main_lift_thursday = main_lift_thu.innerHTML
    let excercise2_thu = document.getElementById("excercise2_thu").innerHTML
    let excercise3_thu = document.getElementById("excercise3_thu").innerHTML
    let excercise4_thu = document.getElementById("excercise4_thu").innerHTML
    let excercise5_thu = document.getElementById("excercise5_thu").innerHTML
    let excercise6_thu = document.getElementById("excercise6_thu").innerHTML
    const thursday_routine = new dailyWorkoutConstructor(thursday,main_lift_thursday,excercise2_thu,excercise3_thu,excercise4_thu,excercise5_thu,excercise6_thu)

    let friday = "Friday"
    let main_lift_friday = main_lift_fri.innerHTML
    let excercise2_fri = document.getElementById("excercise2_fri").innerHTML
    let excercise3_fri = document.getElementById("excercise3_fri").innerHTML
    let excercise4_fri = document.getElementById("excercise4_fri").innerHTML
    let excercise5_fri = document.getElementById("excercise5_fri").innerHTML
    let excercise6_fri = document.getElementById("excercise6_fri").innerHTML
    const friday_routine = new dailyWorkoutConstructor(friday,main_lift_friday,excercise2_fri,excercise3_fri,excercise4_fri,excercise5_fri,excercise6_fri)

    let saturday = "Saturday"
    let main_lift_saturday = main_lift_sat.innerHTML
    let excercise2_sat = document.getElementById("excercise2_sat").innerHTML
    let excercise3_sat = document.getElementById("excercise3_sat").innerHTML
    let excercise4_sat = document.getElementById("excercise4_sat").innerHTML
    let excercise5_sat = document.getElementById("excercise5_sat").innerHTML
    let excercise6_sat = document.getElementById("excercise6_sat").innerHTML
    const saturday_routine = new dailyWorkoutConstructor(saturday,main_lift_saturday,excercise2_sat,excercise3_sat,excercise4_sat,excercise5_sat,excercise6_sat)

    let sunday = "Sunday"
    let main_lift_sunday = main_lift_sun.innerHTML
    let excercise2_sun = document.getElementById("excercise2_sun").innerHTML
    let excercise3_sun = document.getElementById("excercise3_sun").innerHTML
    let excercise4_sun = document.getElementById("excercise4_sun").innerHTML
    let excercise5_sun = document.getElementById("excercise5_sun").innerHTML
    let excercise6_sun = document.getElementById("excercise6_sun").innerHTML
    const sunday_routine = new dailyWorkoutConstructor(sunday,main_lift_sunday,excercise2_sun,excercise3_sun,excercise4_sun,excercise5_sun,excercise6_sun)
    DAILY_ROUTINE.push(monday_routine,tuesday_routine,wednesday_routine,thursday_routine,friday_routine,saturday_routine,sunday_routine,)
}


/*This function displays all of the workouts for each day. 
They are randomly selected workouts from the global list */
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

