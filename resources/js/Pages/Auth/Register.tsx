import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    // const { data, setData, post, processing, errors, reset } = useForm({
    //     name: '',
    //     email: '',
    //     password: '',
    //     password_confirmation: ''
    // });

    // const submit: FormEventHandler = (e) => {
    //     e.preventDefault();

    //     post(route('register'), {
    //         onFinish: () => reset('password', 'password_confirmation')
    //     });
    // };

    return (
        // <GuestLayout>
        //     <Head title="Register" />

        //     <form onSubmit={submit}>
        //         <div>
        //             <InputLabel htmlFor="name" value="Name" />

        //             <TextInput
        //                 id="name"
        //                 name="name"
        //                 value={data.name}
        //                 className="mt-1 block w-full"
        //                 autoComplete="name"
        //                 isFocused={true}
        //                 onChange={(e) => setData('name', e.target.value)}
        //                 required
        //             />

        //             <InputError message={errors.name} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="email" value="Email" />

        //             <TextInput
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 onChange={(e) => setData('email', e.target.value)}
        //                 required
        //             />

        //             <InputError message={errors.email} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password" value="Password" />

        //             <TextInput
        //                 id="password"
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="new-password"
        //                 onChange={(e) => setData('password', e.target.value)}
        //                 required
        //             />

        //             <InputError message={errors.password} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel
        //                 htmlFor="password_confirmation"
        //                 value="Confirm Password"
        //             />

        //             <TextInput
        //                 id="password_confirmation"
        //                 type="password"
        //                 name="password_confirmation"
        //                 value={data.password_confirmation}
        //                 className="mt-1 block w-full"
        //                 autoComplete="new-password"
        //                 onChange={(e) =>
        //                     setData('password_confirmation', e.target.value)
        //                 }
        //                 required
        //             />

        //             <InputError
        //                 message={errors.password_confirmation}
        //                 className="mt-2"
        //             />
        //         </div>

        //         <div className="mt-4 flex items-center justify-end">
        //             <Link
        //                 href={route('login')}
        //                 className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
        //             >
        //                 Already registered?
        //             </Link>

        //             <PrimaryButton className="ms-4" disabled={processing}>
        //                 Register
        //             </PrimaryButton>
        //         </div>
        //     </form>
        // </GuestLayout>
        <>
            <Register2 />
        </>
    );
}

function Register2() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation')
        });
    };
    return (
        <main
            className="w-full"
            style={{
                background:
                    'linear-gradient(to top, rgba(0, 0, 255, 0.3) 0%, rgba(0, 0, 255, 0.1) 10%, white 60%)'
            }}
        >
            <Head title="Sign In" />
            <div className="flex min-h-screen items-center justify-center bg-gray-700 p-4">
                <div className="flex w-full max-w-4xl overflow-hidden rounded-3xl bg-opacity-20 shadow-xl backdrop-blur-lg">
                    {/* Left side with illustration */}
                    <div className="animate__animated animate__bounceInLeft relative order-2 hidden w-1/2 flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-purple-400 p-8 md:flex lg:flex">
                        <div className="absolute left-4 top-4 flex space-x-1">
                            <div className="h-2 w-2 rounded-full bg-black bg-opacity-20"></div>
                            <div className="h-2 w-2 rounded-full bg-black bg-opacity-20"></div>
                            <div className="h-2 w-2 rounded-full bg-black bg-opacity-20"></div>
                        </div>

                        <img src="/student.png" alt="" />

                        <p className="mt-8 px-4 text-center text-white">
                            You Are Few Minutes Away To Boost
                            <br />
                            Your Skills With{' '}
                            <span className="font-bold">Us</span>
                        </p>

                        <div className="absolute bottom-4 right-4 flex space-x-1">
                            <div className="h-2 w-2 rounded-full bg-black bg-opacity-20"></div>
                            <div className="h-2 w-2 rounded-full bg-black bg-opacity-20"></div>
                            <div className="h-2 w-2 rounded-full bg-black bg-opacity-20"></div>
                        </div>
                    </div>

                    {/* Right side with form */}
                    <div className="order-1 w-full bg-white bg-opacity-10 p-8 backdrop-blur-lg md:w-1/2 lg:w-1/2">
                        <div className="mb-2 flex justify-end">
                            <Link
                                href="/login"
                                className="animate__animated animate__bounceInRight rounded-full bg-blue-400 bg-opacity-50 px-4 py-2 text-sm text-white"
                            >
                                Login
                            </Link>
                        </div>

                        <h2 className="animate__animated animate__bounceInRight mb-8 mt-4 text-3xl font-bold text-white">
                            Sign In
                        </h2>

                        <form
                            onSubmit={submit}
                            className="animate__animated animate__bounceInRight"
                        >
                            <div className="mb-4">
                                <div className="relative">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={data.name}
                                        autoComplete="name"
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        required
                                        className="w-full rounded-lg bg-white bg-opacity-20 px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="username"
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
                                {errors.name && (
                                    <div className="mt-1 text-sm text-red-300">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <div className="relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
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
                                {errors.name && (
                                    <div className="mt-1 text-sm text-red-300">
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div className="mb-4">
                                <div className="relative">
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData('password', e.target.value)
                                        }
                                        className="w-full rounded-lg bg-white bg-opacity-20 px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Password"
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
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {errors.password && (
                                    <div className="mt-1 text-sm text-red-300">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="mb-4">
                                <div className="relative">
                                    <input
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData(
                                                'password_confirmation',
                                                e.target.value
                                            )
                                        }
                                        required
                                        className="w-full rounded-lg bg-white bg-opacity-20 px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Confirm Password"
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
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {errors.password && (
                                    <div className="mt-1 text-sm text-red-300">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="mb-6 flex justify-end">
                                <Link
                                    href={route('login')}
                                    className="text-blue-200 hover:underline"
                                >
                                    Already Registered?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="flex w-full items-center justify-center rounded-lg bg-gray-800 py-3 font-medium text-white transition duration-200 hover:bg-gray-700"
                            >
                                {processing ? 'Processing...' : 'Sign In'}
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

                        {/* <div className="mt-8">
                            <div className="flex items-center justify-center space-x-4">
                                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                                    <FaGoogle />
                                </button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-white">
                                    <FaFacebook />
                                </button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 text-white">
                                    <FaTwitter />
                                </button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white">
                                    <FaGithub />
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </main>
    );
}
