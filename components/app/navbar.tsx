import { cn } from "@/lib/utils";
import { Merriweather } from "next/font/google";
import NavbarInput from "./navbar/input";
import NavbarLink from "./navbar/link";

const header = Merriweather({ subsets: ["latin"], weight: "700" });

export default function AppNavbar() {
  return (
    <div className="sticky top-0 z-10 flex flex-col bg-background pb-3">
      <div className="flex flex-row items-center gap-4 px-6 py-3">
        <span className={cn(header.className, "text-xl font-bold")}>
          le.weather
        </span>
        <NavbarInput />
      </div>
      <div className="-ml-3 flex flex-row px-6">
        <NavbarLink href="/">Overview</NavbarLink>
        <NavbarLink href="/forecast">Forecast</NavbarLink>
        <NavbarLink href="/history">History</NavbarLink>
      </div>
    </div>
  );
}
