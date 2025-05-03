import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;

  //style="fontSize: 48px;"

  return (
    <main>
      <section className="bg-base-300">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">SPARK AMZ</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </section>
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          SPARK Amazon PPC System
        </h1>
        <div className="opacity-90 mb-10">
          <h2>
            Better performance than Pacvue at 1/10th the cost. Tools for
            performance, Ease of maintenance, and Client Management.
          </h2>
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} />
      </section>
    </main>
  );
}
