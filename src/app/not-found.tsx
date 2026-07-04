import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-center px-8 text-center">
      <p className="text-8xl font-bold text-accent md:text-9xl">404</p>
      <h1 className="mt-4 text-3xl font-medium md:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-[45ch] text-secondaryText">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 block w-fit rounded-md border border-accent px-3 py-1 uppercase text-accent transition-colors duration-200 ease-in-out hover:bg-accent hover:text-primaryBackground"
      >
        Back to home
      </Link>
    </main>
  );
};

export default NotFound;
