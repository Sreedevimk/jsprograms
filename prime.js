let arr=[2,4,6,8,10];

console.log(arr[0]);

function isprime(num) {

if (num<2) return false;

if (num==2)return true;

for (let i=2;i*i<=num;i++)
     { if (num%i===0) 
    return false;
}

}

return true;

console.log(isprime(2));