
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="J&K Designs | IT Helpdesk" />

            <div className="min-h-screen bg-[#F1F4F8] text-gray-800">
                {/* Navigation */}
                <header className="bg-white shadow-sm">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                        <div>
                            <h1 className="text-2xl font-bold tracking-wide text-[#5B9BD5]">
                                J&K DESIGNS
                            </h1>
                            <p className="text-xs text-gray-500">
                                IT SUPPORT SERVICES
                            </p>
                        </div>

                        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                            <a href="#home" className="text-[#5B9BD5]">
                                Home
                            </a>
                            <a href="#about" className="transition hover:text-[#5B9BD5]">
                                About
                            </a>
                            <a href="#services" className="transition hover:text-[#5B9BD5]">
                                Services
                            </a>
                            <a href="#contact" className="transition hover:text-[#5B9BD5]">
                                Contact
                            </a>
                        </nav>

                        <a
                            href="/login"
                            className="rounded-lg bg-[#5B9BD5] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4386C0]"
                        >
                            Login
                        </a>
                    </div>
                </header>

                {/* Hero Section */}
                <main>
                    <section
                        id="home"
                        className="bg-gradient-to-br from-[#EAF3FB] to-white"
                    >
                        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
                            <div>
                                <span className="mb-6 inline-block rounded-full bg-[#DCEBFA] px-4 py-2 text-sm font-semibold text-[#4386C0]">
                                    IT Helpdesk & Support System
                                </span>

                                <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                                    We're here to
                                    <span className="block text-[#5B9BD5]">
                                        keep you working.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                                    Welcome to J&K Designs IT Helpdesk. Report
                                    technical problems, request IT assistance
                                    and keep track of your support tickets
                                    through one convenient platform.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-4">
                                    <a
                                        href="/login"
                                        className="rounded-lg bg-[#5B9BD5] px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-[#4386C0]"
                                    >
                                        Login to Helpdesk
                                    </a>

                                    <a
                                        href="#about"
                                        className="rounded-lg border border-[#5B9BD5] bg-white px-7 py-3.5 font-semibold text-[#4386C0] transition hover:bg-[#EAF3FB]"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>

                            {/* Welcome Illustration */}
                            <div className="flex justify-center">
                                <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-xl">
                                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#EAF3FB]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-16 w-16 text-[#5B9BD5]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 17.25v1.007a3 3 0 0 1-.879 2.121L7.5 21h9l-.621-.622A3 3 0 0 1 15 18.257V17.25m6-12v9.75A2.25 2.25 0 0 1 18.75 17.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold text-gray-900">
                                        Technical Support Made Simple
                                    </h3>

                                    <p className="mt-3 leading-7 text-gray-500">
                                        One place to report issues, request
                                        assistance and manage IT support.
                                    </p>

                                    <div className="mt-7 rounded-xl bg-[#F1F4F8] p-4">
                                        <p className="text-sm font-medium text-[#4386C0]">
                                            Your support starts here.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="bg-white py-20">
                        <div className="mx-auto max-w-4xl px-6 text-center">
                            <h2 className="text-3xl font-bold text-gray-900">
                                About Our Helpdesk
                            </h2>

                            <div className="mx-auto mt-4 h-1 w-20 rounded bg-[#5B9BD5]" />

                            <p className="mt-7 text-lg leading-8 text-gray-600">
                                The J&K Designs IT Helpdesk is designed to
                                improve how technical problems and IT service
                                requests are reported, managed and resolved.
                                Employees can submit support tickets while
                                authorised IT staff manage assignments,
                                repairs and resolutions.
                            </p>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section id="services" className="py-20">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-900">
                                    How We Can Help
                                </h2>
                                <p className="mt-3 text-gray-600">
                                    IT support services available through our platform.
                                </p>
                            </div>

                            <div className="mt-12 grid gap-8 md:grid-cols-3">
                                {[
                                    {
                                        number: '01',
                                        title: 'Report a Problem',
                                        description:
                                            'Report hardware, software, network and other technical issues.',
                                    },
                                    {
                                        number: '02',
                                        title: 'Request IT Support',
                                        description:
                                            'Submit requests for IT services and technical assistance.',
                                    },
                                    {
                                        number: '03',
                                        title: 'Track Your Ticket',
                                        description:
                                            'Keep track of your submitted tickets and their progress.',
                                    },
                                ].map((service) => (
                                    <div
                                        key={service.number}
                                        className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF3FB] font-bold text-[#5B9BD5]">
                                            {service.number}
                                        </span>

                                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 leading-7 text-gray-600">
                                            {service.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="bg-white py-16">
                        <div className="mx-auto max-w-4xl px-6 text-center">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Need IT Assistance?
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Log in to the helpdesk to access your support services.
                            </p>
                            <a
                                href="/login"
                                className="mt-7 inline-block rounded-lg bg-[#5B9BD5] px-8 py-3 font-semibold text-white transition hover:bg-[#4386C0]"
                            >
                                Access Helpdesk
                            </a>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 py-7 text-center text-sm text-gray-300">
                    <p>
                        © {new Date().getFullYear()} J&K Designs. All rights reserved.
                    </p>
                    <p className="mt-2 text-gray-400">
                        IT Helpdesk & Support System
                    </p>
                </footer>
            </div>
        </>
    );
}
