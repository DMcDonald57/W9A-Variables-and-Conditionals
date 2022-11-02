let age = 15;
let isSubcribed = true;

if((age <18)&&(isSubcribed !=true)){
    console.log("Sorry, you can't be here!");
}else if ((age >=18)&&(isSubcribed !=true)){
    console.log("You need to Subscribe!");
}else if ((age <18)&&(isSubcribed =true)){
    console.log("Enter at own Risk!");
}else {
    console.log("Welcome to the page");
}
