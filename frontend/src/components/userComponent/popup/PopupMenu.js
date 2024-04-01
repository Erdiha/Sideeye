import {
  ArrowLeft,
  ArrowSquareUp,
  ArrowsCounterClockwise,
  FadersHorizontal,
  SignOut,
  UserGear,
} from "@phosphor-icons/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function PopupMenu({ openMenu, setOpenMenu }) {
  const router = useRouter(); // Initialize the useRouter hook

  const supabase = createClientComponentClient();
  const [logoutInfor, setLogoutInfo] = useState({
    errror: "",
    status: "",
  });

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setLogoutInfo({
        error: error.message,
        status: "error",
      });
    } else {
      setLogoutInfo({
        error: "",
        status: "success",
      });
      router.push("/login"); // Redirect to the login page after successful logout
    }
  };

  const sizes = 20;
  const buttons = [
    {
      label: "Account Settings",
      icon: <FadersHorizontal size={sizes} />,
      href: "/account",
    },
    {
      label: "Profile",
      icon: <UserGear size={sizes} />,
      href: "/user",
    },
    {
      label: "Reopen App",
      icon: <ArrowsCounterClockwise size={sizes} />,
      onClick: () => alert("Reopen App clicked"),
    },
    {
      label: "Upgrade To Add Features",
      icon: <ArrowSquareUp size={sizes} />,
      onClick: () => alert("Upgrade clicked"),
    },
    {
      label: "Logout",
      icon: <SignOut size={sizes} />,
      onClick: handleLogout,
    },
  ];

  const styleButton =
    "w-full md:h-full flex rounded p-1 justify-between items-center border-b border-b-[--primary-dark-50]";
  const styleWrapper =
    "w-full h-full md:p-5 p-2 flex flex-col text-[--primary-text] text-sm justify-around md:gap-[2rem] items-start md:mt-[3rem] mt-2";

  return (
    <div className={styleWrapper}>
      <motion.button
        initial={{ x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        whileHover={{
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          x: "-10px",
          scale: 1.1,
        }}
        className="w-10 h-10 flex mr-auto justify-center items-center"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <ArrowLeft size={24} />
      </motion.button>
      <hr
        size="10px"
        width="100%"
        style={{ color: "rgb(64, 82, 100)" }}
        align="left"
      />
      {buttons.map((button, index) => (
        <Link className={styleButton} key={index} href={button.href || "#"}>
          <motion.button
            onClick={button.onClick}
            initial={{ scale: 1 }}
            whileHover={{
              backgroundColor: "rgb(64, 82, 100)",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              scale: 1.1,
            }}
            className={"w-full h-full flex justify-between p-2"}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
              scale: {
                type: "spring",
              },
            }}
          >
            {button.label} {button.icon}
          </motion.button>
        </Link>
      ))}
    </div>
  );
}

export default PopupMenu;
