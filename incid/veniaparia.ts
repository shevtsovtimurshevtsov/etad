interface SideHustle {
  sidehustle: number;
}

class IncomeStreams implements SideHustle {
  sidehustle: number;

  constructor(sidehustle: number) {
    this.sidehustle = sidehustle;
  }

  // Method to display the side hustle income
  displayIncome(): string {
    return `Side hustle income is: \$${this.sidehustle}`;
  }
}

// Creating an instance with a side hustle income of 100
const myIncome = new IncomeStreams(100);
console.log(myIncome.displayIncome());
