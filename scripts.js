function navigateTo(page) {
    window.location.href = `${page}.html`;
}

function handleSignUp(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const name = document.querySelector('input[type="text"]').value;

    console.log('User signed up:', { name, email });
    alert('Sign up successful! Redirecting to BMI calculation.');
    navigateTo('bmi');
}

// Google Sign-In
function handleGoogleSignIn() {
    console.log('Google Sign-In clicked');
    alert('Google Sign-In successful! Redirecting to BMI calculation.');
    navigateTo('bmi');
}

// Facebook Sign-In
function handleFacebookSignIn() {
    console.log('Facebook Sign-In clicked');
    alert('Facebook Sign-In successful! Redirecting to BMI calculation.');
    navigateTo('bmi');
}

let selectedGoals = [];

function selectGoal(goal) {
    const index = selectedGoals.indexOf(goal);
    if (index > -1) {
        selectedGoals.splice(index, 1);
    } else {
        selectedGoals.push(goal);
    }
    document.querySelectorAll('.goal-button').forEach(button => {
        if (selectedGoals.includes(button.textContent.trim())) {
            button.style.borderColor = '#32cd32';
        } else {
            button.style.borderColor = '#ccc';
        }
    });
    document.getElementById('save-goals-button').style.display = selectedGoals.length > 0 ? 'block' : 'none';
}

function saveGoals() {
    console.log('Selected Goals:', selectedGoals);
    alert('Goals saved! Redirecting to confirmation page.');
    navigateTo('goalConfirmation');
}

function calculateBMI() {
    const weight = parseFloat(document.querySelector('input[placeholder="Weight (kg)"]').value);
    const height = parseFloat(document.querySelector('input[placeholder="Height (cm)"]').value) / 100;
    const bmi = (weight / (height * height)).toFixed(2);
    const classification = getBMIClassification(bmi);

    document.getElementById('bmi-result').innerText = `Your BMI is ${bmi} (${classification})`;
    document.getElementById('next-button').style.display = 'block';
}

function getBMIClassification(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    console.log('User logged in:', { email });
    alert('Login successful! Redirecting to home page.');
    navigateTo('home');
}

function updateWeeklyCalendar() {
    const today = new Date();
    const startOfWeek = today.getDate() - today.getDay() + 1; // Monday as the start of the week
    const calendarRow = document.querySelector('#weekly-calendar tr:nth-child(2)');
    calendarRow.innerHTML = ''; // Clear existing dates

    for (let i = 0; i < 7; i++) {
        const date = new Date(today.setDate(startOfWeek + i));
        const dayCell = document.createElement('td');
        dayCell.textContent = date.getDate();
        calendarRow.appendChild(dayCell);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#weekly-calendar')) {
        updateWeeklyCalendar();
    }
});

// Add more functions for handling form submissions, goal settings, etc. 