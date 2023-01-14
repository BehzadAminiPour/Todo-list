import { useState } from "react";
import { Input, Label, Form, FormGroup, Button } from "reactstrap";
import ErrorModal from "./UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
 
  const onSubmit = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (must be > 0)",
      });
      return;
    }
    props.onAddUsers(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };
  const onChangeName = (event) => {
    setEnteredName(event.target.value);
  };
  const onChangeAge = (event) => {
    setEnteredAge(event.target.value);
  };
  const modalHandler =()=>{
    setError(null)
  }
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} closeModal={modalHandler}/>}
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="addUsers" className="text-light">
            User name
          </Label>
          <Input
            id="addUsers"
            type="text"
            value={enteredName}
            onChange={onChangeName}
          />
        </FormGroup>

        <FormGroup>
          <Label for="number" className="text-light">
            Age (Years old)
          </Label>
          <Input
            id="number"
            type="number"
            value={enteredAge}
            onChange={onChangeAge}
          />
        </FormGroup>

        <Button color="success">Add User</Button>
      </Form>
    </>
  );
};

export default AddUsers;
