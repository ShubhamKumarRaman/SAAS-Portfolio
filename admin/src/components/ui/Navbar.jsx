const Navbar = () => {
    return (
        <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/70 backdrop-blur">
            <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
                <div className="min-w-0">
                    <h2 className="truncate text-lg font-semibold tracking-tight sm:text-xl">Dashboard</h2>
                    <p className="hidden text-xs text-slate-400 sm:block">Overview of your content</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden h-9 w-56 rounded-xl bg-white/5 ring-1 ring-white/10 sm:block" />
                    <div className="flex items-center gap-2 rounded-xl bg-white/5 px-2 py-1.5 ring-1 ring-white/10">
                        <div className="h-7 w-7 rounded-lg bg-white/10" />
                        <span className="hidden text-sm font-medium text-slate-200 sm:block">Admin</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
