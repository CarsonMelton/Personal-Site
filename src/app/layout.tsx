import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-[#F0EAD6] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
