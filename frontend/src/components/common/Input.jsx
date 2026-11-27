import { useId } from 'react'

function Input({
  id,
  label,
  hint,
  error,
  endAdornment,
  required = false,
  className = '',
  'aria-describedby': describedBy,
  ...props
}) {
  const generatedId = useId()
  const inputId = id || generatedId
  const hintId = hint ? `${inputId}-hint` : undefined
  const errorId = error ? `${inputId}-error` : undefined
  const describedByIds = [describedBy, hintId, errorId].filter(Boolean).join(' ')

  return (
    <div className={`form-field${error ? ' form-field--error' : ''} ${className}`.trim()}>
      {label && (
        <label className="form-field__label" htmlFor={inputId}>
          {label}
          {required && <span className="form-field__required" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="form-input-wrapper">
        <input
          aria-describedby={describedByIds || undefined}
          aria-invalid={error ? true : undefined}
          className={`form-input${endAdornment ? ' form-input--has-adornment' : ''}`}
          id={inputId}
          required={required}
          {...props}
        />
        {endAdornment && (
          <span className="form-input__end-adornment">{endAdornment}</span>
        )}
      </div>
      {hint && <span className="form-field__hint" id={hintId}>{hint}</span>}
      {error && (
        <span className="form-field__error" id={errorId} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default Input
