import { ButtonRed, ButtonWhite } from "./style";


function Button({ children,red, ...props }) {
  return (
    <>
      {red ? (
        <ButtonRed {...props} >{children}</ButtonRed>
      ) : (
        <ButtonWhite  {...props} >{children}</ButtonWhite>
      )}
    </>
  );
}

export default Button;
