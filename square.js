let arry=[2,4,6,8];

    function sumofsquares(arr) {
    
    let sum=0;
    
    for (let i=0;i<arr.length;i++) {
    
    (sum+=arr[i]*arr[i]);
    
    }
    
    return sum;
    
    }
    
    console.log(sumofsquares (arry));