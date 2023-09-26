export default function* createIteratorObject(report) {
    const departments = Object.keys(report.allEmployees);
  
    for (const department of departments) {
      const employees = report.allEmployees[department];
  
      for (const employee of employees) {
        yield employee;
      }
    }
  }
  