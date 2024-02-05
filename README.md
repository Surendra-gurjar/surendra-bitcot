1. App.jsx
Description: The main component that renders ContactView and AllContact.
Components Used:
ContactView: Displays a form with contact information and a list of contacts.
AllContact: Displays a list of contacts.
CSS:
Uses an external stylesheet (App.css).
Components are arranged using Flexbox.
2. ContactView.jsx
Description: Handles the view for contact management, including displaying contacts and opening the AddContact form.
State:
isAddContactOpen: Manages the visibility of the AddContact form.
singleFormDataArray: Stores an array of contact data.
Methods:
handleAllContactsClick: Opens the AddContact form.
handleFormDataArrayChange: Updates the singleFormDataArray state.
CSS:
Styles for the contact form, including responsiveness.
3. AddContact.jsx
Description: Component for adding contacts, including form fields and contact list.
Props:
closeAddContact: Function to close the AddContact form.
onFormDataArrayChange: Function to update the singleFormDataArray in ContactView.
singleFormDataArray: Array of contact data.
State:
contacts: Array of contacts.
formData: Holds form input values.
selectedContact: Tracks the selected contact for editing.
Methods:
handleChange: Updates form data on input change.
handleUpdate: Adds a new contact to the list.
handleReset: Resets the form.
CSS:
Styles for the contact form and contact list.
4. AllContact.jsx
Description: Component that displays a list of contacts.
State:
formDataList: Array of contact data.
Methods:
handleView: Logs a message for viewing a contact.
handleDelete: Logs a message for deleting a contact.
handleEdit: Logs a message for editing a contact.
CSS:
Styles for displaying contact information, including responsiveness.
5. App.css
Description: External stylesheet for styling components.
CSS:
Contains styles for ContactView, AddContact, and AllContact.
Note: The provided CSS uses Flexbox and media queries to ensure responsiveness across different screen sizes.
