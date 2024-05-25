import dynamic from "next/dynamic";

const ExcalidrawWrapper = dynamic(
  async () => (await import("@/components/custom/excalidrawWrapper")).default,
  {
    ssr: false,
  }
);

export default function Page() {
  return <ExcalidrawWrapper />;
}
