const WftPage =  ({ show, onClose }) => {
    return(
        <div className={`fixed inset-0 ${show ? '' : 'hidden'} flex items-center justify-center z-50`}>
        <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          {/* Modal content */}
          <div className="modal-content py-4 text-left px-6">
            <div className="modal-close cursor-pointer z-50">
              <button className="text-2xl font-bold leading-none absolute top-0 right-0" onClick={onClose}>
                ×
              </button>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">Payment Not Successful</p>
              <p className="mt-2">Payment failed. Please try again.</p>
            </div>
            <div className="mt-4">
              <button
                className="modal-close px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    
}

export default WftPage;