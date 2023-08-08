let userform = document.getElementById("user_form")
const retrieveEntries = () => {
   let entries = localStorage.getItem("user");
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
    // const entries = retrieveEntries();
  const entries = usreEntries;
  const tableEntries = entries.map((entry) => {
    const namecell = '<td class='border px-4 py-2'>${entry.name}</td>';
    const emailcell = '<td class='border px-4 py-2'>${entry.email}</td>';
    const passwordcell = '<td class='border px-4 py-2'>${entry.password}</td>';
    const dobcell = '<td class='border px-4 py-2'>${entry.password}</td>';
    const acceptedTermscell = '<td class='border px-4 py-2'>${entry.acceptedTerms}</td>';
    const row = '<tr>${namecell} ${emailcell} ${passwordcell} ${dobcell} ${acceptedTermscell}</tr>';
    return row;
  })
  .join("\n");

  const table = '<table class="table-auto w-full"><tr>

  <th class="px-4 py-2">Name</th>
  <th class="px-4 py-2">Email</th>
  <th class="px-4 py-2">password</th>
  <th class="px-4 py-2">Dob</th>
  <th class="px-4 py-2">acceptedTerms</th> 
    </tr>${tableEntries} </table>";
    let details = document.getElementById("user");
  details.innerHTML = table;
}

const saveUserFrom = (event) => {
  event.prevenDefault();
  // Get form values
  const name = documet.getElementById("name").value;
  const email =  documet.getElementById("email").value;
  const passsword = documet.getElementById("password").value;
  const dob = new Date(documet.getElementById("DOB").value);
  const acceptedTerms = documet.getElementById("acceptedTerms").checked;

  //Validate age between 18 and 55
  const age = new Date().getFullYear() - dob.getFullYear();
  if (age < 18 || age > 55) {
       alert("You must be between 18 and 55 years old to register.");
       return;
  }

  const entry = {
    name,
    email,
    password,
    dob,
    acceptedTerms
  };

  userEntries = retrieveEntries();
  userEntries.push(entry);

  localStorage.setItem("user", JSON.stringify(userEntries));
  displayEntries();
  userform.reset();
}
userform.addEventListener("submit", saveUserForm)

displayEntries();

  
  
    
