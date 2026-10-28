import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaBook,
    FaGraduationCap,
    FaTasks,
    FaUser,
    FaAward,
    FaGift,
    FaCog,
    FaSkull,
    FaBoxOpen,
    FaHammer,
    FaFolderOpen
} from "react-icons/fa";

import "./Sidebar.css";

export default function Sidebar() {

    const links = [

        {
            icon: <FaHome />,
            label: "Dashboard",
            to: "/"
        },

        {
            icon: <FaGraduationCap />,
            label: "Academies",
            to: "/academies"
        },

        {
            icon: <FaBook />,
            label: "Skills",
            to: "/skills"
        },

        {
            icon: <FaTasks />,
            label: "Planner",
            to: "/planner"
        },

        {
             icon: <FaTasks />,
            label: "Quests",
            to: "/quests"
        },


        {
            icon: <FaUser />,
            label: "Character",
            to: "/character"
        },


        {
            icon:<FaBoxOpen/>,
            label:"Inventory",
            to:"/inventory"
        },


        {
            icon:<FaFolderOpen/>,
            label:"Resources",
            to:"/resources"
        },



        {
            icon:<FaBook/>,
            label:"Task Library",
            to:"/task-library"
        },


        {
            icon:<FaSkull/>,
            label:"Bosses",
            to:"/bosses"
        },


        {
            icon: <FaAward />,
            label: "Achievements",
            to: "/achievements"
        },

        {
            icon: <FaGift />,
            label: "Rewards",
            to: "/rewards"
        },

        {
            icon: <FaCog />,
            label: "Settings",
            to: "/settings"
        },

        {
            icon: <FaHammer />,
            label: "Creator",
            to: "/creator"
        }

    ];

    return (

        <aside className="sidebar">

            <h1 className="logo">

                🔥 Phoenix

            </h1>

            {

                links.map(link => (

                    <NavLink

                        key={link.to}

                        to={link.to}

                        className="navItem"

                    >

                        {link.icon}

                        <span>

                            {link.label}

                        </span>

                    </NavLink>

                ))

            }

        </aside>

    );

}

