var students = [
    {firstName: 'Cam', lastName: 'Newton'},
    {firstName: 'Ted', lastName: 'Ginn'},
    {firstName: 'Greg', lastName: 'Olsen'}
]
var fullNames = students.map(function(a){
    return a.firstName + ' ' + a.lastName;
});
console.log(fullNames);
