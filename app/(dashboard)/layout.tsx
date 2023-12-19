import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PoweredByOcomni from "@/components/powered-by";
import { Toaster } from "@/components/ui/toaster";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage:
            "url('https://background-tiles.com/overview/white/patterns/large/1025.png')",
          backgroundRepeat: "repeat",
        }}
      >
        {children}
      </div>
      <Toaster />
      <Footer />
      <PoweredByOcomni />
    </>
  );
}
