import CopyBtn from "@/app/components/CopyBtn/page";

const AllURLs = ({ allUrls, originalURL }) => {
  return (
    <>
      <div className='text-teal-500 border-t bg-neutral-100 py-28 overflow-y-auto'>
        <div className='flex flex-col justify-center items-center content-center space-y-1 sm:mt-32'>
          <div className='flex flex-col just-start items-start content-start space-y-1 min-h-[20dvh] overflow-y-auto w-4/5'>
            {allUrls && allUrls.length > 0 ? (
              allUrls
                .filter((uri) => uri.original_url === originalURL)
                .reverse()
                .map((matching_url) => (
                  <div
                    key={matching_url._id}
                    className='flex flex-col md:flex-row justify-between items-center content-center text-teal-500 w-full py-3 bg-white rounded-md shadow-neutral-500 drop-shadow-md'
                  >
                    <div className='w-full md:w-1/2 flex flex-row justify-start items-center'>
                      <span className='text-blue-950 line-clamp-1'>
                        {matching_url.original_url}
                      </span>
                    </div>
                    <div className='w-full md:w-1/2 space-x-3 flex flex-row justify-between items-center'>
                      <span className='text-teal-600'>
                        {matching_url.shortened_url}
                      </span>
                      <span className='text-teal-500 px-5 line-clamp-1'></span>
                      <CopyBtn shortURL={ matching_url.shortened_url} />
                    </div>
                  </div>
                ))
            ) : (
              <div className='flex flex-row justify-center items-center'>
                <p className='font-semibold text-neutral-400'>
                  No URLs shortened so far
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllURLs;
