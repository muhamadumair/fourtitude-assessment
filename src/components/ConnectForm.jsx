import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import contactSchema from '../schema/contactSchema';

const FloatingField = ({
  id,
  name,
  type = 'text',
  label,
  register,
  error,
  isTextarea = false,
}) => {
  const InputTag = isTextarea ? 'textarea' : 'input';
  return (
    <div className={`connect-form__field ${isTextarea ? 'connect-form__field--textarea' : ''}`}>
      <InputTag
        id={id}
        type={isTextarea ? undefined : type}
        className={isTextarea ? 'connect-form__textarea' : 'connect-form__input'}
        placeholder=" "
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...register(name)}
      />
      <label htmlFor={id} className="connect-form__label">{label}</label>
      {error && (
        <span id={`${id}-error`} className="connect-form__error">{error.message}</span>
      )}
    </div>
  );
}

const ConnectForm = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const onSubmit = () => {
    onSuccess();
    reset();
  };

  return (
    <section className="section section--connect" id="connect">
      <div className="section__inner">
        <div className="section__header">
          <h2 className="section__title">Connect</h2>
          <p className="section__subtitle">
            Every successful connection starts in conversation. Drop us a line today :)
          </p>
        </div>

        <form className="connect-form" onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <div className="connect-form__fields">
            <FloatingField
              id="name"
              name="name"
              label="Name"
              register={register}
              error={errors.name}
            />
            <FloatingField
              id="email"
              name="email"
              type="email"
              label="Email address"
              register={register}
              error={errors.email}
            />
            <FloatingField
              id="contact"
              name="contact"
              type="tel"
              label="Contact no."
              register={register}
              error={errors.contact}
            />
            <FloatingField
              id="message"
              name="message"
              label="How can we help?"
              register={register}
              error={errors.message}
              isTextarea
            />
          </div>

          <div className="connect-form__buttons">
            <button type="reset" className="connect-form__btn connect-form__btn--clear">Clear</button>
            <button
              type="submit"
              className="connect-form__btn connect-form__btn--submit"
              disabled={!isValid}
            >
              Connect with us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ConnectForm;
