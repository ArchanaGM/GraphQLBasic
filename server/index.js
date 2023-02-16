const express = require("express");
const app = express();
const PORT = 6969;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
/* run graphql*/
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

/*To access graphql in web http://localhost:6969/graphql 
type --> below
QUERY IS TO RECEIVE STUFFS
query {
  getAllUsers {
    firstName
    lastName
    email
    password
  }
}
and run using play button
----
mutuaTION IS TO MUTATE STUFFS
mutation {
  createUser(firstName: "archana", lastName: "ganesan", email:"arc@gmail.com",
  password: "start123") {
    firstName
    lastName
    email
    password
  }
}

*/
app.listen(PORT, () => {
  console.log("Server running in port: " + PORT);
});
