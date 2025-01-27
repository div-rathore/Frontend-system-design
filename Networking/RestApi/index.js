import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.all("/", (req, res) => {
  // console.log('request= ', req);
  // console.log('response= ', res);
  res.send("i am up");
});
const todos = [
  {
    id: "1",
    title: "task1",
    completed: false,
  },
  {
    id: "2",
    title: "task2",
    completed: false,
  },
  {
    id: "3",
    title: "task3",
    completed: false,
  },
];

// READ
app.get("/todos", (req, res) => {
  res.json(todos);
});
// CREATE

app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json({
    message: "new todo added",
  });
});

// UPDATE

app.put("/todos/:id", (req, res) => {
  const newToDoData = req.body;
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((td) => td.id === todoParamId);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamId,
      ...newToDoData,
    };
    res.status().json({
      message: "todo updated successfully",
    });
  } else {
    res.status(400).json({
      message: "Todo Id doesnt exist",
    });
  }
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((td) => td.id === todoParamId);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  res.json({
    message: "todo deleted successfully",
  });
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`server is running a port ${PORT}`);
});
