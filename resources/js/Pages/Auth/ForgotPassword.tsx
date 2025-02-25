import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: ''
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <main className="w-full">
            <Head title="Sign In" />
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-700 to-[#017e84] p-4">
                <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white bg-opacity-20 p-10 shadow-xl backdrop-blur-lg md:w-1/2 lg:w-1/2">
                    <Head title="Forgot Password" />

                    <div className="mb-4 text-sm text-gray-200 dark:text-gray-400">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </div>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                            {status}
                        </div>
                    )}

                    {/* <form onSubmit={submit}>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />

                        <div className="mt-4 flex items-center justify-end">
                            <PrimaryButton
                                className="ms-4"
                                disabled={processing}
                            >
                                Email Password Reset Link
                            </PrimaryButton>
                        </div>
                    </form> */}

                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={data.email}
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    required
                                    className="w-full rounded-lg bg-white bg-opacity-20 px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Email"
                                />
                                <div className="absolute right-3 top-3 text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {errors.email && (
                                <div className="mt-1 text-sm text-red-300">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex w-full items-center justify-center rounded-lg bg-gray-800 py-3 font-medium text-white transition duration-200 hover:bg-gray-700"
                        >
                            {processing
                                ? 'Processing...'
                                : 'Email Password Reset Link'}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-2 h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
