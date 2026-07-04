"use client";
import Link from "next/link";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-center px-8 text-center">
      <h1 className="text-3xl font-medium md:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-[45ch] text-secondaryText">
        An unexpected error occurred. You can try again, or head back to the
        homepage.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="block w-fit rounded-md bg-accent px-3 py-1 uppercase text-primaryBackground transition-opacity duration-200 ease-in-out hover:opacity-80"
        >
          Try again
        </button>
        <Link
          href="/"
          className="block w-fit rounded-md border border-accent px-3 py-1 uppercase text-accent transition-colors duration-200 ease-in-out hover:bg-accent hover:text-primaryBackground"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default Error;
