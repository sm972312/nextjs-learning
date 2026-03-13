
import Link from "next/link";
export default function Button({ children, variant = "primary", href }) {
  let styles =
    "px-6 py-3 rounded-lg font-medium transition";

  if (variant === "primary") {
    styles += " bg-black text-white hover:bg-gray-800";
  }

  if (variant === "outline") {
    styles += " border border-black text-black hover:bg-black hover:text-white";
  }
  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  return <button className={styles}>{children}</button>;
}