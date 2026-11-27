import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import Input from './Input.jsx'

function PasswordInput({ label, ...props }) {
  const [isVisible, setIsVisible] = useState(false)
  const VisibilityIcon = isVisible ? EyeOff : Eye

  return (
    <Input
      endAdornment={
        <button
          aria-label={`${isVisible ? 'Hide' : 'Show'} ${label.toLowerCase()}`}
          aria-pressed={isVisible}
          className="password-visibility-toggle"
          onClick={() => setIsVisible((visible) => !visible)}
          type="button"
        >
          <VisibilityIcon aria-hidden="true" size={18} />
        </button>
      }
      label={label}
      type={isVisible ? 'text' : 'password'}
      {...props}
    />
  )
}

export default PasswordInput
