import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';

const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name cannot be empty'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name cannot be empty'),
  email: Yup.string()
    .email('Looks like this is not an email')
    .required('Email is required'),
  password: Yup.string().min(8).max(16).required('Password cannot be empty')
});

type InitialFormStateProps = {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

export default function Form() {
  const navigate = useNavigate();
  const formik = useFormik<InitialFormStateProps | any>({
    initialValues: initialFormState,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      navigate('/success', { state: values });
    }
  });

  return (
    <form
      className="element-shadow rounded-[10px] bg-white p-10"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col items-center gap-5">
        <InputField
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formik.values.firstName}
          error={formik.touched.firstName && formik.errors.firstName}
          message={
            formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : ''
          }
          onChange={formik.handleChange}
        />
        <InputField
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formik.values.lastName}
          error={formik.touched.lastName && formik.errors.lastName}
          message={
            formik.touched.lastName && formik.errors.lastName
              ? formik.errors.lastName
              : ''
          }
          onChange={formik.handleChange}
        />
        <InputField
          type="email"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          message={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ''
          }
          onChange={formik.handleChange}
        />
        <InputField
          type="password"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          message={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ''
          }
          onChange={formik.handleChange}
        />
        <button
          type="submit"
          className="w-full bg-c-green text-white text-15 flex items-center justify-center uppercase font-semibold py-[15px] px-5 btn-shadow lg:px-[136px] transition-all"
        >
          Claim your free trial
        </button>
      </div>
      <p className="font-medium text-11 text-center text-c-grayish-blue mt-2">
        By clicking the button, you are agreeing to our{' '}
        <span className="font-bold text-c-red">Terms and Services</span>
      </p>
    </form>
  );
}
