import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request) {
  //all-animals page allow korte chile 
  const {pathname} =  request.nextUrl;
  if(pathname === "/all-animals") {
    return NextResponse.next();
  }

    const session = await auth.api.getSession({
        headers: await headers(),
    });
//   const isLoggedIn = true;
  if (session) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/all-animals/:path*","/profile"],
};
