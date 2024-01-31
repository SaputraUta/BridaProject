interface inputProps {
  type: string;
  placeholder: string;
  name?: string;
}

export default function InputLogin({ type, placeholder, name }: inputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-11/12 max-w-xs sm:max-w-xl md:w-5/6 border-b border-black overflow-hidden mb-5 bg-transparent focus:outline-none shadow-sm text-xs sm:text-sm md:text-base lg:text-lg"
    />
  );
}
