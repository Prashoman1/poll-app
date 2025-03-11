"use client"
import React, { useEffect } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";

import { Link } from "@heroui/link";

import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "../config/site";
import { ThemeSwitch } from "../components/theme-switch";
export const Navbar = () => {
  const [user, setUser] = React.useState<string | null>(null)
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setUser(userId);
    } else {
      setUser(null);
    }
  }, []);
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <div>
              <h1 className="text-2xl font-bold text-black dark:text-white">Simple Polls</h1>
              
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2 ms-10">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          {
            user && <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            color="foreground"
            href='/privacy-polls'
          >
            Private Polls
          </NextLink>
          }
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
       
        <ThemeSwitch />
        
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
       
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig?.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                color="foreground"
                href={item.href}
                size="lg"
                >
                {item.label}
                </Link>
            </NavbarMenuItem>
          ))}
        </div>
        
      </NavbarMenu>
    </HeroUINavbar>
  );
};
