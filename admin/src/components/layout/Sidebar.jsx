import { LayoutDashboard, FolderKanban, User, LogOut } from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {

    const { logout } = useAuth();

    return (
        <div>
            <div>
                <h1>
                    Admin CMS
                </h1>
                <div>
                    <button>
                        <LayoutDashboard size={20} />
                        Dashboard
                    </button>

                    <button>
                        <FolderKanban size={20} />
                        Projects
                    </button>

                    <button>
                        <User size={20} />
                        Profile
                    </button>
                </div>
            </div>
            <button
                onClick={logout}
            >
                Logout
            </button>
        </div>
    )
}

export default Sidebar;