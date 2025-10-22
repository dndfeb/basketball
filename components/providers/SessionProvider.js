'use client';

import { SessionProvider } from 'next-auth/react';

/**
 * SessionProvider Wrapper
 * 
 * This component wraps the NextAuth SessionProvider
 * to provide session context throughout the app
 */
export default function AuthSessionProvider({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
