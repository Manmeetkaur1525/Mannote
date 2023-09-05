'use client'
import Navbar from '@/src/Navbar/Navbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { RecoilRoot } from 'recoil'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Mannote - Your Goto Planner',
    description: 'Notes app revolutionized',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="relative w-screen h-screen overflow-x-hidden">
                    <RecoilRoot>
                        <Navbar />
                        {children}
                    </RecoilRoot>
                </div>
            </body>
        </html>
    )
}


// page
{/* <layout>page<layout> */}