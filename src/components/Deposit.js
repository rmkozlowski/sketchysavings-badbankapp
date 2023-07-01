// Deposit.js
import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import Card from "react-bootstrap/Card";
import "./styles/Card.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Deposit({loggedInUser, updateUser, updateUserBalance}) {
  const [amount, setAmount] = useState("");
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState("");

  const handleDeposit = () => {
    if (!validate(amount, "amount")) return;
    /* ctx.loggedInUser.balance = ctx.loggedInUser.balance + Number(amount); */
/*
    for (let i = 0; i < ctx.users.length; i++) {
      if (ctx.users[i].email === loggedInUser.email) {
        ctx.users[i].balance = loggedInUser.balance + Number(amount);
      }
    }
*/
    const updatedUser = { ...loggedInUser, balance: loggedInUser.balance + Number(amount) };
    updateUser(updatedUser);
    updateUserBalance(updatedUser);
    showSuccess();
  };

  function reset() {
    setTimeout(() => {
      setStatus("");
      setAmount("");
    }, 4000);
  }

  function showSuccess() {
    setStatus(`Your deposit of $${amount} was successful!`)
    reset();
  }

  function validate(field, label) {

    if (isNaN(field)) {
      setStatus("Error: " + label + " should be a number.");
      reset();
      return false;
    } else if (Number(field) < 0) {
      setStatus("Error: " + label + " cannot be negative.");
      reset();
      return false;
    }
    else if (!field) {
      setStatus("Error: " + label + " cannot be empty.");
      reset();
      return false;
    }
    return true;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title>Deposit</Card.Title>
          <Card.Text>Your current balance is ${loggedInUser.balance}</Card.Text>
          <Form>
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            {status && <p>{status}</p>}
            <Button
              type="button"
              className="btn btn-light"
              onClick={handleDeposit}
              disabled={status !== "" || amount === ""}
            >
              Deposit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Deposit;