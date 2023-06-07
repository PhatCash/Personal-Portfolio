//Essential functionality
//Add an event listener when submitting the form
const form = document.querySelector(".form-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  let formValues = {};
  let errors = false;

  for (const entry of formData.entries()) {
    const [fieldName, fieldValue] = entry;

    //Check the form for valid input
    if (!fieldValue) {
      console.error(`Error Code: ${fieldName} must not be empty.`);
      errors = true;
      continue;
    }

    formValues[fieldName] = fieldValue;
  }

  //Inform the user if errors were present
  if (errors) {
    console.error(
      "The form contains errors, please fix errors before submitting the form."
    );
    return;
  }

  console.table(formValues);

  form.reset();
});

//Add en event listener when hovering over the image
const image = document.querySelector(".img");

image.addEventListener("mouseover", () => {
  //Any bigger would make text overlap
  image.style.transform = "scale(1.15)";
});

image.addEventListener("mouseout", () => {
  image.style.transform = "scale(1)";
});
