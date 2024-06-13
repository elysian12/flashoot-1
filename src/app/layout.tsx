import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flashoot",
  description: `Flashoot Partner: Your Gateway to Capturing Unforgettable Moments

Flashoot Partner is the go-to app for professional reelmakers looking to expand their business and connect with clients who need top-notch video content for their special occasions. Whether you're a seasoned videographer or just starting out, Flashoot Partner is the perfect platform to showcase your skills, manage bookings, and grow your clientele.

Why You'll Love Flashoot Partner

Expand Your Reach: Gain access to a wide range of clients who need professional reelmakers to capture their events. From birthday parties and weddings to corporate events and more, Flashoot Partner connects you with people looking for your expertise.

Showcase Your Talent: Create a detailed profile, upload your portfolio, and highlight your best work. Let potential clients see your style and skills, making it easier for them to choose you for their special moments.

Flexible Scheduling: Manage your availability with ease. Accept or decline bookings based on your schedule, ensuring you have control over your work-life balance.

Secure Payments: Enjoy hassle-free, secure payment processing. Get paid promptly for your services without worrying about invoicing or follow-ups.

Direct Communication: Communicate directly with clients to understand their vision and requirements. Ensure every project meets their expectations and results in a satisfied customer.

How It Works

Sign Up and Create a Profile: Join the Flashoot Partner community by signing up and creating a comprehensive profile. Showcase your experience, skills, and portfolio to attract potential clients.

Set Your Availability: Update your calendar to reflect your availability. Clients can view your schedule and book you for their events based on your convenience.

Accept Bookings: Receive notifications for new booking requests. Review the details and accept the ones that fit your schedule and preferences.

Capture and Create: Attend the events, capture stunning footage, and craft beautiful reels that clients will love. Deliver high-quality videos that showcase your talent.

Get Paid: Receive secure payments directly through the app. Enjoy a streamlined process that ensures you get compensated promptly for your work.

Who Is It For?

Professional Videographers: Expand your business by connecting with a broader client base.

Freelancers: Find consistent work opportunities and grow your portfolio.
Aspiring Reelmakers: Kickstart your career by gaining exposure and building a reputation.

Download Flashoot Partner and start accepting bookings to create unforgettable videos. Grow your business, showcase your talent, and be a part of capturing life's most precious moments.

Flashoot Partner: Your Gateway to Capturing Unforgettable Moments`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
