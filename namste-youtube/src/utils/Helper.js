export function generateRandomName() {
    const firstNames = ["John", "Jane", "Alex", "Emily", "Chris", "Katie", "Michael", "Sarah", "David", "Laura"];
    const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Miller", "Davis", "Garcia", "Martinez", "Hernandez"];
    
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    return `${randomFirstName} ${randomLastName}`;
  }
  
  console.log(generateRandomName());
  