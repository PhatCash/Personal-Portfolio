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

  if (errors) {
    console.error(
      "The form contains errors, please fix errors before submitting the form."
    );
    return;
  }

  console.table(formValues);

  form.reset();
});
