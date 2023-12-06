export function LoadingFilms() {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 w-full justify-items-center">
      {Array.from({ length: 4 }, (_, index) => {
        return (
          <div className="flex flex-col gap-3 w-48 animate-pulse" key={index}>
            <div className="flex items-center justify-between gap-5">
              <div className="w-full h-10 bg-brand-gray-medium rounded-xl" />
              <div className="bg-brand-yellow w-12 h-full rounded-xl" />
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-48 h-72 bg-cover rounded-xl bg-brand-gray-medium" />
              <div className="flex items-center justify-center">
                <div className="w-2/4 h-10 rounded-xl bg-brand-gray-medium" />
              </div>

              <div className="h-10 w-full bg-brand-gray-medium rounded-xl" />
            </div>
          </div>
        );
      })}
    </section>
  );
}
