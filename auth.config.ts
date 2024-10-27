import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export default {
    providers: [Github, Google],

} satisfies NextAuthConfig 