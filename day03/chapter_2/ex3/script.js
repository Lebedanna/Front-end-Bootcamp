document.addEventListener("DOMContentLoaded", function () {
    const result = document.querySelector("input");
    const buttons = document.querySelectorAll(".child-item");

    function clearResult() {
        result.value = "";
    }

    function addToResult(value) {
        result.value += value;
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const buttonValue = button.textContent;
            if (buttonValue === "=") {
                try {
                    const input = result.value.replaceAll('X', '*');
                    result.value = eval(input);
                } catch (error) {
                    result.value = "ERROR";
                }
            } else if (buttonValue === "C") {
                clearResult();
            } else {
                addToResult(buttonValue);
            }
        });
    });

});



