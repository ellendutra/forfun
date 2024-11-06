export default function PrimaryButton({ type = 'submit', onClick, text, className }) {
  return (
    <button type={type} onClick={onClick} className={`bg-blueViolet hover:bg-customPurple rounded-full w-[220px] h-[53px] text-white z-10 mb-2 ${className}`}>
      {text}
    </button>
  );
}
