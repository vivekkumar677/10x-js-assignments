function CreateObject(arr) {
    // Write your code here
    const ar = {};
    for (var i=0; i<arr.length; i+=2){
        
        ar[arr[i]] = arr[i+1];
    }
    return ar;
}

module.exports = CreateObject;
