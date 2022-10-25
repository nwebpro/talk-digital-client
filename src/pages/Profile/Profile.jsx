import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {
    const { user, updatedUserProfile } = useContext(AuthContext)

    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        handleUpdateUserProfile(name, photoURL)
        form.reset()
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updatedUserProfile(profile)
            .then(() => {
                toast.success('Profile Updated Successfully!', {autoClose: 500})
            })
            .catch(error => {
                toast.error(error.message, {autoClose: 500})
            })
    }

    return (
        <div className='mx-auto lg:container px-5 py-10 lg:py-20'>
            <div className="max-w-md mx-auto p-8 flex flex-col md:flex-row justify-center items-center sm:space-x-6 bg-white rounded-lg mb-5">
                <div className="flex-shrink-0 w-full mb-6 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={user?.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold mb-1">{user?.displayName}</h2>
                    <span className="flex items-center space-x-2 text-theme-default">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                            <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                        </svg>
                        <span className="dark:text-gray-400">{user?.email}</span>
                    </span>
                </div>
            </div>
            <div className='max-w-md mx-auto p-8 flex flex-col justify-center items-center sm:space-x-6 bg-white rounded-lg'>
                <h1 className="text-xl font-bold mb-3">Update your Profile</h1>
                <form onSubmit={handleUpdateProfile} noValidate="" action="" className='w-full'>
                    <input
                        type="text"
                        className="w-full rounded-lg border-theme-default border px-4 py-3 pr-12 text-base mb-2 focus:outline-none"
                        placeholder="Updated your name!"
                        name='name'
                    />
                    <input
                        type="text"
                        className="w-full rounded-lg border-theme-default border px-4 py-3 pr-12 text-base mb-2 focus:outline-none"
                        placeholder="Updated your photoURL!"
                        name='photoURL'
                    />

                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            className="ml-3 inline-block rounded-lg bg-theme-secondary px-5 py-3 text-base font-medium text-white"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Profile;