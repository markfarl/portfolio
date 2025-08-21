import { ChangeEvent, FormEvent, useState } from 'react';
import { contactButtonStyle, contactInputStyle, contactLabelStyle } from "@/constants/styleClasses"
import ReCAPTCHA from 'react-google-recaptcha';
import useRecaptcha from '@/hooks/useRecaptcha';
import { sendEmail } from '@/lib/sendEmail';
import { RECAPTCHA_SITE } from '@/constants/email';
import { useCookies } from 'react-cookie';
import { useColorScheme } from "@/contexts/ColorSchemeContext"
import { Link } from 'react-router-dom';


interface InputValType {
  user_name: boolean;
  user_email: boolean;
  message: boolean;
}

export default function ContactForm() {
  const { recaptchaRef, handleRecaptcha } = useRecaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['contactSet']);
  const { colorSchemeClass } = useColorScheme()

  const [inputValidation, setInputValidation] = useState<InputValType>({
    user_name: false,
    user_email: false,
    message: false,
  });
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [stateWarning, setStateWarning] = useState<string | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValidation({
      ...inputValidation,
      [event.currentTarget.name]: false
    })
  }

  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();

    const validateInputValue: InputValType = {
      user_name: false,
      user_email: false,
      message: false
    }
    // Handle validation 
    Object.keys(validateInputValue).forEach(k => {
      const key = k as keyof InputValType
      if (e.currentTarget[key].value == "") {
        validateInputValue[key] = true
      }
    });

    setInputValidation(validateInputValue)

    if (!(validateInputValue.message || validateInputValue.user_email || validateInputValue.user_name)) {
      const formSent = await sendEmail({ e, setIsSubmitting, setStateMessage, setStateWarning })
      if (formSent) {
        // set cookie
        setCookie("contactSet", "true")
      }
    }
  }
  return (
    <form onSubmit={handleSendEmail} >
      <div className="grid grid-cols-1 xl:p-0 sm:pt-3 p-5 gap-x-8 gap-y-6 xl:pt-3 min-h-80 sm:grid-cols-2">
        <div className='flex flex-col'>
          <h2 className="font-Source uppercase">Contact Me</h2>
          {!cookies.contactSet && <p>For requests regarding my résumé/CV or any other inquiries, please complete the contact form. You are also welcome to connect with me on LinkedIn for professional networking and correspondence.
          </p>}

          {stateWarning && <p className="border-2 w-full min-h-20 mt-5 bg-red-600 text-white font-bold text-xl p-5">{stateWarning}</p>}
          {stateMessage && <p className={`border-2 w-full min-h-20 mt-5 ${colorSchemeClass.borderLine} text-black font-bold text-xl p-5 bg-white mb-10`}>{stateMessage}</p>}
          {(cookies.contactSet && !stateMessage) &&
            <>
              <p>Message recieved, please wait for a response shortly</p>
              <button className={contactButtonStyle} onClick={() => {
                removeCookie("contactSet")
              }}>Send another</button>
            </>
          }
          <div className="flex-1 flex items-end ">
            <p>©2025</p>
          </div>
        </div>
        {(!stateMessage && !cookies.contactSet) &&
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div>
                <label htmlFor="user-name" className={contactLabelStyle}>
                  Name: {inputValidation.user_name && <span className='text-red-600'> **Required field**</span>}
                </label>
                <div className="mt-2.5 mb-2.5 pr-0 sm:pr-3">
                  <input
                    id="user-name"
                    name="user_name"
                    onChange={handleInputChange}
                    type="text"
                    autoComplete="given-name"
                    className={`${contactInputStyle} ${inputValidation.user_name && `border-red-600 border-2`}`}
                  />
                </div>

              </div>
              <div>
                <label htmlFor="email" className={contactLabelStyle}>
                  Email: {inputValidation.user_email && <span className='text-red-600'> **Required field**</span>}
                </label>
                <div className="mt-2.5 mb-2.5">
                  <input
                    id="user-email"
                    name="user_email"
                    type="text"
                    autoComplete="email"
                    onChange={handleInputChange}
                    className={`${contactInputStyle} ${inputValidation.user_email && `border-red-600 border-2`}`}
                  />
                </div>

              </div>

            </div>
            <label htmlFor="message" className="block text-sm font-semibold leading-6">
              Message: {inputValidation.message && <span className='text-red-600'> **Required field**</span>}
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                onChange={handleInputChange}
                className={`${contactInputStyle} ${inputValidation.message && `border-red-600 border-2`}`}
                defaultValue={''}
              />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2">
              <div className='pt-3 flex justify-center'>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE}
                  onChange={handleRecaptcha}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${colorSchemeClass.borderLine} ${contactButtonStyle}`}
              >
                Send
              </button>
            </div>
          </div>
        }
      </div>
    </form>
  )
}