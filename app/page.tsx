export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="w-full max-w-2xl rounded-3xl border border-zinc-200/70 bg-white p-10 shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight">
            Automex
          </h1>
          <h2 className="text-sm font-medium tracking-widest text-zinc-500 dark:text-zinc-400">
            UNDER MAINTENANCE
          </h2>
          <p className="mx-auto max-w-prose text-base leading-7 text-zinc-600 dark:text-zinc-400">
            We’re making improvements. Please check back soon.
          </p>
        </div>
      </main>
    </div>
  );
}
