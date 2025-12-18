export default function Home() {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-9 max-w-360 mx-auto px-4 md:px-6 xl:w-11/12 dark:bg-black min-h-screen">
        <div className=" md:col-span-2 bg-Primary/20"></div>
        <div className=" md:col-span-4 lg:col-span-5 bg-Primary/10"></div>
        <div className=" hidden lg:col-span-2 lg:block bg-Primary/20"></div>
      </div>
    </section>
  );
}
