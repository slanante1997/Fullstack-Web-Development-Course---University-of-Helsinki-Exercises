const express = require("express");
var morgan = require("morgan");
const app = express();

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};


morgan.token('contactInfo', function (req) {
  return JSON.stringify(req.body);
});


app.use(express.json());
app.use(requestLogger);
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :contactInfo'));


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

const generateId = () => {
  const maxId =
    contactList.length > 0 ? Math.max(...contactList.map((n) => n.id)) : 0;
  return maxId + 1;
};

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

app.post("/api/contacts", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "name or number missing",
    });
  }

  if (contactList.find((contact) => contact.name === body.name)) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const contact = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  contactList = contactList.concat(contact);

  response.json(contact);
});

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
