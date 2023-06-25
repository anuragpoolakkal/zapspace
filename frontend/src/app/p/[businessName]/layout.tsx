"use client";
import React from "react";
import { serverURL } from "@/utils/util";
import axios from "axios";
import { useEffect, useState } from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {children}
        </div>
    );
};


export default Layout;