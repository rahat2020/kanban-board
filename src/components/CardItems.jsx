import React, { useState } from 'react'
import Loader from '../UI/Loader'
import AppAvatar from '../UI/AppAvatar'
import { Calendar, Link, MessageCircle, Star } from 'react-feather'
import dayjs from 'dayjs'
import { truncateText } from '@/utils/appHelpers'
import Image from 'next/image'
import AppModal from '@/UI/AppModal'

const avatar = 'https://www.cecyteo.edu.mx/Nova/App_themes/Nova2015/assets/admin/pages/media/profile/profile_user.jpg';


const CardItems = ({ singleTask, singleTaskID }) => {
    const { id, taskName, taskDesc, createdAt, name, desc, clientName, clientAvatar } = singleTask || {};

    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log("🚀 ~ CardItems ~ isModalOpen:", isModalOpen)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='p-2'>
            <div className="bg-white border py-4 p-4 rounded-lg shadow-md w-80">
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        <Image
                            src={avatar}
                            alt="Client Avatar"
                            width={30}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="Loading..."
                            height={30}
                            className="rounded-full"
                        />
                        <span className="ml-2 font-semibold text-sm">Client Name</span>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src={clientAvatar}
                            alt={clientName}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="Loading..."
                            width={30}
                            height={30}
                            className="rounded-full"
                        />
                        <span className="ml-2 font-semibold text-sm">{clientName || ''}</span>
                    </div>
                </div>

                {/* Content */}
                <p className="text-gray-500 text-sm mb-2">
                    {taskDesc}
                </p>

                <div className="flex items-center space-x-4">
                    {/* Icon Section */}
                    <div className="flex items-center">
                        <Image
                            src={avatar}
                            alt="Icon"
                            width={24}
                            height={24}
                            className="rounded-full"
                        />
                        <Image
                            src={avatar}
                            alt="Icon"
                            width={24}
                            height={24}
                            className="rounded-full"
                        />
                        <div className="w-6 h-6 bg-slate-100 rounded-full flex justify-center items-center">
                            <span className="ml-1 text-11 font-medium">12+</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600 flex items-center">
                            <MessageCircle className='w-4 h-4' />
                            15
                        </span>

                        <span
                            onClick={toggleModal}
                            role='button'
                            tabIndex={0}
                            className="text-sm text-gray-600 flex items-center">
                            <Link className='w-4 h-4' />
                            25
                        </span>

                        <div className="flex items-center">
                            <Calendar className='w-4 h-4' />
                            <span className="text-sm text-gray-600 ms-2">30-12-2022</span>
                        </div>
                    </div>
                </div>
            </div>
            {
                isModalOpen &&
                <AppModal
                    isOpen
                    setIsModalOpen={setIsModalOpen}
                />
            }
        </div>
    )
}

export default CardItems