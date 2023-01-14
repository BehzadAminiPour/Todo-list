import React from 'react';
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'
const ErrorModal = (props) => {
  return (
    <>
    <div className={classes.backdrop} onClick={props.closeModal}>
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h3>{props.title}</h3>
      </header>
      <div className={classes.content}>
        <p>
          {props.message}
        </p>
      </div>
      <footer className={classes.action}>
        <Button onClick={props.closeModal}>Okay</Button>
      </footer>
    </Card>
    </div>
    </>
  );
};

export default ErrorModal;
