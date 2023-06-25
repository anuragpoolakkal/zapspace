import React from "react";


interface LayoutProps {
    children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="navbar bg-blue-600">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Sai's Boost Kada</a>
                </div>
            </div>
            <main className="flex-1 w-auto md:mx-16 mx-5">
                {children}
            </main>
        </div>
    );
};


export default Layout;
