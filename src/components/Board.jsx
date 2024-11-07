import AppAvatar from '@/UI/AppAvatar'
import React, { useEffect, useState } from 'react'
import { Briefcase, Calendar, Clock, MapPin } from 'react-feather'
import StatusCard from './StatusCard'
import AppSpinner from '@/UI/AppSpiners'
import axios from 'axios'

const Board = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const type = 'full time'
    const department = 'Starlink'
    const hiringTeams = ''
    const projectDuration = '12 months'
    const location = 'England'
    const projectEndDate = '10/12/2024'

    const fetchData = async () => {
        try {
          const response = await axios.get('https://kanban-board-r59f.onrender.com/posts/v1/get');
          setData(response.data); 
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []); 

    return (
        <div>
            <div className="mx-4 md:mx-8 mt-5 md:mt-8 md:overflow-y-hidden">
                {!loading ? (
                    <div className="mt-2 bg-white rounded-lg">
                        <div className="bg-white p-1 rounded-lg">
                            {/* board header */}
                            <div className="flex gap-3 flex-col md:flex-row md:justify-between md:items-center bg-white-light px-8 py-6 rounded-t-md relative">
                                <div className="flex-1">
                                    <div className="text-lg font-bold text-brand-secondary flex items-center gap-2 relative w-full whitespace-nowrap">

                                    </div>
                                    <div className="hidden md:flex mt-12 md:mt-2 flex-col md:flex-row gap-5 ">
                                        {department && (
                                            <span className="flex gap-1.5 items-center text-14 font-normal text-regular">
                                                <Briefcase className="w-4 h-4 text-regular" />
                                                {department}
                                            </span>
                                        )}
                                        {type && (
                                            <span className="flex gap-1.5 items-center text-14 font-normal text-regular">
                                                <Clock className="w-4 h-4 text-regular" />
                                                {projectDuration}
                                            </span>
                                        )}
                                        {location && (
                                            <span className="flex gap-1.5 items-center text-14 font-normal text-regular">
                                                <MapPin className="w-4 h-4 text-regular" />
                                                {location}
                                            </span>
                                        )}
                                        {projectEndDate && (
                                            <div className="flex gap-2">
                                                <span className="flex gap-1.5 items-center text-14 font-normal text-regular">
                                                    Project end date:
                                                </span>
                                                <span className="flex gap-1.5 items-center text-14 font-normal text-yellow">
                                                    <Calendar className="w-4 h-4 " /> 10-12-2024
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between md:gap-8">
                                    <AppAvatar
                                        borderColor="green"
                                        avatarSize="w-10 h-10"
                                        imagesSrc={hiringTeams}
                                        showMoreIcon
                                        options={{
                                            imageLimit: 6
                                        }}
                                    />
                                </div>
                            </div>

                            {/*  candidates  */}
                            <div className="border flex overflow-x-auto scroll-smooth focus:scroll-auto">
                                {data && data?.map((item) => (
                                    <StatusCard
                                        taskData={item}
                                        key={item?.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full bg-white rounded-lg">
                        <AppSpinner customClass="h-[82vh]" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Board