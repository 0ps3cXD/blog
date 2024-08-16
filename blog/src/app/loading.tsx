"use client"
export default function Loading() {
    return <div className="global w-screen h-screen bg-white z-50 absolute top-0 left-0 flex justify-center items-center">
      <style jsx>{`
      .loader {
        border: 16px solid rgba(256, 256, 256, 0.1); /*Light Grey*/
        border-top: 16px solid rgba(256, 256, 256, 0.4); /*Grey*/
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      `}</style>
      <div className="global loader z-[100]"></div>
    </div>
  }