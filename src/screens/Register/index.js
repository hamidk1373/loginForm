import React, { useState } from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import {
  Button,
  CircularProgress,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Paper,
  Radio,
  Typography
} from '@material-ui/core'
import Moment from 'moment'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { Field, Form, Formik } from 'formik'
import { KeyboardDatePicker } from 'formik-material-ui-pickers'
import { toast } from 'react-toastify'
import { CheckboxWithLabel, RadioGroup, TextField } from 'formik-material-ui'
import { Link, useHistory } from 'react-router-dom'
import { validationSchema } from './validationSchema'
import { initialValues } from './formInitialization'
import { useStyles } from './registerForm.style'
import { request } from '../../helpers/request'

export default function RegisterForm() {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const history = useHistory()

  const handleSubmitForm = (data, setSubmitting) => {
    request('/auth/register', 'POST', data).then(
      ({ statusCode, JSONResponse }) => {
        setSubmitting(false)
        if (statusCode === 200) {
          toast.success(JSONResponse.data.message)
          localStorage.token = JSONResponse.data.token
          history.replace('/home')
        } else if (statusCode === 404) {
          toast.error(JSONResponse.message)
        } else {
          toast.error(JSONResponse.message)
        }
      }
    )
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Paper className={classes.container}>
        <Typography variant="h4" className={classes.header}>
          Sign Up{' '}
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            const data = {
              ...values,
              repeatPass: undefined,
              birthday: Moment(values.birthday).format('YYYY-MM-DD')
            }
            handleSubmitForm(data, setSubmitting)
            // handleSubmit(values).then(() => setSubmitting(false))
          }}
        >
          {({ submitForm, isSubmitting, isValid }) => (
            <Form className={classes.form}>
              <div className={classes.gender}>
                <Field component={RadioGroup} name="gender">
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                  />
                </Field>
              </div>
              <Divider variant="fullWidth" />
              <Field
                component={TextField}
                name="firstName"
                label="First name"
                className={classes.textfieldInfoRegister}
                // InputLabelProps={{
                //   shrink: true
                // }}
                variant="outlined"
                fullWidth
              />
              <Field
                component={TextField}
                name="lastName"
                label="Last name"
                className={classes.textfieldInfoRegister}
                variant="outlined"
                fullWidth
              />
              <div>
                <Field
                  component={TextField}
                  name="phone"
                  label="Phone number"
                  className={classes.phone}
                  variant="outlined"
                  fullWidth
                />
                <Field
                  component={KeyboardDatePicker}
                  name="birthday"
                  label="Birthday"
                  className={classes.birthday}
                  inputVariant="outlined"
                  fullWidth
                  format="dd/MM/yyyy"
                />
              </div>
              <div>
                <Field
                  component={TextField}
                  name="street"
                  label="Street"
                  className={classes.street}
                  variant="outlined"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="streetNumber"
                  label="Nr"
                  className={classes.streetNumber}
                  variant="outlined"
                  fullWidth
                />
              </div>
              <Field
                component={TextField}
                name="additionalAddress"
                label="Additional address"
                className={classes.textfieldInfoRegister}
                variant="outlined"
                fullWidth
              />
              <div>
                <Field
                  component={TextField}
                  name="postCode"
                  label="ZIP"
                  className={classes.postCode}
                  variant="outlined"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="city"
                  label="City"
                  className={classes.city}
                  variant="outlined"
                  fullWidth
                />
              </div>

              <Field
                component={TextField}
                name="email"
                label="Email"
                className={classes.textfieldInfoRegister}
                variant="outlined"
                fullWidth
              />
              <Field
                component={TextField}
                name="password"
                label="Password"
                className={classes.textfieldInfoRegister}
                variant="outlined"
                fullWidth
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {' '}
                        {showPassword ? <Visibility /> : <VisibilityOff />}{' '}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Field
                component={TextField}
                name="repeatPass"
                label="Repeat Password"
                className={classes.textfieldInfoRegister}
                variant="outlined"
                fullWidth
                type={showRepeatPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowRepeatPassword(!showRepeatPassword)
                        }
                      >
                        {' '}
                        {showRepeatPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}{' '}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Field
                component={CheckboxWithLabel}
                type="checkbox"
                name="agreeterm"
                color="primary"
                Label={{ label: 'I agree to the Terms of Users' }}
              />
              <Button
                type="submit"
                className={classes.signUpButton}
                variant="contained"
                color="primary"
                disabled={isSubmitting || !isValid}
                fullWidth
                onClick={submitForm}
              >
                Submit
                {isSubmitting && <CircularProgress />}
              </Button>
              <div className={classes.textHaveAccount}>
                Do you have an account ?
                <span className={classes.signIn}>
                  <Link to="/loginForm"> Sign In </Link>
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </MuiPickersUtilsProvider>
  )
}
