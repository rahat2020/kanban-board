import Loader from '@/UI/Loader';
import React, { useState } from 'react'
import CardItems from './CardItems';
import { size } from 'lodash';

const StatusCard = ({ taskData }) => {
    const { title, tasks } = taskData || {}

    // showing the title color 
    const handleTitleColor = () => {
        switch (title) {
            case 'Incomplete':
                return 'bg-red';
            case 'Todo':
                return 'bg-blue';
            case 'Doing':
                return 'bg-yellow';
            default:
                return 'text-gray-700';
        }
    }

    // showing total task number according to task name 
    const handleTaskCount = (params) => {
        switch (title) {
            case 'Incomplete':
            case 'Todo':
            case 'Doing':
            case 'Under Review':
            case 'Completed':
                return size(params);
            default:
                return '';
        }
    }

    return (
        <div>
            <div className="border-r w-full">
                <div className="w-full">
                    <div className="text-14 px-6 py-5 flex gap-4 items-center justify-between font-medium text-regular bg-white-light whitespace-nowrap">
                        {/* Status Indicator */}
                        <div className="flex items-center space-x-2">
                            <div className={`w-6 h-6 ${handleTitleColor(title)}  rounded-l-lg`}></div>
                            <span className="font-medium text-sm">{title || ''}</span>
                        </div>

                        {/* Count */}
                        <div className="bg-gray-200 text-gray-700 font-semibold text-sm px-2 py-1 rounded">
                            {handleTaskCount(tasks)}
                        </div>
                    </div>

                    <div>
                        {size(tasks) ? (
                            <>
                                {tasks && tasks.map((singleTask) => (
                                    <CardItems
                                        key={singleTask?.id}
                                        singleTask={singleTask}
                                        singleTaskID={singleTask?.id}
                                    />
                                ))}
                            </>
                        ) : (
                            <div className="flex flex-col gap-3 items-center justify-center min-w-[15rem]">
                                <h5 className="text-14 font-normal text-border whitespace-nowrap">
                                    nothing to show here
                                </h5>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusCard