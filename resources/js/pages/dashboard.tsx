import { Head, Link, router } from '@inertiajs/react';

interface DashboardProps {
    authUser: {
        name: string;
        email: string;
    };
}

export default function Dashboard({ authUser }: DashboardProps) {
    const handleLogout = () => {
        router.post('/logout');
    };

    return (
        <>
            <Head title="Employee Dashboard | J&K Designs" />

            <div className="min-h-screen bg-[#F1F4F8]">

                {/* Navigation */}
                <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
                    <div>
                        <h1 className="text-xl font-bold text-[#5B9BD5]">
                            J&K Designs
                        </h1>
                        <p className="text-xs text-gray-500">
                            IT Helpdesk & Support System
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="hidden text-sm text-gray-600 sm:block">
                            Employee Portal
                        </span>

                        <Link
                            href="/"
                            className="rounded-lg border border-[#5B9BD5] px-4 py-2 text-sm font-medium text-[#5B9BD5] transition hover:bg-blue-50"
                        >
                            Home
                        </Link>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="rounded-lg bg-[#5B9BD5] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#4386C0]"
                        >
                            Logout
                        </button>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="mx-auto max-w-7xl px-6 py-10">

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Welcome back, {authUser.name}!
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Welcome to your employee dashboard. Manage your IT support requests and track your tickets.
                        </p>

                        <p className="mt-2 text-sm text-gray-400">
                            Signed in as: {authUser.email}
                        </p>
                    </div>

                    {/* Statistics */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            { title: 'My Tickets', value: '0' },
                            { title: 'Open Tickets', value: '0' },
                            { title: 'In Progress', value: '0' },
                            { title: 'Resolved Tickets', value: '0' },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-xl bg-white p-6 shadow-sm"
                            >
                                <p className="text-sm text-gray-500">
                                    {item.title}
                                </p>

                                <h3 className="mt-3 text-3xl font-bold text-[#5B9BD5]">
                                    {item.value}
                                </h3>
                            </div>
                        ))}

                    </div>

                    {/* Quick Actions */}
                    <div className="mt-10 rounded-xl bg-white p-8 shadow-sm">

                        <h3 className="text-xl font-semibold text-gray-800">
                            Quick Actions
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            What would you like to do today?
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">

                         <Link
    href="/tickets/create"
    className="block rounded-lg bg-[#5B9BD5] px-6 py-4 text-left font-semibold text-white transition hover:bg-[#4386C0]"
>
    + Submit a Support Ticket
</Link>

                            <button
                                type="button"
                                className="rounded-lg border border-[#5B9BD5] px-6 py-4 text-left font-semibold text-[#5B9BD5] transition hover:bg-blue-50"
                            >
                                View My Tickets
                            </button>

                        </div>
                    </div>

                </main>

                {/* Footer */}
                <footer className="py-6 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} J&K Designs. All rights reserved.
                </footer>

            </div>
        </>
    );
}