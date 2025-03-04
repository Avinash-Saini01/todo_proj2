import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return ;
    dispatch(
        addTodo({
            id: todos.length +1,
            title,
        })
    );
  };

  return (
    <StFormContainer>
        <form onSubmit={onSubmitHandler}>
            <label>Todos</label>
            <StInput 
                type ="text"
                value = {title} 
                onChange = {(e) => {
                    setTitle(e.target.value);
                }} 
            />
            <StButton>Submit</StButton>
        </form>
    </StFormContainer>
  )
};

export default AddForm;

const StFormContainer = styled.div`
    display: flex;
    gap: 24px;
    padding: 30px;
`;

const StButton = styled.button`
    border: none;
    background-color: #eee;
    height: 25px;
    cursor: pointer;
    width: 120px;
    border-radius: 12px;
`;

const StInput = styled.input`
    border: 1px solid #eee;
    margin: 0 24px;
    height: 25px;
    width: 300px;
    border-radius: 12px;
    outline: none;
    padding: 0 10px;
`;