import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

/**
 * NextAuth Configuration
 * 
 * This file configures NextAuth.js for authentication
 * Features:
 * - Credentials-based authentication
 * - Role-based access control
 * - Session management
 * - Secure password handling
 */

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // In a real application, you would:
        // 1. Hash the password
        // 2. Query your database
        // 3. Compare hashed passwords
        // 4. Return user object or null
        
        // For demo purposes, we're using hardcoded credentials
        const users = [
          {
            id: '1',
            email: 'admin@example.com',
            password: 'admin123', // In production, this should be hashed
            name: 'Admin User',
            role: 'admin',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
          },
          {
            id: '2',
            email: 'writer@example.com',
            password: 'writer123', // In production, this should be hashed
            name: 'Blog Writer',
            role: 'blog-writer',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face'
          }
        ];

        const user = users.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );

        if (user) {
          // Return user object (password will be excluded automatically)
          const { password, ...userWithoutPassword } = user;
          return userWithoutPassword;
        }

        return null;
      }
    })
  ],
  
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    
    async session({ session, token }) {
      // Send properties to the client
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
  
  pages: {
    signIn: '/login',
    error: '/login', // Error code passed in query string as ?error=
  },
  
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production',
});

export { handler as GET, handler as POST };

