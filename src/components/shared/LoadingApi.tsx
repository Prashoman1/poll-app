"use client"
import React from 'react';

const LoadingApi = () => {
    return (
        <>
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
            <div className="flex flex-col items-center space-y-4">
              <svg
                className="animate-spin h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div> 
        </>
    );
};

export default LoadingApi;