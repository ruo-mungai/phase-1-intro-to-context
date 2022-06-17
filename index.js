// a function to create employee records
//returns an object whose values are in an array

const employees = ['firstName','familyName','title', 10]
function createEmployeeRecord(employee){

 const employeeObject = {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
 }
 return employeeObject
}

// create a function to hold employees record
// and map array of employee
function createEmployeeRecords(employeearray){
 let newEmployeeArray = employeearray.map(
     function (employee){
       return createEmployeeRecord(employee)
        
     })

 return newEmployeeArray
}

// function calculatePayroll(arrayEmps){
    
//     arrayEmps.map(wagesEarnedOnDate(arrayEmps)).reduce((a, b) => (a = a + b), 0);
function calculatePayroll(arrayEmps) {
     

      return arrayEmps.map(employee => allWagesFor(employee)).reduce((a,b) => (a = a+b),0)
}

// function to calculate all the due wages
function allWagesFor(employee){
  console.log(employee.timeInEvents);

  const newDate = employee.timeInEvents.map(employee => employee.date)
  return newDate.reduce((total, date) => total + wagesEarnedOnDate(employee, date),0) 

  
}


function wagesEarnedOnDate(employee, workDate){
    return employee.payPerHour * hoursWorkedOnDate(employee, workDate)
    
}


function hoursWorkedOnDate(employee, workDate){
 
    let inTime = employee.timeInEvents.filter((elmt)=> elmt.date === workDate).map((element) => element.hour);
    


   let outTime = employee.timeOutEvents.filter((elmt)=> elmt.date === workDate).map((element) => element.hour);
      return (outTime - inTime ) / 100;
    
}


function createTimeInEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ') 
    hour = parseInt(hour)
   let type = 'TimeIn'
   employee.timeInEvents.push({type, hour, date})
   
  
   return employee
}

function createTimeOutEvent(employee, dateStamp){
  let [date, hour] = dateStamp.split(' ') 
  hour = parseInt(hour)
  let type =  'TimeOut'
  employee.timeOutEvents.push({type, hour, date})
    
    
    return employee
}