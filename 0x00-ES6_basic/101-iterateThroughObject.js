export default function iterateThroughObject(reportWithIterator) {
    const employeeNames = [...reportWithIterator].join('|');
    return employeeNames;
  }
  