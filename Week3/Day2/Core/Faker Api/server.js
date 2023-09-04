const express=require("express")
const { faker } = require('@faker-js/faker');
const PORT=5000
const app=express()
const createUser = () => {
    const newUser = {
        Password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastname:faker.person.lastName(),
        firstname:faker.person.firstName(),
        _id:faker.string.uuid()
    };
    return newUser;
};
const createCompany=() =>{
    const newCompany={
    _id: faker.string.uuid(),
    name: faker.person.fullName(),
    address: {
    city: faker.location.city(),
    street: faker.location.streetAddress(),
    zipcode: faker.location.zipCode(),
    country: faker.location.country(),
    }
    }
    return newCompany;
}
const newFakeUser = createUser();
const newFakeCompany = createCompany();
console.log(newFakeUser);
console.log(newFakeCompany)
const server=app.listen(PORT,()=>{
    console.log(`hello express from  : ${PORT}`)
})