import { FC } from 'react';

interface IButton {
  submit?: boolean;
  onClick: () => void;
  text: string;
  isUpperCase?: boolean;
  isRed?: boolean;
}

const Button: FC<IButton> = ({
  submit,
  onClick,
  text,
  isUpperCase = false,
  isRed = false,
}) => {
  return (
    <button
      style={{
        color: `${isRed ? 'red' : 'black'}`,
        textTransform: `${isUpperCase ? 'uppercase' : 'none'}`,
        height: '48px',
      }}
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
};

export default Button;
