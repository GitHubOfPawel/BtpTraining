// service MyService {
 
//     function hello(name: String) returns String;
 
// }

//to keep my name:
//we are defining our service end point
service MyService @(path: 'MyService') {
    //MPC extension class
    function hello(name: String) returns String;
 
}