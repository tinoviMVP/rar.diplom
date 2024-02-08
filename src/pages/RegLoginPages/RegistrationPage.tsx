import { AppButton } from '../../components/AppButton/AppButton';
import { AppInput } from '../../components/AppInput/AppInput';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, AppBar, Toolbar } from '@mui/material';
import { useEffect } from 'react';
import { Navbar } from './Navbar';

const registrationPageFields = {
  userEmail: '',
  userName: '',
  userPhoneNumber: '',
  userPassword: '',
};

const registrationValidationSchema = yup.object({
  userEmail: yup.string().required('Обязательное поле').email('Неправильный e-mail'),
  userName: yup.string().required('Обязательное поле'),
  userPhoneNumber: yup
    .string()
    .required('Обязательное поле')
    .matches(/^9989\d{8}$/, 'Номер не валиден'),
  userPassword: yup
    .string()
    .required('Обязательное поле')
    .min(6, 'Пароль должен содержать как минимум 6 символов'),
});

export const RegistrationPage = () => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: registrationPageFields,
    resolver: yupResolver(registrationValidationSchema),
  });

  const navigate = useNavigate();

  const onRegistrationFormSubmit = (data: any) => {
    console.log(data);
    if (data) {
      navigate('/profile-page');
      localStorage.setItem('userName', data.userName);
    }
  };

  return (
    <div className="bg-[#c7d5ce]">
      <form className="" onSubmit={handleSubmit(onRegistrationFormSubmit)}>
        <div className="">
          <Navbar />
        </div>
        <div className="mx-8 200px">
          <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 mb-20 mt-10">
            Регистрация
          </h1>
          <div className="flex flex-row">
            <div className="size-3/6 mb-40 ml-32">
              <img
                className="rounded-l-2xl rounded-r-2xl"
                src="https://cdnn1.lt.sputniknews.com/img/07e5/0b/02/19719803_0:0:2727:1535_1920x0_80_0_0_ea4c7d7cac2d8bd1fd0cfbd85d2cf1f2.jpg.webp"
                alt="Homes"
              />
            </div>
            <div className="basis-1/2 align-text-top">
              <Controller
                name="userEmail"
                control={control}
                render={({ field }) => (
                  <AppInput
                    className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    type="text"
                    placeholder="name@flowbite.com"
                    hasError={!!errors.userEmail}
                    errorText={errors.userEmail?.message as string}
                    {...field}
                  />
                )}
              />
              <Controller
                name="userName"
                control={control}
                render={({ field }) => (
                  <AppInput
                    className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    type="text"
                    placeholder="Введите имя"
                    hasError={!!errors.userName}
                    errorText={errors.userName?.message as string}
                    {...field}
                  />
                )}
              />
              <Controller
                name="userPhoneNumber"
                control={control}
                render={({ field }) => (
                  <AppInput
                    className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    type="tel"
                    placeholder="Введите номер телефона"
                    hasError={!!errors.userPhoneNumber}
                    errorText={errors.userPhoneNumber?.message as string}
                    {...field}
                  />
                )}
              />
              <Controller
                name="userPassword"
                control={control}
                render={({ field }) => (
                  <AppInput
                    className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    type="password"
                    placeholder="Введите пароль"
                    hasError={!!errors.userPassword}
                    errorText={errors.userPassword?.message as string}
                    {...field}
                  />
                )}
              />
              <div className="rounded-lg mt-10 sm:mx-auto sm:w-full sm:max-w-sm block w-full h-10 bg-blue-500 shadow-lg shadow-blue-500/50 py-1.5 ring-1">
                <AppButton type="submit" buttonText="Зарегистрироваться" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
