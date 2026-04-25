"use client";

const variants = {
  primary:
    "bg-electric text-white hover:bg-blue-500 shadow-lg shadow-blue-900/30",
  secondary:
    "bg-transparent text-white border border-white/20 hover:bg-white/8 hover:border-white/40",
  gold: "bg-amber-500 text-navy font-semibold hover:bg-amber-400 shadow-lg shadow-amber-900/30",
  ghost:
    "bg-transparent text-sky hover:text-white underline underline-offset-4",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  href,
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
