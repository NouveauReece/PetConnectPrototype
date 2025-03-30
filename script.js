document.addEventListener('DOMContentLoaded', function () {
    showStep(1);
});

function showStep(step) {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach((stepElement, index) => {
        stepElement.classList.remove('active');
        if (index === step - 1) {
            stepElement.classList.add('active');
        }
    });
}

async function nextStep(step, metric, val, button) {
    setTimeout(() => {
        showStep(step);
    }, 1500);
    try {
        button.innerText = "Loading...";
        button.classList.add("disabled");
        console.log(val);
        const response = await fetch(`https://www.tedxiu.com/_functions/petprototypescan?metric=${metric}&val=${val}`, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });
        if (response.ok) {
            
        } else {
            console.error(`Response status: ${response.status}`);
        }
    } catch (error) {
        console.error(error.message);
    }
    
}