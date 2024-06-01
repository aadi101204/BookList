document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementsByClassName("flex-item")[0];
  const removeButton = document.getElementsByClassName("flex-item")[1];
  const dialog = document.getElementById("dialog");
  const form = document.getElementById("form");
  const bookTable = document.getElementById("header").querySelector("tbody");

  // Show the dialog when the Add button is clicked
  addButton.addEventListener("click", () => {
    dialog.showModal();
  });

  // Handle form submission to add a new book
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const bookName = formData.get("name");
    const author = formData.get("author");
    const dateOfBorrow = formData.get("Dateofborrow");
    const pages = formData.get("pages");

    // Add a new row to the table
    const newRow = bookTable.insertRow();
    newRow.innerHTML = `
      <td>${bookName}</td>
      <td>${author}</td>
      <td>${dateOfBorrow}</td>
      <td>${pages}</td>
      <td><input type="checkbox" id="r"></td>
    `;

    // Reset the form and close the dialog
    form.reset();
    dialog.close();
  });

  // Handle row selection for removal
  select = document.getElementById("r");
  select.addEventListener("click", (event) => {
    if (event.target.tagName === "td") {
      const row = event.target.parentNode;
      row.classList.toggle("selected");
    }
  });

  // Remove the selected book
  removeButton.addEventListener("click", () => {
    const selectedRow = select.querySelector(".selected");
    if (selectedRow) {
      selectedRow.remove();
    } else {
      alert("Please select a book to remove.");
    }
  });
});
