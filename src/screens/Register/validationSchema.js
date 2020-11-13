import * as Yup from 'yup'

export const validationSchema = Yup.object({
  firstName: Yup.string('Enter your first name').required(
    'First name is required'
  ),
  lastName: Yup.string('Enter your last name').required(
    'Last name is required'
  ),
  street: Yup.string('Enter a street').required('Street is required'),
  streetNumber: Yup.number('Enter a street number').required(
    'streetnumber is required'
  ),
  postCode: Yup.number('Enter post code').required('Post code is required'),
  city: Yup.string('Enter your city').required('City is required'),
  phone: Yup.number('Enter your phone number').required('Phone is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  birthday: Yup.date('Enter your birthday').required('Birthday is required'),
  password: Yup.string('')
    // .min(8, 'Password must contain at least 8 characters')
    .required('Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One letter, One Number and one special case Character'
    ),
  repeatPass: Yup.string('Enter your password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match'),
  agreeterm: Yup.bool()
    .required('You have to agree with terms of usage before signup')
    .oneOf([true], 'Field must be checked')
})
