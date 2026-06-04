"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Site-wide left nav.
 *
 * On desktop (sm+): sticky column flush to the left, vertical link list.
 * On mobile: horizontal row at the top of the page, scrolls with content.
 * Active route is bolded; everything else stays muted.
 */

const LINKS = [
  { href: "/", label: "home" },
  { href: "/intrusive-thoughts", label: "intrusive thoughts" },
];

function isActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="relative z-[1] shrink-0 p-4 sm:sticky sm:top-0 sm:h-fit sm:w-52 sm:p-8 sm:pr-0 text-step--1 text-dark">
      <ul className="flex flex-row gap-4 sm:flex-col sm:gap-2">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`whitespace-nowrap ${
                isActive(pathname, link.href)
                  ? "font-medium"
                  : "text-muted hover:text-fg transition-colors"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
