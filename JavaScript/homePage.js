//UC5
const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
    {
      name : "David",
      gender: "Male",
      department: [
        "Engineering"
    ],
    salary: '500000',
    startDate: '29 Nov 2020',
    note: '',
    id: new Date().getTime(),
    profilePic: "../assets/profile-images/Ellipse -2.png"
  },
    {
    name : "Rahul",
    gender: "Male",
    department: [
      "Engineering"
  ],
   salary: '500000',
    startDate: '29 Nov 2020',
    note: '',
    id: new Date().getTime(),
    profilePic: "../assets/profile-images/Ellipse -2.png"
  },
  {
  name : "Darwin",
  gender: "Male",
  department: [
    "Engineering"
],
  salary: '500000',
  startDate: '29 Nov 2020',
  note: '',
  id: new Date().getTime(),
  profilePic: "../assets/profile-images/Ellipse -2.png"
  },
{
  name : "Bravo",
  gender: "Male",
  department: [
    "Engineering"
],
  salary: '500000',
  startDate: '29 Nov 2020',
  note: '',
  id: new Date().getTime(),
  profilePic: "../assets/profile-images/Ellipse -2.png"
  },
  {
    name : "Williamson",
    gender: "Male",
    department: [
      "Engineering"
  ],
  salary: '400000',
  startDate: '09 April 2019',
  note: '',
  id: new Date().getTime(),
  profilePic: "../assets/profile-images/Ellipse -2.png"
}
    
  ];
  return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
  let deptHtml = '';
  for (const dept of deptList) {
    deptHtml = `${deptHtml} <div class = 'dept-label'>${dept}</div>`
  }
  return deptHtml;
}


let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = createEmployeePayrollJSON();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    //document.write(empPayrollList);
    localStorage.getEmployeePayrollDataFromStorage(empPayrollList);
    createInnerHtml();
    localStorage.removeItem('editEmp');
  });

  const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
                        JSON.parse(localStorage.getItem('empPayrollList')) : [];
  
  }
  
  createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>StartDate</th><th>Actions</th>";
    if (empPayrollList.length == 0) return;
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
      </td>
    </tr>
      `;
    document.querySelector('#table-display').innerHTML = innerHtml;
  }

  const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData.id == node.id);
    if(!empPayrollData) return;
    const index = empPayrollList.map(empData => empData.id).indexOf(empPayrollData.id);
    empPayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
  }

  