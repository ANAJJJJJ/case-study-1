const employees = [
    { name: "Alice Johnson", department: "HR" },
    { name: "Bob Smith", department: "Engineering" },
    { name: "Charlie Brown", department: "Marketing" },
    { name: "David Wilson", department: "Engineering" },
    { name: "Eve Adams", department: "HR" }
]

const dept = document.getElementById("Dept");
const employeeList=document.getElementById("employeelist")
dept.addEventListener("change",(e)=>{
    console.log(e.target.value)
    renderemployees(e.target.value)
})

const renderemployees = (data)=>{
    employeeList.innerHTML="";
    const output = data==="ALL"?employees:employees.filter(emp=>emp.department===data)
    
    output.forEach(emp => {
        const li = document.createElement("li");
        li.textContent=`${emp.name} - ${emp.department}`
        employeeList.appendChild(li);
    })}
    renderemployees("ALL")




