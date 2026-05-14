import Sidebar from "../components/layout/Sidebar"
import Topbar from "../components/layout/Topbar"

const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-dvh bg-slate-950">
            <div className="mx-auto flex min-h-dvh w-full max-w-screen-2xl flex-col md:flex-row">
                <Sidebar />

                <div className="flex min-w-0 flex-1 flex-col">
                    <Topbar />

                    <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
