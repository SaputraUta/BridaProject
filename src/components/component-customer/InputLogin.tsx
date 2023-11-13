interface inputProps {
  type: string;
  placeholder: string;
  name: string;
}

export default function InputLogin({ type, placeholder, name }: inputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-3/4 border-b overflow-hidden mb-5 bg-transparent focus:outline-none"
    />
  );
}
