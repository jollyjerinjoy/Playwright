const {test, request, expect } = require("@playwright/test");


test('get request-fetch users',async({request})=>{
    const response=await request.get("https://jsonplaceholder.typicode.com/users");
    expect(response.ok()).toBeTruthy(); //
    const body=await response.json(); //stores body
    expect (body.length).toBeGreaterThan(0);
})

test('Post request-create user', async({request})=>{
    const response=await request.post("https://jsonplaceholder.typicode.com/users",{
        data:{
            name:"jolly jo",
            email:"jk@gmail.com"
        }
    })
    expect(response.status()).toBe(201)
    const responseBody=await response.json();
    expect(responseBody.name).toBe("jolly jo");
})

