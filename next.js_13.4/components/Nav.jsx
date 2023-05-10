// we need client component becaise "useEffect" is a client side function
'use client';

// link to other pages in your app
import Link from 'next/link';
// automatic optimizae the images
import Image from 'next/image';

import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between">
      <Link href="/">
        <Image
          src="/assets/images/logo1.svg"
          alt="Frution Logo"
          width={40}
          height={40}
          // image stays in the middle of the container
          className="objekt-contain"
        />
        {/* text neben logo */}
        <p className="logo-text">Fruition</p>
      </Link>

      <div>
        {isUserLoggedIn ? (
          <div className="flex space-x-4">
            <button>Profile</button>
            <button type="button" className="outline_btn" onClick={signOut}>
              Profile
            </button>
            <button>Cart</button>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
