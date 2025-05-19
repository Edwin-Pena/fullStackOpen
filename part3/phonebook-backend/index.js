require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const Person = require("./models/note");

morgan.token("body", (request, response) => {
  return JSON.stringify(request.body);
});

app.use(express.json());
app.use(express.static("dist"));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id).then((persons) => {
    response.json(persons);
  });
  /* .catch((error) => {
      console.log("That contact doesn't exist", error.message);
      response.status(404).end();
    }); */
});

app.get("/info", (request, response) => {
  Person.find({}).then((persons) => {
    const entries = persons.length;
    const currentTime = new Date();
    response.send(
      `<p>Phonebook has info for ${entries} people</p>${currentTime}</p>`
    );
  });
});

app.delete("/api/persons/:id", (request, response) => {
  Person.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

const generateId = (min, max) => {
  return Math.random() * (max - min) + min;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;
  console.log("this is te name:", body.name);

  if (!body.name || !body.number) {
    return response.status(404).json({
      error: "content missing",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson);
    console.log(
      `added ${savedPerson.name} number ${savedPerson.number} to phonebook`
    );
  });
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
