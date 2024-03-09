class Workout {
    constructor(exercise, reps, weight, goal, day) {
        this.exercise = exercise;
        this.reps = reps;
        this.weight = weight;
        this.goal = goal;
        this.day = day;
    }
    calculateProgress(){
        let progress = (this.weight / this.goal) * 100;
        return progress;
    }
}

let workouts = [];

// Event listener 
document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let exercise = document.getElementById('exercise').value;
    let reps = document.getElementById('reps').value;
    let weight = document.getElementById('weight').value;
    let goal = document.getElementById('goal').value;
    let day = document.getElementById('day').value;

    // Check if there's an existing workout with the same exercise name
    let existingWorkoutIndex = workouts.findIndex(workout => workout.exercise === exercise);

    if (existingWorkoutIndex !== -1) {
        // Update the existing workout
        workouts[existingWorkoutIndex].reps = reps;
        workouts[existingWorkoutIndex].weight = weight;
        workouts[existingWorkoutIndex].goal = goal;
        workouts[existingWorkoutIndex].day = day;
    } else {
        // Create a new Workout object and add it to the workouts array
        let newWorkout = new Workout(exercise, reps, weight, goal, day);
        workouts.push(newWorkout);
    }

    display();
});

function display() {
    document.getElementById('workouts-container').innerHTML = '';
    let day1 = [];
    let day2 = [];
    let day3 = [];

    for (let i = 0; i < workouts.length; i++) {
        if (workouts[i].day == 1) {
            day1.push(workouts[i]);
        }
        if (workouts[i].day == 2) {
            day2.push(workouts[i]);
        }
        if (workouts[i].day == 3) {
            day3.push(workouts[i]);
        }
    }

    // Create HTML elements for each workout and append them to their respective day sections
    let container = document.getElementById('workouts-container');

    // Function to create a progress bar
    function createProgressBar(progress) {
        let progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.style.width = progress + '%';
        return progressBar;
    }

    // Display workouts for Day 1
    if (day1.length > 0) {
        let day1Section = document.createElement('section');
        day1Section.id = 'section';
        day1Section.innerHTML = '<h2>Day 1</h2>';
        day1.forEach(workout => {
            let workoutInfo = document.createElement('p');
            workoutInfo.textContent = `Exercise: ${workout.exercise}, Reps: ${workout.reps}, Weight: ${workout.weight}, Goal: ${workout.goal}`;
            day1Section.appendChild(workoutInfo);

            // Create and append progress bar
            let progress = workout.calculateProgress();
            let progressBar = createProgressBar(progress);
            workoutInfo.appendChild(progressBar);
        });
        container.appendChild(day1Section);
    }

    // Display workouts for Day 2
    if (day2.length > 0) {
        let day2Section = document.createElement('section');
        day2Section.id = 'section';
        day2Section.innerHTML = '<h2>Day 2</h2>';
        day2.forEach(workout => {
            let workoutInfo = document.createElement('p');
            workoutInfo.textContent = `Exercise: ${workout.exercise}, Reps: ${workout.reps}, Weight: ${workout.weight}, Goal: ${workout.goal}`;
            day2Section.appendChild(workoutInfo);

            // Create and append progress bar
            let progress = workout.calculateProgress();
            let progressBar = createProgressBar(progress);
            workoutInfo.appendChild(progressBar);
        });
        container.appendChild(day2Section);
    }

    // Display workouts for Day 3
    if (day3.length > 0) {
        let day3Section = document.createElement('section');
        day3Section.id = 'section';
        day3Section.innerHTML = '<h2>Day 3</h2>';
        day3.forEach(workout => {
            let workoutInfo = document.createElement('p');
            workoutInfo.textContent = `Exercise: ${workout.exercise}, Reps: ${workout.reps}, Weight: ${workout.weight}, Goal: ${workout.goal}`;
            day3Section.appendChild(workoutInfo);

            // Create and append progress bar
            let progress = workout.calculateProgress();
            let progressBar = createProgressBar(progress);
            workoutInfo.appendChild(progressBar);
        });
        container.appendChild(day3Section);
    }
}