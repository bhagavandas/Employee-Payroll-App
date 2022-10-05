//UC4
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });
  
  createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>StartDate</th><th>Actions</th>";
  
    const innerHtml = `${headerHtml};
    <tr>
      <td class="profile"><img alt="" src="../assets/profile-images/Ellipse -5.png">
      </td>
      <td>Bhagavan Das</td>
      <td>Male</td>
      <td>
        <div class="dept-label">HR</div>
        <div class="dept-label">Finance</div>
      </td>
      <td>450000</td>
      <td>25 April 2020</td>
      <td>
        <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
      </td>
    </tr>
      `;
    document.querySelector('#table-display').innerHTML = innerHtml;
  }








//UC5
const innerHtml = `${headerHtml};
let empPayrollList = createEmployeePayrollJSON();
for (const empPayrollData of empPayrollList) {
    innerHtml = '${innerHtml}
    <tr>
        <td><img class="profile" src="${empPayrollData.profilePic}" alt=""></td>
        <td>${empPayrollData.name}</td>
        <td>${empPayrollData.gender}</td>
        <td>${empPayrollData.department}</td>
        <td>${empPayrollData.salary}</td>
        <td>${empPayrollData.startDate}</td>
        <td>
            <img name="${empPayrollData.id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
            <img name="${empPayrollData.id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">