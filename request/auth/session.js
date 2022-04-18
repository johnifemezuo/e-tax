import { withIronSession } from 'next-iron-session'

export default function withSession(handler) {
  return withIronSession(handler, {
    password: "yhh762kSDPSjdhsuAdsdsd29972181dsdsJKSA839qdskjs983202kmdss023328792jds3ASJAoa0",
    cookieName: "evone-ui-next-session",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
  });}