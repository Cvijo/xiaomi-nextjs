import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const headContainer = {
  margin: 15
};


const links = [
  { href: "/products", label: "Products" },
  // { href: "/links", label: "Links" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default function Header() {
  return (
    <div style={headContainer}>
      <Link href='/'>
        <a style={linkStyle}>Home</a>
      </Link>
      {links.map(({ key, href, label }) => (
        <a key={key} href={href} style={linkStyle}>
          {label}
        </a>
      ))}
    </div>
  );
}
