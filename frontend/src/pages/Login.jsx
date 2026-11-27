import { useState } from 'react'
import { ArrowRight, LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import Card from '../components/common/Card.jsx'
import Input from '../components/common/Input.jsx'
import PasswordInput from '../components/common/PasswordInput.jsx'
import { isValidEmail } from '../utils/validation.js'

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
}

function validate(values) {
  const errors = {}

  if (!values.email.trim()) {
    errors.email = 'Enter your email address.'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.password) {
    errors.password = 'Enter your password.'
  }

  return errors
}

function Login() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [notice, setNotice] = useState('')

  function handleChange(event) {
    const { name, type, checked, value } = event.target
    const nextValues = {
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    }

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
        'Your details look valid. No credentials were sent or stored; sign-in requires backend integration.',
      )
    } else {
      setNotice('')
    }
  }

  return (
    <section className="auth-page" aria-labelledby="login-title">
      <Card as="div" className="auth-card">
        <span className="auth-card__icon" aria-hidden="true">
          <LogIn size={21} />
        </span>
        <p className="auth-card__eyebrow">Student Portfolio Builder</p>
        <h1 id="login-title">Welcome back</h1>
        <p className="auth-card__description">
          Sign in to continue building your professional story.
        </p>
        <form className="auth-form" noValidate onSubmit={handleSubmit}>
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
            autoComplete="current-password"
            error={errors.password}
            label="Password"
            name="password"
            onChange={handleChange}
            required
            value={values.password}
          />
          <label className="auth-remember">
            <input
              checked={values.rememberMe}
              name="rememberMe"
              onChange={handleChange}
              type="checkbox"
            />
            <span>Remember me</span>
          </label>
          <Button
            className="auth-form__submit"
            endIcon={<ArrowRight aria-hidden="true" size={17} />}
            size="large"
            type="submit"
          >
            Login
          </Button>
          {notice && <p className="auth-form__notice" role="status">{notice}</p>}
        </form>
        <p className="auth-card__switch">
          Don’t have an account? <Link to="/register">Create an account</Link>
        </p>
        <p className="auth-card__privacy">
          This frontend preview does not send or save your credentials.
        </p>
      </Card>
    </section>
  )
}

export default Login
