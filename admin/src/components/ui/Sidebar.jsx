import React from 'react'
import { LayoutDashboard, FolderKanban, User } from 'lucide-react'
const Sidebar = () => {
    return (
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
    )
}

export default Sidebar
