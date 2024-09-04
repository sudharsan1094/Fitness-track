// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('workout-form');
    const workoutLog = document.getElementById('workout-log');

    // Ensure all text input values are in uppercase
    const textInputs = form.querySelectorAll('input[type="text"]');
    textInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            this.value = this.value.toUpperCase();
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const workoutName = document.getElementById('workout-name').value;
        const duration = document.getElementById('duration').value;
        const calories = document.getElementById('calories').value;

        if (workoutName && duration && calories) {
            const li = document.createElement('li');
            li.textContent = `${workoutName} - ${duration} minutes - ${calories} calories`;
            workoutLog.appendChild(li);

            form.reset(); // Clear the form fields
        }
    });
});
