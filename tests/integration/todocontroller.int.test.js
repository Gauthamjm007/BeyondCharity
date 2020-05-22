const request = require("supertest");
const app = require("../../app");
const newTodo = require("../mock-data/new-todo.json");
const endpointUrl = "/todos/";
describe(endpointUrl, () => {
  
  it("POST", +endpointUrl, () => {
 const response= await request(app).post(endpointUrl).send(newTodo);
 expect(response.statusCode).toBe(201);
 expect(response.title).toBe(newTodo.title);
 expect(response.done).toBe(newTodo.done);
  });
});
