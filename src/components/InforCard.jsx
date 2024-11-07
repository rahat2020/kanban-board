import AppAvatar from '@/UI/AppAvatar'
import Loader from '@/UI/Loader'
import React from 'react'
import { Star, Calendar } from 'react-feather';

const InforCard = () => {
    const loading = false
    const name = 'rahat';
    
  return (
    <div>
         <div
      id={id}
      className="w-full min-w-[15rem] rounded-lg border bg-white p-3 my-2 handle-candidates-group-board"
    >
      {loading ? (
        <div className="pb-4 pt-6 flex justify-center items-center">
          <Loader hW="36px" />
        </div>
      ) : (
        <div className="flex gap-3" role="button" tabIndex={0} onClick={() => handleOpenDrawer(id)}>
          <AppAvatar
            singleAvatar
            singleImgSrc={avater}
            avatarSize="w-10 h-10"
            options={{
              title: name
            }}
          />
          <div>
            <h5 className="text-brand-secondary font-medium text-14 whitespace-nowrap">
              {truncateText(name, 18)}
            </h5>
            <div className="flex gap-3 items-center">
              {avg_rating && (
                <span className="text-yellow flex gap-1 items-center">
                  <Star  className="fill-yellow w-3 h-3" /> {`${avg_rating}(${total_review})`}
                </span>
              )}
              {createdAt && (
                <span className="flex gap-1 items-center text-gray-deep text-11 whitespace-nowrap">
                  <Calendar width="12px" height="12px" className="font-medium" />{' '}
                  {dayjs(createdAt).format(getDateFormat())}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default InforCard