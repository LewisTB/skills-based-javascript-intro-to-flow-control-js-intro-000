function basicTeenager(age) {
if (age>=13&&age<=19) {
return "You are a teenager!"
}
}

function teenager(age) {
  if (age>=13&&age<19) {
    return ("You are a teenager!")
  }
  else {
  return ("You are not a teenager")
  }
}

function ageChecker(age) {
if (age>=13&&age<19){
  return("You are a teenager!")
}
elseif (age<13){
  return("You are a child")
}
elseif (age>=20){
  return("You are an adult")
}
}

function ternaryTeenager(age) {
return(age>=13&&age<19) ?("You are a teenager") : ("You are not a teenager")
}

function switchAge(age) {
  switch(age) {
    case 13 14 15 16 17 18:
    return "You are a teenager" ;
    break;
    default:
    return "You have an age"
  }

}
