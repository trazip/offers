const offers = [
  { title: "Appel d'offre 1", date: "2026-01-15" },
  { title: "Appel d'offre 2", date: "2026-02-08" },
  { title: "Appel d'offre 3", date: "2026-03-22" },
  { title: "Appel d'offre 4", date: "2026-04-30" },
  { title: "Appel d'offre 5", date: "2026-05-17" },
  { title: "Appel d'offre 6", date: "2026-06-01" },
];

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl px-8 py-16">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="py-3 pr-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Appel d&apos;offre
              </th>
              <th className="py-3 pl-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer) => (
              <tr
                key={offer.title}
                className="border-b border-zinc-100 dark:border-zinc-900"
              >
                <td className="py-3 pr-4 text-zinc-800 dark:text-zinc-200">
                  {offer.title}
                </td>
                <td className="py-3 pl-4 text-zinc-600 dark:text-zinc-400">
                  {offer.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
