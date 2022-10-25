export const stealy = () => {

}
// type LoginProps = {
//   login: string;
//   password: string;
// };

// export const Login = () => {
//   const [loginInput, setLoginInput] = useState<string>("");
//   const [passwordInput, setPasswordInput] = useState<string>("");
//   const navigate = useNavigate();

//   const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     const user = {
//       username: loginInput,
//       pass: passwordInput,
//     };
//     localStorage.setItem("user", JSON.stringify(user));
//     navigate("/");
//   };

//   return (
//     <StyledLogin>
//       Login
//       <form>
//         <label htmlFor="login">Login:</label>
//         <input
//           id="login"
//           type="text"
//           required
//           value={loginInput}
//           onChange={(e) => setLoginInput(e.target.value)}
//         />
//         <label htmlFor="password">Hasło:</label>
//         <input
//           id="password"
//           type="password"
//           required
//           value={passwordInput}
//           onChange={(e) => setPasswordInput(e.target.value)}
//         />
//         <LogButton
//           handleLogin={handleSubmit}
//           loginText="Zaloguj"
//           logoutText="Wyloguj"
//         />
//       </form>
//     </StyledLogin>
//   );
// };
