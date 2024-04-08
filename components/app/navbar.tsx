import { cn } from "@/lib/utils";
import { Merriweather } from "next/font/google";
import NavbarLink from "./navbar/link";

const header = Merriweather({ subsets: ["latin"], weight: "700" });

export default function AppNavbar() {
  return (
    <div className="flex flex-col pb-3 sticky z-10 top-0 bg-background">
      <div className="flex flex-row items-center gap-4 px-6 py-2">
        <span className={cn(header.className, "text-xl font-bold")}>le.weather</span>
        <div className="relative h-12 rounded-full bg-muted grow">
          <input
            className="absolute inset-0 min-w-0 bg-transparent outline-none px-5"
            placeholder="Search for Cities"
          />
        </div>
      </div>
      <div className="flex flex-row px-6 -ml-3">
        <NavbarLink href="/">Overview</NavbarLink>
        <NavbarLink href="/forecast">Forecast</NavbarLink>
        <NavbarLink href="/history">History</NavbarLink>
      </div>
    </div>
  );
}
