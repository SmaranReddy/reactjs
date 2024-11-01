import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block" href="#">
              <span className="sr-only">Home</span>
              <img src="/logo.jpg" alt="Logo" className="h-40 w-50" />
            </a>

            <h1 className="mt-6 text-2xl font-bold text-teal-600 sm:text-3xl md:text-4xl">
              Welcome to Crafting Comfort
            </h1>

            <div className="p-10">
              <SignIn />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
