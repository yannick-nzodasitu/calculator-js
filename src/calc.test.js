import {subtract, sum } from "./calc";

beforeAll(()=> {
    console.log("This will run  before all the test");
})
beforeEach(()=> {
    console.log("This will be printed before each test");
})

afterEach(()=> {
    console.log("This will be printed after each test");
}) 

afterAll(()=> {
    console.log("This will run  after all the test");
})   

test('Adding 2 + 3 should give me 5', () => {
    expect(sum(4, 3)).toBe(7);
})

test('Subtract 2 from 3 that should give me a 1', () => {
    expect(subtract(3, 2)).toBe(1);
})

// describe('sum',()=>{
//     each([

//     ]).test('sum %s and %s should be %s', (a,b,result) => {
//         expect(sum(a,b)).toBe()
//     })
// })