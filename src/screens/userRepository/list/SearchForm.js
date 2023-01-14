import React, { useState } from "react";
import { getUserRepositories } from "../../../store/slice/UserRepository/ListSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Input = styled.input`
  border: solid 0.1rem mediumpurple;
`;

const Button = styled.button`
  color: white;
  background-color: mediumpurple;
  border: solid 0.1rem mediumpurple;
  padding: 0.5rem 1.5rem;
`;
const SearchForm = ({}) => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (event) => setUsername(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(getUserRepositories({ username }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Input
          placeholder="Enter the username..."
          type="text"
          value={username}
          onChange={handleInputChange}
        />

        <Button role="button">Submit</Button>
      </Container>
    </form>
  );
};

export default SearchForm;
