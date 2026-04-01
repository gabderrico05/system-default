

export default function ErrorMessage({ message }: { message?: string }) {
  return (
     <span className="text-red-500 font-light text-sm pl-1 pt-0.5 min-h-6">{message}</span>
  );
}