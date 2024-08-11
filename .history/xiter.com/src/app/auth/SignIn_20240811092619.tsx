'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      await signIn('github');
    } catch (error) {
      setErrorMessage('Failed to sign in. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Sign In</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button
        onClick={handleSignIn}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default SignIn;
