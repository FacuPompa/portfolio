import { useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/language-context'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = { name: '', email: '', subject: '', message: '' }

export function ContactForm() {
  const { t } = useLanguage()
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors: FormErrors = {}
    if (!values.name.trim()) nextErrors.name = t.contact.errors.name
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = t.contact.errors.email
    if (!values.subject.trim()) nextErrors.subject = t.contact.errors.subject
    if (values.message.trim().length < 20) nextErrors.message = t.contact.errors.message
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(false)
    if (!validate()) return

    const body = `${values.message.trim()}\n\n—\n${values.name.trim()}\n${values.email.trim()}`
    const mailto = `mailto:pompafacundo4@gmail.com?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    window.location.href = mailto
  }

  const setField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSubmitted(false)
  }

  const fields: Array<{ key: keyof FormValues; label: string; type?: string; multiline?: boolean }> = [
    { key: 'name', label: t.contact.name },
    { key: 'email', label: t.contact.email, type: 'email' },
    { key: 'subject', label: t.contact.subject },
    { key: 'message', label: t.contact.message, multiline: true },
  ]

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3>{t.contact.formTitle}</h3>
      {fields.map((field) => {
        const inputId = `contact-${field.key}`
        const errorId = `${inputId}-error`
        const sharedProps = {
          id: inputId,
          name: field.key,
          value: values[field.key],
          onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setField(field.key, event.target.value),
          placeholder: t.contact.placeholders[field.key],
          'aria-invalid': Boolean(errors[field.key]),
          'aria-describedby': errors[field.key] ? errorId : undefined,
        }

        return (
          <div className="form-field" key={field.key}>
            <label htmlFor={inputId}>{field.label}</label>
            {field.multiline ? (
              <textarea {...sharedProps} rows={5} />
            ) : (
              <input {...sharedProps} type={field.type ?? 'text'} autoComplete={field.key === 'name' ? 'name' : field.key === 'email' ? 'email' : undefined} />
            )}
            {errors[field.key] && <span id={errorId} className="field-error">{errors[field.key]}</span>}
          </div>
        )
      })}
      <button className="button button-primary form-submit" type="submit">
        {t.contact.send}
        <ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <p className="form-note">{t.contact.mailtoNote}</p>
      <p className="form-status" aria-live="polite">{submitted ? t.contact.success : ''}</p>
    </form>
  )
}
