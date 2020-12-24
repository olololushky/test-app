import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal, Button, TextField } from '@material-ui/core'
import './style.css'
import { useForm } from 'react-hook-form'

const style = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function SimpleModal() {
  const classes = useStyles()
  const [modalStyle] = useState(style)
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="modal-title">Feedback</h2>
      <form onSubmit={handleSubmit(handleClose)}>
        <TextField
          id="outlined-basic"
          label="Your name"
          variant="outlined"
          name="name"
          inputRef={register({ required: true, minLength: 3 })}
          className="text-field"
          error={!!errors.name}
          helperText={
            (errors.name &&
              errors.name.type === 'required' &&
              'This field is required') ||
            (errors.name &&
              errors.name.type === 'minLength' &&
              'Name should have min length of 3.')
          }
        />
        <TextField
          id="outlined-multiline-static"
          label="Tell us what happened"
          multiline
          rows={7}
          variant="outlined"
          name="text"
          className="text-field"
          inputRef={register({ required: true })}
          error={!!errors.text}
          helperText={errors.text && 'This field is required'}
        />
        <div className="buttons-container">
          <Button
            variant="contained"
            className="feedback-modal-button"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="feedback-modal-button"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        className="feedback-button"
      >
        Feedback
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {body}
      </Modal>
    </>
  )
}
