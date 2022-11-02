let age = 15;
let isSubcribed = true;

if((age <18)&&(isSubcribed !=true)){
    console.log("The user is younger than 18 and is not subcribed");
}else if ((age >=18)&&(isSubcribed !=true)){
    console.log("The user is older or equal to 18 is not subscribed");
}else if ((age <18)&&(isSubcribed =true)){
    console.log("The user is younger than 18 and is subscribed");
}else {
    console.log("The user is older than 18 and is subcribed");
}
