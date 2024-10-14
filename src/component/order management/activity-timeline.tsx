interface TimeLineProps {
  orderTimeLine: any;
}

const ActivityTimeLine = ({ orderTimeLine }: TimeLineProps) => {
  return (
    <>
      <div className="activity-timeline-component">
        <div className="main">
          <h1 className="px-4 py-3 font-semibold">Activity TimeLine</h1>
          <hr />

          <div className="bg-white rounded-md p-4 shadow-sm">
            {/* Timeline Marker */}
            {orderTimeLine.map((timeline: any) => (
              <div className="flex items-start mb-2">
                <div className="relative mr-4 pt-1">
                  <div className="relative w-3.5 h-3.5 rounded-full bg-indigo-500 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="w-0.5 h-12 bg-gray-300 absolute top-4.5 left-1/2 transform -translate-x-1/2"></div>
                </div>

                <div className="flex-1">
                  {/* Order Creation */}
                  <h3 className="text-sm font-semibold">
                    {timeline.eventType}
                  </h3>
                  <p className="text-xs text-gray-500">{timeline.eventDate}</p>
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam nostrum, facere nulla quisquam tempore beatae?
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityTimeLine;
