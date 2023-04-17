const express = require("express");
const app = express();

app.use(express.json());

let contactList = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/contacts", (request, response) => {
  response.json(contactList);
});

app.get("/info", (request, response) => {
  const date = new Date();
  response.send(
    `<p>Phonebook has info for ${contactList.length} people</p><p>${date}</p>`
  );
});

app.get("/api/contacts/:id", (request, response) => {
  const id = Number(request.params.id);
  const contact = contactList.find((contact) => contact.id === id);
  if (contact) {
    response.json(contact);
  } else {
    response.status(404).end();
  }
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
