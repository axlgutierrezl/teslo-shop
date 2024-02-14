export default function ShopLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    // <div>
    //   <h1>Hello root Layout shop </h1>
    // </div>
    // <main className="min-h-screen">
    <main className="flex justify-center">
      <div className="w-full sm:w-[350px] px-10">
        {children}
      </div>
    </main>
  )

}