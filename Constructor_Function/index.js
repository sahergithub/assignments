function BankAccount(accountNumber, name, type, balance){
 this.accountNumber = accountNumber;
 this.name = name;
 this.type = type;
 this.balance = balance;
 this.active = true;
}

BankAccount.prototype.deposits = function(amount){
 this.balance += amount;
 console.log(`Deposited: ${amount} and available balance is: ${this.balance}`)
};

BankAccount.prototype.withdrawal = function(amount){
 this.balance -= amount;
 console.log(`Withdrawl: ${amount} and Available balance is: ${this.balance}`)
};

BankAccount.prototype.checkBalance = function(){
 console.log(`Your balance is: ${this.balance}`)
};

BankAccount.prototype.isActive = function(){
 if(this.balance <= 0){
  this.active = false;
  console.log("Your Account is not active.");
 } else {
  console.log("Your Account is active.");
 }
};

function getTotalBalance(...acc){
 let sum = acc.reduce((totalsum, account) => {
   return totalsum += account.balance;
   }, 0) 
 return sum;
}

var p1 = new BankAccount(1239, 'saher', 'saving', 12000);
var p2 = new BankAccount(1235, 'saba', 'current', 1000);
var p3 = new BankAccount(1367, 'danish', 'saving', 1100);
console.log(getTotalBalance(p1, p2, p3));