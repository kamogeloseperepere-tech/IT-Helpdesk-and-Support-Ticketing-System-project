
import { Head, Link, useForm } from '@inertiajs/react';

interface Category {
    id: number;
    category_name: string;
}

interface Department {
    id: number;
    department_name: string;
}

interface TicketFormProps {
    categories: Category[];
    departments: Department[];
}

export default function CreateTicket({ categories, departments }: TicketFormProps) {
    const { data, setData, post, processing, errors } = useForm({
        category_id: '',
        department_id: '',
        ticket_type: 'Technical Problem',
        subject: '',
        description: '',
        employee_urgency: 'Medium',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/tickets');
    };

    return (
        <>
            <Head title="Submit a Support Ticket | J&K Designs" />

            <div className="min-h-screen bg-[#F1F4F8]">
                <nav className="flex items-center justify-between bg-white px-8 py-5 shadow-sm">
                    <h1 className="text-xl font-bold text-[#5B9BD5]">
                        J&K Designs
                    </h1>

                    <Link
                        href="/dashboard"
                        className="text-sm font-medium text-gray-600 hover:text-[#4386C0]"
                    >
                        Back to Dashboard
                    </Link>
                </nav>

                <main className="mx-auto max-w-3xl px-6 py-10">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Submit a Support Ticket
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Tell our IT team about the technical problem you are experiencing.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-xl bg-white p-8 shadow-sm"
                    >
                        <div>
                            <label className="mb-2 block font-medium text-gray-700">
                                Department
                            </label>

                            <select
                                value={data.department_id}
                                onChange={(e) => setData('department_id', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 p-3"
                                required
                            >
                                <option value="">Select your department</option>

                                {departments.map((department) => (
                                    <option key={department.id} value={department.id}>
                                        {department.department_name}
                                    </option>
                                ))}
                            </select>

                            {errors.department_id && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.department_id}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-gray-700">
                                Ticket Category
                            </label>

                            <select
                                value={data.category_id}
                                onChange={(e) => setData('category_id', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 p-3"
                                required
                            >
                                <option value="">Select a category</option>

                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.category_name}
                                    </option>
                                ))}
                            </select>

                            {errors.category_id && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.category_id}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-gray-700">
                                Ticket Type
                            </label>

                            <select
                                value={data.ticket_type}
                                onChange={(e) => setData('ticket_type', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 p-3"
                            >
                                <option value="Technical Problem">Technical Problem</option>
                                <option value="IT Service Request">IT Service Request</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-gray-700">
                                Subject
                            </label>

                            <input
                                type="text"
                                value={data.subject}
                                onChange={(e) => setData('subject', e.target.value)}
                                placeholder="Briefly describe the problem"
                                className="w-full rounded-lg border border-gray-300 p-3"
                                required
                            />

                            {errors.subject && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.subject}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-gray-700">
                                Problem Description
                            </label>

                            <textarea
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Explain what happened and what you were doing when the problem occurred..."
                                rows={5}
                                className="w-full rounded-lg border border-gray-300 p-3"
                                required
                            />

                            {errors.description && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-gray-700">
                                How urgent is this problem?
                            </label>

                            <select
                                value={data.employee_urgency}
                                onChange={(e) => setData('employee_urgency', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 p-3"
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Critical">Critical</option>
                            </select>

                            <p className="mt-1 text-sm text-gray-500">
                                Your urgency selection is a suggestion. Authorised IT staff will confirm the official priority.
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-lg bg-[#5B9BD5] px-6 py-3 font-semibold text-white hover:bg-[#4386C0] disabled:opacity-50"
                        >
                            {processing ? 'Submitting...' : 'Submit Support Ticket'}
                        </button>
                    </form>
                </main>
            </div>
        </>
    );
}
