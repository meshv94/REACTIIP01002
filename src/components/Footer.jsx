import React from 'react'

const Footer = () => {
    return (
        <div className="footer py-3 bg-white text-white">
            <div className="container">
                <p className="text-center mb-0">
                    Developed by Meshv Patel &copy; {new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}

export default Footer