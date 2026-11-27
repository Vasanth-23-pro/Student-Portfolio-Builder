import { useState } from 'react'
import { ArrowRight, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import Card from '../components/common/Card.jsx'
import Input from '../components/common/Input.jsx'
import PasswordInput from '../components/common/PasswordInput.jsx'
import { isValidEmail } from '../utils/validation.js'

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function validate(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Enter your full name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Enter your email address.'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.password) {
    errors.password = 'Create a password.'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm your password.'
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.'
  }

  return errors
}

function Register() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [notice, setNotice] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }

    setValues(nextValues)
    setNotice('')

    if (hasSubmitted) {
      setErrors(validate(nextValues))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    setHasSubmitted(true)

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setNotice(
        'Your details look valid. No account was created; registration requires backend integration.',
      )
    } else {
      setNotice('')
    }
  }

  return (
    <section className="auth-page" aria-labelledby="register-title">
      <Card as="div" className="auth-card">
        <span className="auth-card__icon" aria-hidden="true">
          <UserPlus size={21} />
        </span>
        <p className="auth-card__eyebrow">Student Portfolio Builder</p>
        <h1 id="register-title">Create your account</h1>
        <p className="auth-card__description">
          Start with a few details. You can shape your portfolio after signing in.
        </p>
        <form className="auth-form" noValidate onSubmit={handleSubmit}>
          <Input
            autoComplete="name"
            error={errors.fullName}
            label="Full name"
            name="fullName"
            onChange={handleChange}
            placeholder="Your name"
            required
            value={values.fullName}
          />
          <Input
            autoComplete="email"
            error={errors.email}
            label="Email address"
            name="email"
            onChange={handleChange}
            placeholder="you@example.com"
            required
            type="email"
            value={values.email}
          />
          <PasswordInput
            autoComplete="new-password"
            error={errors.password}
            label="Password"
            name="password"
            onChange={handleChange}
            required
            value={values.password}
          />
          <PasswordInput
            autoComplete="new-password"
            error={errors.confirmPassword}
            label="Confirm password"
            name="confirmPassword"
            onChange={handleChange}
            required
            value={values.confirmPassword}
          />
          <Button
            className="auth-form__submit"
            endIcon={<ArrowRight aria-hidden="true" size={17} />}
            size="large"
            type="submit"
          >
            Create Account
          </Button>
          {notice && <p className="auth-form__notice" role="status">{notice}</p>}
        </form>
        <p className="auth-card__switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p className="auth-card__privacy">
          This frontend preview does not send or save your credentials.
        </p>
      </Card>
    </section>
  )
}

export default Register
