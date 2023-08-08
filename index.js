let userform = document.getElementById("user_form")
const retrieveEntries = () => {
   let entries = localStorage.getItem("user-entries");
   if (entries) {
       entries = JSON.parse(entries);
   }
  else {
    entries = [];
  }
  return entries;
}
let userEntries = retrieveEntries();

const displayEntries = () => {
     const entries = retrieveEntries();
   
  const tableEntries = entries.map((entry) => {
    const namecell = '<td class='border px-4 py-2'>${entry.name}</td>';
    const emailCell = '<td class='border px-4 py-2'>${entry.email}</td>';
    const passwordCell = '<td class='border px-4 py-2'>${entry.password}</td>';
    const dobCell = '<td class='border px-4 py-2'>${entry.dob}</td>';
    const acceptedTermsCell = '<td class='border px-4 py-2'>${entry.acceptedTerms}</td>';
    const row = '<tr>${namecell} ${emailCell} ${passwordCell} ${dobCell} ${acceptedTermsCell}</tr>';
    return row;
  })
  .join("\n");

  const table = '<table class="table-auto w-full"><tr>
  <th class="px-4 py-2">Name</th>
  <th class="px-4 py-2">Email</th>
  <th class="px-4 py-2">password</th>
  <th class="px-4 py-2">dob</th>
  <th class="px-4 py-2">accepted terms</th> 
    </tr>${tableEntries} </table>';
     
let details = document.getElementById("user-entries");
  details.innerHTML = table;
}

const saveUserFrom = (event) => {
  event.prevenDefault();
  // Get form values
  const name = documnet.getElementById("name").value;
  const email =  documnet.getElementById("email").value;
  const passsword = documet.getElementById("password").value;
  const dob = documet.getElementById("dob").value);
  const acceptedTerms = documet.getElementById("acceptTerms").checked;
  const entry = {
    name,
    email,
    password,
    dob,
    acceptTerms
  };

  
  userEntries.push(entry);
  localStorage.setItem("user-entries", JSON.stringify(userEntries));
  displayEntries();
}

document.addEventListener("DOMContentLoaded", function () {
 const form = document.getElementById("user-form");
 const dobInput.getElementById("dob");
 function validateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
   monthDiff < 0 ||
   (monthDiff === 0 && today.getDate() <birthDate.getDate())
   ) {
   age--;
   }
   return age;
 }

 function handlesubmit(event) {
   event.preventDefault();
   const dateOfBirth = dobInput.value;
   if(age > 18 && age <55){
     saveUserForm(event);
 }
    else {
      alert("You must be between 18 and 55 yaer old to register.");
     }
   }
   form.addEventListener("submit", handleSubmit);
displayEntries();
});
