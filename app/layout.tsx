import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'VS One | ICT Distribution', description: 'Global brands. One desk in Colombo.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }