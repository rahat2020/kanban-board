import Loader from '@/UI/Loader';
import React from 'react'

const StatusCard = () => {
  return (
    <div>
          <>
      <div className="border-r w-full">
        <div className="w-full">
          <h6 className="text-14 px-6 py-5 flex gap-4 items-center font-medium text-regular bg-white-light whitespace-nowrap">
            {title || ''}
            <span className="p-1 px-1.5 bg-gray-light text-[11px] font-medium rounded-lg">
              {totalCandidates.toString()?.padStart(2, '0')}
            </span>
          </h6>
          <div>
            {!isLoadingJobAppBoard ? (
              <InfiniteScroll
                dataLength={size(jobApplications)}
                next={handleLoadMore}
                hasMore={loadMore}
                scrollableTarget={id}
                loader=""
                className="infinite-custom-scrollar"
              >
                <div>
                  <ReactSortable
                    className="p-4 h-full md:h-[calc(100vh-17.4rem)] overflow-y-scroll no-scrollbar"
                    id={id}
                    handle=".handle-candidates-group-board"
                    group={{
                      name: `shared-candidates-group-board`,
                      pull: canAccessJob?.isUpdate
                    }}
                    list={jobApplications.map((x) => ({ ...x, chosen: true }))}
                    setList={setJobApplications}
                    animation={150}
                    onRemove={() => setTotalCandidates((prev) => prev - 1)}
                    onUpdate={(evt) => {
                      const { from, to } = evt;
                      if (from.id === to.id) {
                        handleUpdatePriority(evt, id, totalCandidates, 0);
                      }
                    }}
                    onAdd={(evt) => {
                      setTotalCandidates((prev) => prev + 1);
                      handleUpdatePriority(evt, id, totalCandidates, 1);
                    }}
                  >
                    {size(jobApplications) ? (
                      <>
                        {jobApplications.map((application) => (
                          <ApplicantsInfoCard
                            key={application?.id}
                            application={application}
                            jobId={jobId}
                            stageId={id}
                            setIsOpenCandidateDrawer={setIsOpenCandidateDrawer}
                          />
                        ))}
                        {isLoadingMore && (
                          <div className="pb-4 pt-6 flex justify-center items-center">
                            <Loader hW="30px" />
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col gap-3 items-center justify-center min-w-[15rem]">
                        <NoApplicants />
                        <h5 className="text-14 font-normal text-border whitespace-nowrap">
                          {totalCandidates
                            ? t('common.nothing_to_show_here')
                            : t('hiring.no_one_added_yet')}
                        </h5>
                      </div>
                    )}
                  </ReactSortable>
                </div>
              </InfiniteScroll>
            ) : (
              <div className="pt-20 h-[120vh] flex justify-center items-start">
                <Loader hW="30px" />
              </div>
            )}
          </div>
        </div>
      </div>

      <ApplicantsDetailsDrawer
        isOpenCandidateDrawer={isOpenCandidateDrawer}
        setJobApplications={setJobApplications}
        setIsOpenCandidateDrawer={setIsOpenCandidateDrawer}
      />
    </>
    </div>
  )
}

export default StatusCard