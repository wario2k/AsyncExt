﻿function ghost(isDeactivated) {
    options.style.color = isDeactivated ? 'graytext' : 'black';
    // The label color.
    options.frequency.disabled = isDeactivated; // The control manipulability.
}

window.addEventListener('load', function () {
    // Initialize the option controls.
    options.isActivated.checked = JSON.parse(localStorage.isActivated);
    // The display activation.
    options.frequency.value = localStorage.frequency;
    // The display frequency, in minutes.

    if (!options.isActivated.checked) { ghost(true); }

    // Set the display activation and frequency.
    options.isActivated.onchange = function () {
        localStorage.isActivated = options.isActivated.checked;
        ghost(!options.isActivated.checked);
    };

    options.frequency.onchange = function () {
        localStorage.frequency = options.frequency.value;
    };
});

