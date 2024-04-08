"use client";

import { Button } from "@/components/ui/button";
import { default as Link } from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink({ children, href }: React.PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();

  return (
    <Link href={href} legacyBehavior>
      <Button variant={pathname === href ? "default" : "link"}>{children}</Button>
    </Link>
  );
}
