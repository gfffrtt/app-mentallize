import { Layout } from "../components/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Layout>{children}</Layout>
    </main>
  );
}
