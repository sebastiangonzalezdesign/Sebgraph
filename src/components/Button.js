import "./Button.scss";

const STYLES = ["btn--primary", "btn--secondary"];

const SIZE = ["btn--lg", "btn--md"];

export const Button = ({
  children,
  type,
  onClick,
  onMouseOver,
  onMouseOut,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <button
      className={`btn btn--animated ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      type={type}
    >
      {children}
    </button>
  );
};
