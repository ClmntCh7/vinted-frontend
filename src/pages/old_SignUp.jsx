// import { useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { Navigate } from "react-router-dom";

// const SignUp = ({ token, setToken }) => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [newsletter, setNewsletter] = useState(false);

//   const sendData = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://lereacteur-vinted-api.herokuapp.com/user/signup",
//         {
//           username: username,
//           email: email,
//           password: password,
//           newsletter: newsletter,
//         }
//       );

//       setToken(response.data.token);
//     } catch (error) {
//       console.log("ERROR.MESSAGE ", error.message);
//     }
//   };
//   Cookies.set("token", token, { expires: 1 / 24 });

//   const handleUsername = (e) => {
//     const value = e.target.value;
//     setUsername(value);
//   };
//   const handleEmail = (e) => {
//     const value = e.target.value;
//     setEmail(value);
//   };
//   const handlePassword = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//   };
//   const handleNewsletter = () => {
//     setNewsletter(!newsletter);
//   };
//   return (
//     <div className="container">
//       <div className="Form-container">
//         <p>S'inscrire</p>
//         <form onSubmit={sendData}>
//           <label htmlFor="username">
//             <input
//               id="username"
//               name="username"
//               type="text"
//               placeholder="Nom d'utilisateur"
//               onChange={handleUsername}
//               value={username}
//             />
//           </label>
//           <label htmlFor="email">
//             <input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Email"
//               onChange={handleEmail}
//               value={email}
//             />
//           </label>
//           <label htmlFor="password">
//             <input
//               id="password"
//               type="password"
//               placeholder="Mot de passe"
//               onChange={handlePassword}
//               value={password}
//             />
//           </label>
//           <div>
//             <div className="Newsletter-checkbox">
//               <input type="checkbox" onChange={handleNewsletter} />
//               <span>S'inscrire à notre newsletter</span>
//             </div>
//             <p className="terms">
//               En m'inscrivant je confirme avoir lu et accepté les Termes &
//               Conditions et Politique de Confidentialité de Vinted. Je confirme
//               avoir au moins 18 ans.
//             </p>
//           </div>
//           <button type="submit">S'inscrire</button>
//         </form>
//       </div>
//       {token && <Navigate to="/" />}
//     </div>
//   );
// };

// export default SignUp;
