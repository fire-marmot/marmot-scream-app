import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Link from 'next/link';

const providers = getProviders();

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="text-center m-5">
          <Link 
            href='/home'
            >
            <a className="bg-dark rounded p-2 text-light m-5"
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </a>
          </Link>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(ctx) {
  const providers = await getProviders();
  return {
    props: { providers }
  }
}
