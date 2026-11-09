import { Head, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <>
            <Head title="Login | J&K Designs IT Helpdesk" />

            <div className="min-h-screen flex items-center justify-center bg-[#F1F4F8] px-4 py-10">
                <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-[#5B9BD5]">
                            J&K Designs
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            IT Helpdesk and Support System
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Welcome Back
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Sign in to access your helpdesk account.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Enter your email address"
                                required
                                autoComplete="username"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#5B9BD5] focus:ring-2 focus:ring-[#5B9BD5]/20"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Enter your password"
                                required
                                autoComplete="current-password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#5B9BD5] focus:ring-2 focus:ring-[#5B9BD5]/20"
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded border-gray-300 text-[#5B9BD5] focus:ring-[#5B9BD5]"
                                />
                                Remember me
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-lg bg-[#5B9BD5] px-4 py-3 font-semibold text-white transition hover:bg-[#4386C0] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {processing ? 'Signing in...' : 'Sign In'}
                        </button>

                    </form>

                    <div className="mt-8 border-t border-gray-100 pt-5 text-center">
                        <a href="/" className="text-sm font-medium text-[#5B9BD5] hover:text-[#4386C0]">
                            ← Back to Home
                        </a>
                    </div>

                    <p className="mt-6 text-center text-xs text-gray-400">
                        © {new Date().getFullYear()} J&K Designs. All rights reserved.
                    </p>

                </div>
            </div>
        </>
    );
}