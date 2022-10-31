'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.map((val, index) => {
    const type = val > 0 ? "Deposit" : "Withdrawl";

    if (val > 0) 
    {
      
      const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--deposit">${index + 1} ${type}</div>
      <div class="movements__value">${val}</div>
      </div> `
      containerMovements.insertAdjacentHTML("afterbegin", html);
    }
    else {
      const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--withdrawal">${index + 1} ${type}</div>
      <div class="movements__value">${val}</div>
      </div>`
      containerMovements.insertAdjacentHTML("afterbegin", html);
    }

  });


}



// const displayMovements = function (movements) {
//   containerMovements.innerHTML = "";
//   movements.map((val, index) => {

//     const type = val > 0 ? "Deposit" : "Withdrawl";

//     const html = `
//     <div class="movements__row">
//     <div class="movements__type movements__type--deposit">${index + 1} ${type}</div>
//     <div class="movements__value">${val} €</div>
//   </div>`
//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   });

// }


displayMovements(account1.movements)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const createUsernames = function(accs){
//   accs.forEach(function(acc){
//   acc.username=acc.owner
//   .toLowerCase()
//   .split(" ")
//   .map(name=>name[0])
//   .join("")

// })
// }
//   createUsernames(accounts);

//   console.log(account1.username);
//console.log(account1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);



// ARRAY METHODS


/*
console.log( movements [ 0] ); 
movements [ 2 ]
-450
console.log(movenents);
console.log(movements.pop())  // remove the last element of the array
movements.push(23) //adds an element to the end of the array
console.log(movements);
*/


// console.log(movements.includes(200)) // Booleans - > True or False
// console.log(moveoents.includes (20) )


// slice
// console.log(arr.slice(2));
// console.log(arr);
// consolelog(arr.slice(2,4) );
// console.log(arr. slice( -3) );


// splice - changes the existing array
// console. log(arr. splice(l, 2));
// console. log(arr)


// console.log(arr.reverse());

// JOIN
// console.log(arr.join("&&")


// const prerna ={
//   firstName: "prerna",
//   lastName: "Gupta" ,
//   birthyear: 1999,
//   job:  "Teacher" ,
//   hasDriverLicense: true,
//   calcAge: function(){
//   console.log(this );
//   return 2022 - this-birthYear;
//   }
//   }
//   console.log(prerna)
//   const nameKey = 'Name';
//   console.log (prerna['first '+ nameKey]);
//   console.log(prerna.firstName);
//   console.log(prerna.calcAge());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(var i=0;i<=movements.length;i++){
//   console.log(movements[i]);
// }

// for(let m of movements)
// {
//   console.log(m);
//   if(m>0)
//   {
//     console.log(`Deposit amount ${m}`);
//   }
//   else{
//     console.log(`withdrawl amount ${m}`);
//   }
// }

// FOR EACH
// movements. forEach(function(m,i){
//   console.log(`user number ${i+l}:Deposit of amount ${m}`)
//   console.log(`User number ${i+l}:Withdrawal of amount ${m}' )
// }


  // //FOR OF
  // for(let m of movements){
  // if (m>0) {
  // console-log(' Deposit of amount ${m}' )
  // }else{
  // console-log(SWithdrawal of amount ${m}')
  // }
  

// maps

// const euroToUSD =1.1
// const movementsUSD = movements.map((mov,id)=>{
//   return mov*euroToUSD;
// })
// console.log(movementsUSD);


//Maps
// const movementsDescription = movements.map((current_element,index,array_itself)=>{
//   console. log(current_element, index, array_itself)
//   })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let currentAccount = "";
// btnLogin.addEventListener("click", (event) => {
//   event.preventDefault();
//   let user = inputLoginUsername.value;
//   let pass = inputLoginPin.value;

//   // console.log(`user ${user} pass ${pass}`);

//   currentAccount = accounts.find((account) => account.owner === user)

//   console.log(currentAccount);

//   if (currentAccount.pin === Number(pass)) 
//   {
//     console.log("Login Successful");
//   }
// })

///For Login


let currentAccount = "";
let currrentBalance;
btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  let user = inputLoginUsername.value;
  let pass = inputLoginPin.value;

  // console.log(`user ${user} pass ${pass}`);

  currentAccount = accounts.find(account => {
    if (account.owner === user) {
      console.log("Usename Matched");
      return account;
    }
  })
  console.log(currentAccount);

  if (currentAccount.pin === Number(pass)) {
    let person = `Welcome Back ${currentAccount.owner.split(" ")[0]} ❤️`
    labelWelcome.innerHTML = person;
    containerApp.style.opacity = "100%";


    console.log("Login Successful");
  }

  let balanceAccount = currentAccount.movements;

  currrentBalance = balanceAccount.reduce(
    (total, value) => total + value, 0)

  console.log(currrentBalance);

  labelBalance.innerHTML = currrentBalance;

  if(currrentBalance <5000)
  {
    
    labelSumInterest.innerHTML= 1000 + "€";
  }
  else
  {
    labelSumInterest.innerHTML= 2000 + "€";
  }

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// For Transfer money

btnTransfer.addEventListener("click", (event) => {
  event.preventDefault();
  let tName = inputTransferTo.value;
  let tAmount = inputTransferAmount.value;
  let sendAmount = Number(tAmount);
  let sendAccount = accounts.find((account) => {
    if (account.owner === tName) {
      return account;
    }
  })

 
  console.log(currentAccount);
  console.log(sendAccount);

  let balanceAccount = currentAccount.movements;

  currrentBalance = balanceAccount.reduce(
    (total, value) => total + value, 0);


  let balanceLeft;
  if (currrentBalance > sendAmount && currentAccount.owner !== sendAccount.owner) {
    console.log("Valid Transfer");
    balanceLeft = currrentBalance - sendAmount;
  }


  labelBalance.innerHTML = balanceLeft;
  labelSumOut.innerHTML = sendAmount +"€";
  

  accounts.find((account) => {
    if (sendAccount.owner === account.owner) {
      let value = sendAccount.movements;
      let receiverAmount = value.reduce((total, value) => total + value, 0);

      let total = receiverAmount + sendAmount;

      console.log(total);
    }
  })

  if(balanceLeft <5000)
  {
    
    labelSumInterest.innerHTML= 1000 + "€";
  }
  else
  {
    labelSumInterest.innerHTML= 2000 + "€";
  }


})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Date
const current = new Date();
const todaysDate = current.toLocaleDateString();

labelDate.innerHTML= todaysDate;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Loan

btnLoan.addEventListener("click",(event)=>{
  event.preventDefault();
  let user = inputLoginUsername.value;
  const loanAmountField = inputLoanAmount.value;
  const loanAmount = Number(loanAmountField);

  const loanAccount = accounts.find(account => {
    if (account.owner === user) {
      console.log("Usename Matched");
      return account;
    }
  })
  console.log(loanAccount);

  let takeMoneyAcc = loanAccount.movements;

  let beforeloanBalance = takeMoneyAcc.reduce((total, value) => total + value, 0);
  
  console.log(beforeloanBalance);

  const afterloanBalance = beforeloanBalance + loanAmount;

  labelBalance.innerHTML =afterloanBalance;
  labelSumIn.innerHTML = loanAmount + "€";

  if(afterloanBalance <5000)
  {
    
    labelSumInterest.innerHTML= 1000 + "€";
  }
  else
  {
    labelSumInterest.innerHTML= 2000 + "€";
  }
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Close Account 

btnClose.addEventListener("click",(event)=>{
  event.preventDefault();
  const closeUser = inputCloseUsername.value;
  const closePin = inputClosePin.value;

  const closeAccount = accounts.find(acc =>{
    if(acc.owner === closeUser)
    {
      console.log("Usename Matched");
      return acc;
    }
  })

  console.log(closeAccount);

  if(closeAccount.pin === Number(closePin))
  {
    console.log("pin Matched");
    containerMovements.innerHTML = "";
    console.log("Account Closed")
  }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//sorting

btnSort.addEventListener("click",(event)=>{
  event.preventDefault();

  let user = inputLoginUsername.value;
  let pass = inputLoginPin.value;

  const sortAccount = accounts.find(acc =>{
    if(acc.owner === user)
    {
      return acc;
    }
  })

  if(sortAccount.pin === Number(pass))
  {
   const sortAccMove = sortAccount.movements;
    const sortedValues = sortAccMove.sort();
    console.log(sortedValues);

      containerMovements.innerHTML = "";
      sortedValues.map((sortedval, index) => {

      const type = sortedval > 0 ? "Deposit" : "Withdrawl";
  
      if (sortedval > 0) 
      {
        
        const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--deposit">${index + 1} ${type}</div>
        <div class="movements__value">${sortedval}</div>
        </div> `
        containerMovements.insertAdjacentHTML("afterbegin", html);
      }
      else {
        const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--withdrawal">${index + 1} ${type}</div>
        <div class="movements__value">${sortedval}</div>
        </div>`
        containerMovements.insertAdjacentHTML("afterbegin", html);
      }
  
    });
  }
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////