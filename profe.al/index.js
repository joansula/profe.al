document.addEventListener("DOMContentLoaded", function () {
  const toggleFiltersBtn = document.getElementById("toggleFiltersBtn");
  const filtersCard = document.getElementById("filtersCard");

  // Add click event listener to the toggle button
  toggleFiltersBtn.addEventListener("click", function () {
    // Toggle the 'd-none' class to show/hide the filters card
    filtersCard.classList.toggle("d-none");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("customRange");
  var output = document.getElementById("rangeValue");

  // Display the default slider value with formatting
  output.innerHTML = `0$ - ${slider.value}$`;

  // Update the current slider value (each time you drag the slider handle) with formatting
  slider.oninput = function () {
    output.innerHTML = `0$ - ${this.value}$`;
  };
});
