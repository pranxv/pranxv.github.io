"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { THOUGHTS, thoughtHref } from "@/app/intrusive-thoughts/data";

/**
 * Site-wide nav with collapsible sub-lists.
 *
 * Each top-level item has a Link (navigates) and, if it has children, a
 * small "+"/"−" toggle next to it (expands/collapses in place). Children
 * for "intrusive thoughts" come from the THOUGHTS registry so adding an
 * article auto-extends the nav.
 *
 * Sections you're currently inside auto-expand on first render so you can
 * see where you are in the tree without clicking around.
 */

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const ITEMS: NavItem[] = [
  {
    href: "/",
    label: "home",
    children: [
      { href: "/#about", label: "about" },
      { href: "/#contact", label: "contact" },
      { href: "/#socials", label: "socials" },
    ],
  },
  {
    href: "/intrusive-thoughts",
    label: "intrusive thoughts",
    children: THOUGHTS.map((t) => ({
      href: thoughtHref(t),
      label: t.title,
    })),
  },
];

function isInSection(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  const path = href.split("#")[0] || "/";
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export default function Nav() {
  const pathname = usePathname();
  // Auto-open the section we're inside on first render. State stays
  // client-controlled after that — clicking the link doesn't collapse it.
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const s = new Set<string>();
    for (const item of ITEMS) {
      if (isInSection(pathname, item.href)) s.add(item.href);
    }
    return s;
  });

  const toggle = (href: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(href)) next.delete(href);
      else next.add(href);
      return next;
    });

  return (
    <nav className="relative z-[1] shrink-0 p-4 sm:sticky sm:top-0 sm:h-fit sm:w-52 sm:p-8 sm:pr-0 text-step--1 text-dark">
      <ul className="flex flex-col gap-2">
        {ITEMS.map((item) => {
          const open = expanded.has(item.href);
          const active = isInSection(pathname, item.href);
          const hasChildren = !!item.children?.length;
          return (
            <li key={item.href} className="flex flex-col">
              <div className="flex items-center gap-2">
                <Link
                  href={item.href}
                  onClick={() => {
                    // Expand on link click so navigating to a section also
                    // pops its sub-list open. Idempotent — re-clicking a
                    // parent that's already open is a no-op.
                    if (hasChildren && !open) toggle(item.href);
                  }}
                  className={`whitespace-nowrap transition-colors ${
                    active
                      ? "font-semibold text-fg"
                      : "text-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                </Link>
                {hasChildren && (
                  <button
                    type="button"
                    onClick={() => toggle(item.href)}
                    aria-expanded={open}
                    aria-label={`${open ? "Collapse" : "Expand"} ${item.label}`}
                    className="text-muted hover:text-fg transition-colors w-4 text-center leading-none"
                  >
                    {open ? "−" : "+"}
                  </button>
                )}
              </div>
              {hasChildren && open && (
                <ul className="flex flex-col gap-1 pt-1 pl-3 ml-1 border-l border-muted/30">
                  {item.children!.map((child) => {
                    const childActive = pathname === child.href;
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`whitespace-nowrap pl-2 transition-colors ${
                            childActive
                              ? "font-semibold text-fg"
                              : "font-light text-muted/70 hover:text-muted"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
