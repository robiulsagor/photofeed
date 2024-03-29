import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const locales = ["en", "bn"];
const defaultLocale = "en";

const getLocale = (request) => {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
