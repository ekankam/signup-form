import cn from 'classnames';
import { FormikErrors } from 'formik';
import errorIcon from '/images/icon-error.svg';

type InputFieldProps = {
  error:
    | string
    | false
    | FormikErrors<any>
    | string[]
    | FormikErrors<any>[]
    | undefined;
  message: any;
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<any>) => void;
};

export default function InputField({
  error,
  message,
  value,
  name,
  type,
  placeholder,
  onChange
}: InputFieldProps) {
  return (
    <div className="group w-full">
      <div
        className={cn(
          'w-full flex items-center border border-c-grey rounded-md bg-white py-[15px] px-5 lg:px-8 group group-focus-within:border-c-blue',
          { 'border-c-red': error }
        )}
      >
        <input
          value={value}
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          className={cn(
            'w-full text-14 font-semibold placeholder:text-c-grey tracking-[0.25px] caret-c-blue outline-none flex-1 text-c-dark-blue',
            { 'text-c-red': error },
            { 'caret-c-red': error }
          )}
        />
        {error && (
          <div>
            <img src={errorIcon} alt="exclaimation mark" />
          </div>
        )}
      </div>
      {error && (
        <label className="text-11 inline-block w-full font-semibold text-c-red text-right italic">
          {message}
        </label>
      )}
    </div>
  );
}
