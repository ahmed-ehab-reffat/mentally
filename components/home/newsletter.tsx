export default function Newsletter() {
  return (
    <section className="bg-lighter px-8 py-16">
      <div className="max-w-2xl mx-auto text-center bg-light p-8 rounded-xl border border-primary shadow-xl">
        <div className="inline-block p-5 rounded-full bg-lighter">
          <svg
            className="w-7 h-7 align-[-0.125em] fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-8">
          Subscribe to our newsletter for mental health tips, updates, and
          resources.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 border border-primary outline-none rounded-md placeholder:text-secondry"
          />
          <button
            type="button"
            className="text-secondry bg-lighter px-4 py-2 rounded-md hover:cursor-pointer hover:bg-amber-50 duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
