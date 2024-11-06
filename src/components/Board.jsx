import React from 'react'

const Board = () => {
  return (
    <div>
         <div className="mx-4 md:mx-8 mt-5 md:mt-8 md:overflow-y-hidden">
        <PageHeaderComponent
          getApi={getJobApplicationBoard}
          setBoardSearchTextQuery={setBoardSearchTextQuery}
        />

        {!isInitialLoading ? (
          <div className="mt-2 bg-white rounded-lg">
            <div className="bg-white p-1 rounded-lg">
              {/* board header */}
              <div className="flex gap-3 flex-col md:flex-row md:justify-between md:items-center bg-white-light px-8 py-6 rounded-t-md relative">
                <div className="flex-1">
                  <div className="text-lg font-bold text-brand-secondary flex items-center gap-2 relative w-full whitespace-nowrap">
                    <AppDropdown
                      id={2}
                      iconRight={<ChevronDown className="w-5 h-5" />}
                      data={jobsDropdownData}
                      selectedItem={defaultSelectedJob}
                      onItemSelected={handleItemSelected}
                      titleTypeDropdown
                      btnWidth={isMobileScreen && 'w-[calc(100vw-5rem)]'}
                      position="left-0"
                      options={{
                        titleClass: 'font-medium text-16',
                        defaultSelectedTitle: title || '',
                        scrollbarId: 'jobs-dropdown',
                        context: 'jobs',
                        loadMore: isAvailableJob,
                        isLoading: isLoadingJobs,
                        callback: handleJobs
                      }}
                    />
                  </div>
                  <div className="hidden md:flex mt-12 md:mt-2 flex-col md:flex-row gap-5 ">
                    {department?.name && (
                      <span className="flex gap-1.5 items-center text-14 font-normal text-regular">
                        <Briefcase className="w-4 h-4 text-regular" />
                        {department.name}
                      </span>
                    )}
                    {type && (
                      <span className="flex gap-1.5 items-center text-14 font-normal text-regular">
                        <Clock className="w-4 h-4 text-regular" />
                        {t(`common.${type}`)}
                      </span>
                    )}
                    {location && (
                      <span className="flex gap-1.5 items-center text-14 font-normal text-regular">
                        <MapPin className="w-4 h-4 text-regular" />
                        {location}
                      </span>
                    )}
                    {last_date_of_apply && (
                      <span className="flex gap-1.5 items-center text-14 font-normal text-yellow">
                        <Calendar className="w-4 h-4 " />
                        {dayjs(last_date_of_apply).format(getDateFormat())}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between md:gap-8">
                  {status && (
                    <AppBadge
                      badgeText={status}
                      badgeColor={status === 'published' ? 'blue' : 'warning'}
                      options={{
                        isCapitialize: true,
                        badgePadding: 'py-2 px-[17px]'
                      }}
                    />
                  )}
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
              <div className="border-t flex overflow-x-auto scroll-smooth focus:scroll-auto">
                {hiringStages?.map((stage) => (
                  <StatusCard
                    key={stage?.id}
                    stage={stage}
                    isLoadingJobAppBoard={isLoadingJobAppBoard}
                    boardSearchTextQuery={boardSearchTextQuery}
                    canShowCandidatesDrawer={canShowCandidatesDrawer}
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