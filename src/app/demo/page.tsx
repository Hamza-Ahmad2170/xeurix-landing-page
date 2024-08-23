import Calendar from "@/components/Calendar";
import Demo from "@/components/demo";

export default function Page() {
  return (
    <div className="bg-white bg-[url('/images/gameBackground.png')] bg-cover bg-top bg-no-repeat">
      <div className="flex h-[calc(100dvh-90px)] items-center justify-center py-0">
        <div className="mx-auto w-full max-w-[600px] rounded-md bg-white px-12 py-12 text-lg">
          <h1 className="mb-10 pb-6 text-center text-5xl font-semibold">
            Request Demo
          </h1>
          <>
            <Demo />
          </>
        </div>
      </div>
      <Calendar />
    </div>
  );
}
