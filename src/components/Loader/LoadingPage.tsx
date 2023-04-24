import React from 'react'

const LoadingPage = () => {
    return (
        <div className="fixed inset-0 bg-gray-900 opacity-75 flex flex-col items-center justify-center z-50">
            <div className="custom-loader"></div>
            <div className="mt-4 text-center">
                <p className="text-white">Loading page...</p>
            </div>
        </div>
    )
}

export default LoadingPage