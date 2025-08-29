import express from "express";

const app = express();
export default app;

import employees from "#db/employees";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.send(randomEmployee);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  if (id > employees.length - 1) {
    return res.status(404).send("404 Employee not found");
  } else if (id <= 0) {
    return res.status(404).send("404 Employee not found");
  } else res.status(200).send(employees[id - 1]);
});
