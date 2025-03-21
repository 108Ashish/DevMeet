import "../../components/style.css";
import Image from "next/image";

const Page = () => {
  return (
    <div className="signin-container">
      <div className="logo-container">
        <Image
          src="/logo.png"
          alt="Logo"
          width={240}
          height={200}
          className="signin-logo"
        />
      </div>
      <div className="signin-box text-white border-purple-500 ">
        <h1 className="  text-black text-3xl font-bold m-auto">Sign In</h1>
        <form className="signin-form">
          <input type="email" placeholder="Email" className="signin-input" />
          <input
            type="password"
            placeholder="Password"
            className="signin-input"
          />
          <button className="signin-btn">Login</button>
          <h1>Don't have an account?</h1>
          <h4 className="s">Sign Up</h4>
        </form>
      </div>
    </div>
  );
};

export default Page;

// export default function Page() {
//    (

// <div className="signin-container">
//       <div className="logo-container">
//         {/* <Image
//           src="/logo.png"
//           alt="Logo"
//           width={120}
//           height={40}
//           className="signin-logo"
//         /> */}
//       </div>
//       <div className="signin-box text-white border-purple-500 ">
//         <h1 className="  text-black text-3xl font-bold m-auto">Sign In</h1>
//         <form className="signin-form">
//           <input type="email" placeholder="Email" className="signin-input" />
//           <input
//             type="password"
//             placeholder="Password"
//             className="signin-input"
//           />
//           <button className="signin-btn">Login</button>
//           <h1>Don't have an account?</h1>
//           <h4 className="s">Sign Up</h4>
//         </form>
//       </div>
//     </div>
//   )
// }
