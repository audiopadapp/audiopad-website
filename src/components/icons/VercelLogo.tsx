type Props = {
  className?: string;
};

export default function VercelLogo({
  className,
}: Props) {
  return (
    <svg
      viewBox="0 0 76 65"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M37.5274 0L75.0548 65H0L37.5274 0Z"
        fill="currentColor"
      />
    </svg>
  );
}