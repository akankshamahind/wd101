let userform = document.getElementById("user-form");
const retrieveEntries = () =>{
   let entries = localStorage.getItem("userEntries");
   if (entries){
       entries = JSON.parse(entries);
   }else {
    entries = [];
  }
  return entries;
}
let userEntry = retriveEntries();
const displayEntries = () => {
     const entries = retriveEntries();
     const tableEntries = entries.map((entry) =>{
         const namecell = '<td class="border px-4 py-2">${entry.name}</td>';
         const emailCell = '<td class="border px-4 py-2">${entry.email}</td>';
         const passwordCell = '<td class="border px-4 py-2">${entry.password}</td>';
         const dobCell = '<td class="border px-4 py-2">${entry.dob}</td>';
         const acceptedTermsCell = '<td class="border px-4 py-2">${entry.acceptedTerms}</td>';
         const row = '<tr>${namecell} ${emailCell} ${passwordCell} ${dobCell} ${acceptedTermsCell}</tr>';
         return row;
  }).join("\n");
  const table = `<table class="table-auto w-full"><tr>
  <th class="px-4 py-2">Name</th>
  <th class="px-4 py-2">Email</th>
  <th class="px-4 py-2">Password</th>
  <th class="px-4 py-2">Dob</th>
  <th class="px-4 py-2">Accepted terms</th> 
</tr>${tableEntries}</table>`;

     
let details = document.getElementById("userEntriesDiv");
  details.innerHTML = table;
}

const saveUserForm = (event) => {
  event.preventDefault();
  
  const name = documnet.getElementById("name").value;
  const email =  documnet.getElementById("email").value;
  const passsword = documet.getElementById("password").value;
  const dob = documet.getElementById("dob").value;
  const acceptedTerms = document.getElementById("accept-terms").checked;
  const entry = {
    name: name,
    email: email,
    password: password,
    dob: dob,
    acceptedTerms: acceptedTerms
  }
  userEntry.push(entry);
  localStorage.setItem("userEntries", JSON.stringify(userEntry));
  displayEntries();
//     document.getElementById("inline-full-name").value="";
//     document.getElementById("inline-email").value="";
//     document.getElementById("inline-password").value="";
//     document.getElementById("inline-dob").value="";
//     document.getElementById("accept-terms").checked=false;
}
userForm.addEventListener("submit", saveUserForm);
displayEntries();
