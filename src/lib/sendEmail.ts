import { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } from '@/constants/email'
import { FormEvent } from "react";
import emailjs from '@emailjs/browser';


type StateBool<T = boolean> = React.Dispatch<React.SetStateAction<T>>
interface SendEmailType {
  e: FormEvent<HTMLFormElement>,
  setIsSubmitting: StateBool,
  setStateMessage: StateBool<string | null>
  setStateWarning: StateBool<string | null>
}

export const sendEmail = ({ e, setIsSubmitting, setStateMessage, setStateWarning }: SendEmailType): Promise<boolean> => {
  setIsSubmitting(true)
  const result = emailjs
    .sendForm(
      REACT_APP_SERVICE_ID,
      REACT_APP_TEMPLATE_ID,
      e.currentTarget,
      REACT_APP_PUBLIC_KEY
    )
    .then(
      () => {
        setStateMessage(`Message sent, Thank you`)
        setIsSubmitting(false)
        return true
      },
      (error) => {
        setStateWarning('Something went wrong, please check Captcha');
        console.error(error)
        setIsSubmitting(false);
        setTimeout(() => {
          setStateWarning(null);
        }, 5000); // hide message after 5 seconds
        return false
      }
      
    );

  // Clears the form after sending the email
  e.currentTarget.reset();
  return result
};