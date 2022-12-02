const monthNum = 1;

if (monthNum === 1) {
  console.log("Farvardin");
} else if (monthNum === 2) console.log("Ordibehesht");
else if (monthNum === 3) console.log("Khordad");
else console.log("Another Month");

switch (monthNum) {
  case 1:
  case 2:
  case 3:
    console.log("Bahar");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Tabestan");
    break;

  default:
    console.log("Another season");
    break;
}

if (monthNum === 1 || monthNum === 2 || monthNum === 3) {
  console.log("Bahar");
} else if (monthNum === 4 || monthNum === 5 || monthNum === 6) {
  console.log("Tabestan");
} else {
  console.log("Another season");
}
