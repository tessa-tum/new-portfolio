import React from "react";
import { useState } from "react";

const Legal = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <section id="legal">
      <div className="flex justify-center bg-mediumblue text-darkblue text-md">

        <button
          className="text-white text-md px-6 pt-1 pb-4"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Legal notice
        </button>
        {showModal ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 pl-10 pr-10 lg:pl-20 lg:pr-20 shadow-md">
              <div className="relative my-6 bg-white rounded-md">

                <h3 className="relative px-5 pt-5 pb-2 text-xl">Legal notice</h3>
                <div className="relative px-5 pt-3 pb-5 flex-auto">
                  <h5 className="text-md">Responsible for content & administration:</h5>
                  <p className="mb-5">Tessa Tumbraegel, Berlin</p>
                  <h5 className="text-md">Image credits:</h5>
                  <p>All images used on this website are either published specifying the appropriate image credits</p>
                  <p className="mb-5"> or the image rights rest with this website. </p>
                  <h5 className="text-md">Legal notice:</h5>
                  <p>Despite careful checking we assume no liability for the contents of external links.</p>
                  <p>Responsibility for the contents of these linked websites lies solely with the persons operating them.</p>
                </div>

                <div className="flex items-center justify-end p-1 border-t border-solid border-darkblue">
                  <button
                    className="text-darkblue uppercase px-6 py-1 text-md mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Legal;
