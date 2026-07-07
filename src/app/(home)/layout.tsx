interface BasicLayoutProps {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/audiopad-poster.webp"
        fetchPriority="high"
      />
      {children}
    </>
  );
}
