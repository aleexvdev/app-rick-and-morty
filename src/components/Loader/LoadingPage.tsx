import React from 'react'

interface LoadingPageEstructure {
    title: string;
}

const LoadingPage: React.FC<LoadingPageEstructure> = ( {title} ) => {
    return (
        <div className="fixed inset-0 bg-gray-900 opacity-100 flex flex-col items-center justify-center z-50">
            <div className="custom-loader"></div>
            <div className="mt-4 text-center">
                <p className="text-white">Loading page {title}...</p>
            </div>
        </div>
    )
}

export default LoadingPage