document.addEventListener('DOMContentLoaded', function () {
    showStep(1);
});

function sanitise(data) {
    return data.replace(/[^\p{L}.@.0-9.-.'.ʼ.＇.!.\s]/g, function (match) {
      return "";
    });
  }

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
    try {
        button.innerText = "Loading...";
        button.classList.add("disabled");
        const response = await fetch(`https://www.tedxiu.com/_functions/petprototypescan?metric=${metric}&val=${sanitise(val)}`, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });
        if (response.ok) {
            showStep(step);
        } else {
            console.error(`Response status: ${response.status}`);
        }
    } catch (error) {
        console.error(error.message);
    }
    
}