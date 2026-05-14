import { LayoutDashboard, FolderKanban, User } from 'lucide-react'
const Sidebar = () => {
    return (
        <aside className="border-b border-white/10 bg-slate-950/60 backdrop-blur md:h-dvh md:w-64 md:shrink-0 md:border-b-0 md:border-r">
            <div className="flex items-center justify-between gap-3 px-4 py-4 md:px-6 md:py-6">
                <div className="min-w-0">
                    <h1 className="truncate text-base font-semibold tracking-tight sm:text-lg">Admin CMS</h1>
                    <p className="hidden text-xs text-slate-400 sm:block">Manage your portfolio content</p>
                </div>
                <div className="h-8 w-8 rounded-xl bg-white/5 ring-1 ring-white/10 md:hidden" />
            </div>

            <nav className="px-2 pb-3 md:px-3 md:pb-6">
                <div className="flex gap-2 overflow-x-auto px-2 pb-2 md:flex-col md:overflow-visible md:px-0 md:pb-0">
                    <button
                        type="button"
                        className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 ring-1 ring-white/10 transition hover:bg-white/10 md:w-full"
                    >
                        <LayoutDashboard size={18} className="text-slate-300 transition group-hover:text-slate-100" />
                        Dashboard
                    </button>

                    <button
                        type="button"
                        className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-slate-100 md:w-full"
                    >
                        <FolderKanban size={18} className="text-slate-300 transition group-hover:text-slate-100" />
                        Projects
                    </button>

                    <button
                        type="button"
                        className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-slate-100 md:w-full"
                    >
                        <User size={18} className="text-slate-300 transition group-hover:text-slate-100" />
                        Profile
                    </button>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar
