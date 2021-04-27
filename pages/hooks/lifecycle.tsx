import Link from "next/link";
import Image from "next/image";
import React from "react";
import Header from "next/head";
export default function Home() {
  return (
    <div>
      <Header>
        <title>Ta chưa bao giờ</title>
      </Header>
      <p>This is our homepage</p>
      <div>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </div>
      <Image
        src="/static/nextjs.png"
        alt="Next.js logo"
        width={200}
        height={160}
      />
    </div>
  );
}
