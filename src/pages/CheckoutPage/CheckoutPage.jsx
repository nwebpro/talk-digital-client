import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
    const navigate = useNavigate()
    const courseDetails = useLoaderData()
    const {image_url, name, price} = courseDetails

    const handleCheckout = e => {
        e.preventDefault()
        toast.success('Thank you for purchasing the course from our website! 😊')
        navigate('/courses')
    }
    return (
        <section>
            <div className="relative mx-auto max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 my-5">
                    <div className="bg-gray-50 py-12 md:py-24">
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <div className="flex items-center">
                                <span className="h-10 w-10 rounded-full bg-theme-default"></span>
                                <h2 className="ml-4 font-bold text-2xl">Talk Digital</h2>
                            </div>
                            <div className="mt-12">
                                <div className="flow-root">
                                    <ul className="-my-4 divide-y divide-gray-200">
                                        <li className="flex items-center justify-between py-4">
                                            <div className="flex items-center justify-between">
                                                <img
                                                alt={name}
                                                src={image_url}
                                                className="w-40 h-40 rounded-lg object-cover"
                                                />

                                                <div className="ml-4">
                                                    <p className="text-xl text-heading-text font-bold mb-3">{name}</p>
                                                    <p className="text-xl text-theme-secondary font-bold">${price}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-12 md:py-24 mx-5">
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <form onSubmit={handleCheckout} className="grid grid-cols-6 gap-4">
                                <div className="col-span-6">
                                    <label className="mb-1 block text-base text-heading-text font-semibold" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-theme-default text-base p-2.5 border focus:outline-none"
                                        type="text"
                                        name="name"
                                        placeholder='Enter your full name'
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label className="mb-1 block text-base text-heading-text font-semibold" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-theme-default text-base p-2.5 border focus:outline-none"
                                        type="email"
                                        name="email"
                                        placeholder='Enter your email'
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label className="mb-1 block text-base text-heading-text font-semibold" htmlFor="phone">
                                        Phone Number
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-theme-default text-base p-2.5 border focus:outline-none"
                                        type="text"
                                        name="phone"
                                        placeholder='Enter your Phone Number'
                                    />
                                </div>
                                <fieldset className="col-span-6">
                                    <legend className="mb-1 block text-base text-heading-text font-semibold">
                                        Card Details
                                    </legend>
                                    <div className="-space-y-px rounded-lg bg-white shadow-sm">
                                        <div className='mb-2'>
                                            <label className="sr-only" htmlFor="card-number">Card Number</label>

                                            <input
                                                className="relative w-full rounded-lg border-theme-default text-base p-2.5 border focus:outline-none"
                                                type="text"
                                                name="cardNumber"
                                                placeholder="Card number"
                                            />
                                        </div>

                                        <div className="flex  gap-2">
                                            <div className="flex-1">
                                                <label className="sr-only" htmlFor="card-expiration-date">
                                                Expiration Date
                                                </label>

                                                <input
                                                className="relative w-full rounded-lg border-theme-default text-base p-2.5 border focus:outline-none mr-2"
                                                type="text"
                                                name="card-expiration-date"
                                                id="card-expiration-date"
                                                placeholder="MM / YY"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label className="sr-only" htmlFor="card-cvc">CVC</label>

                                                <input
                                                className="relative w-full rounded-lg border-theme-default text-base p-2.5 border focus:outline-none"
                                                type="text"
                                                name="card-cvc"
                                                id="card-cvc"
                                                placeholder="CVC"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="col-span-6">
                                    <legend className="mb-1 block text-base text-heading-text font-semibold">
                                        Billing Address
                                    </legend>
                                    <div className="-space-y-px rounded-lg bg-white shadow-sm">
                                        <div className='mb-2'>
                                            <label className="sr-only" htmlFor="country">Country</label>

                                            <select
                                                className="relative w-full rounded-lg border-theme-default text-base p-2.5 border focus:outline-none"
                                                id="country"
                                                name="country"
                                                autocomplete="country-name"
                                            >
                                                <option>England</option>
                                                <option>Wales</option>
                                                <option>Scotland</option>
                                                <option>France</option>
                                                <option>Belgium</option>
                                                <option>Japan</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="sr-only" htmlFor="postal-code">
                                                ZIP/Post Code
                                            </label>
                                            <input
                                                className="relative w-full rounded-lg border-theme-default text-base p-2.5 border focus:outline-none"
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autocomplete="postal-code"
                                                placeholder="ZIP/Post Code"
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="col-span-6">
                                    <button
                                        className="block w-full rounded-lg bg-theme-secondary p-2.5 text-lg text-white font-medium"
                                        type="submit"
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CheckoutPage;