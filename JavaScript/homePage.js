
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
  });

  const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
  
  }
  
  createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>StartDate</th><th>Actions</th>";
    if (empPayrollList.length == 0) return;
    const innerHtml = `${headerHtml};
    
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
      </td>
    </tr>
      `;
    document.querySelector('#table-display').innerHTML = innerHtml;
  }
