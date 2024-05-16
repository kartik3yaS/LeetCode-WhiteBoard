"use client"

import { useParams } from "next/navigation";

export default function ProblemId() {
    const params = useParams();

    return(
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
            <div className="flex space-x-4 border border-white relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                Hello {params.id} 
            </div>
        </div>
    )
}