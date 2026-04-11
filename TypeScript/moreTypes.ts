let response: any = "64";

let numericLength: number = (response as string).length;
// over here we are doing forcefull assertion

type book = {
  name: string;
};

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;

value.toUppperCase();
// Over here is any type there will be no error

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;

// newValue.toUppperCase();
// This instantly gives error because of unknown type

if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
  //
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }

  console.log("Error", error);
}

const data: unknown = "chai aur code"
const strData: string = data as string

type Role = "admin" | "user" | "superAdmin";


function redirectBasedOnRole (role : Role): void {
  if (role === "admin"){
    console.log("Redirecting to Admin Dashboard");
    return;
  } 
  if (role === "user"){
    console.log("Redirecting to user Dashboard");
    return;
  } 
  role; // on hover this shows that the other case must be superadmin 
  
}

function neverReturn (): never {
  while(true){}
}