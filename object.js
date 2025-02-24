let name='eman';
const contact={ //obj  //const keyword dictates that address of contact is constant(cant be changed) but value can be changed
    phoneNumber:'7623813818',
    email:'eman@gmail.com',
    name:'eman',
    address:{     //nested obj
        city:'karachi',
        province:'sindh',
        country:'pakistan',
        location:{
            longitude:'23232',
            latitude:'34',
        },
        greet(){
            return `hello I'm ${contact.name}. My email is ${contact.email}`
        }
    },
   
};
// delete contact.address.province;
// console.log(contact.address.greet());

const contact2=contact;//even after copying a seperate copy is not made but just contact 2 starts pointing to same obj
contact2.name='hiba';
console.log(contact2.name); 
console.log(contact.name);

const obj1={name:'eman'};
const obj2=obj1;
const obj3={name:'eman'};
console.log(obj1===obj2); //true because yahan address ompare horha and address is same for obj1& obj2
console.log(obj1===obj3); //false bcz yahan even tho value same but stored at different addresses so not equal





