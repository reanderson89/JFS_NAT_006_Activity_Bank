const form = document.getElementById("empForm");

form.addEventListener("submit", function (event) {
  // prevents the page from refreshing
  event.preventDefault();

  const empName = document.getElementById("name").value;
  const empPosition = document.getElementById("position").value;
  const empDepartment = document.getElementById("department").value;

  let empObj = {
    name: empName,
    position: empPosition,
    department: empDepartment,
  };

  let newEmpArr = [empObj];
  addEmpToTable(newEmpArr);

  form.reset();
});

// imagine this data is coming in from a database when the page loads
let incomingData = [
    {
      name: "Robert",
      position: "Instructor",
      department: "Catalyst",
    },
    {
      name: "Melissa",
      position: "TA",
      department: "Catalyst",
    },
    {
      name: "Steven",
      position: "TA",
      department: "Catalyst",
    },
  ];

const addEmpToTable = function (empArr) {
  const employeeTable = document.getElementById("employee-table");

  //   forEach is a builtin method for arrays
  empArr.forEach((emp) => {
    // Step1: create element
    let newRow = document.createElement("tr");

    // Step2: give it content
    newRow.innerHTML = `<td>${emp.name}</td>
    <td>${emp.position}</td>
    <td>${emp.department}</td>`;

    // Step 3: append to parent
    employeeTable.append(newRow);
  });
};

// this function call will display the incoming data to the page when the page loads
addEmpToTable(incomingData);