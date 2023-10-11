import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../icons/icons";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from '../common/firebase';
import { Select, Option } from "@material-tailwind/react";

const Navbar = () => {
  const navigate = useNavigate();

  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);

  const handleLogOut = async () => {
    try {
      await signOut();
      // alert("You have successfully logged out");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  
  
  // console.log(user);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "cupcake"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("cupcake");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    // <div className="bg-gray-600 text-white h-14 flex items-center">
    <nav className="shadow-[0_3px_8px_rgba(0,0,0,0.24)] h-16 px-8 flex items-center justify-between">
    <div className="wrapper-container w-full flex justify-between items-center">
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/home')}>
        <LogoIcon />
        <p className="font-semibold">
          <span className="text-yellow-00">C</span>rypto<span className="text-yellow-700">W</span>ave
        </p>
      </div>
      <div className="flex items-center gap-4"> {/* Add this container */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "cupcake" ? false : true}
            />
            <img width="30" height="30" src="https://img.icons8.com/emoji/48/sun-emoji.png" alt="cupcake" className="w-8 h-8 swap-on" />
            <img width="30" height="30" src="https://img.icons8.com/parakeet/48/bright-moon.png" alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
        <button onClick={handleLogOut} className="md:hidden"><img width="32" height="32" src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/external-logout-portal-of-company-server-portal-for-employee-full-tritone-tal-revivo.png" alt="external-logout-portal-of-company-server-portal-for-employee-full-tritone-tal-revivo"/></button>
        <div>
        </div>
        <div className="w-72 hidden md:block">
        <Select className="text-yellow-700" label={user && `Hello ${user.email}`}>
        <Option onClick={handleLogOut} className="h-4 flex items-center justify-between text-yellow-900">
            Log Out
            <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/28/external-web-secure-session-sign-out-internet-logoff-login-fresh-tal-revivo.png" alt="logout-img" />
        </Option>
        </Select>
    </div>
      </div>
    </div>
  </nav>
    )
}

export default Navbar;


