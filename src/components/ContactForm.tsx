import { FormEvent, useState } from 'react';
import { contactButtonStyle, contactInputStyle, contactLabelStyle } from "@/constants/contactClasses"
import ReCAPTCHA from 'react-google-recaptcha';
import useRecaptcha from '@/hooks/useRecaptcha';
import { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY, RECAPTCHA_SITE } from '@/constants/email'
import emailjs from '@emailjs/browser';


export default function ContactForm() {
  const { recaptchaRef, handleRecaptcha } = useRecaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget["user_name"])
    e.persist();
    e.preventDefault();
    setIsSubmitting(true)
    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        e.currentTarget,
        REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setStateMessage(`Message sent, Thank you ${e.currentTarget}`)
          setIsSubmitting(false)
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          console.error(error)
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={sendEmail} >
      <div className="grid grid-cols-1 sm:p-0 sm:pt-3 p-3 gap-x-8 gap-y-6 pt-3 sm:grid-cols-2">
        <div>
          <h2 className="font-Heavitas">Contact Me</h2>
          <p>To request an resume/CV or any other questions please fill out the contact form!
          </p>
          {stateMessage && <p>{stateMessage}</p>}
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <label htmlFor="user-name" className={contactLabelStyle}>
                Name:
              </label>
              <div className="mt-2.5 mb-2.5 pr-3">
                <input
                  id="user-name"
                  name="user_name"
                  type="text"
                  autoComplete="given-name"
                  className={contactInputStyle}
                />
              </div>

            </div>
            <div>
              <label htmlFor="email" className={contactLabelStyle}>
                Email:
              </label>
              <div className="mt-2.5 mb-2.5">
                <input
                  id="user-email"
                  name="user_email"
                  type="text"
                  autoComplete="email"
                  className={contactInputStyle}
                />
              </div>

            </div>

          </div>
          <label htmlFor="message" className="block text-sm font-semibold leading-6">
            Message:
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              className={contactInputStyle}
              defaultValue={''}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className='pt-3'>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE}
                onChange={handleRecaptcha}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={contactButtonStyle}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}