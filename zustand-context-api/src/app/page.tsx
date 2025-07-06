import CountProvider from "@/providers/CountProvider";

type AppProps = {
  initialCount: number;
};

export default function Home({ initialCount = 7 }: AppProps) {
  return (
    <CountProvider initialCount={initialCount}>
      <h1>this is the example of zustand context API</h1>
    </CountProvider>
  );
}
