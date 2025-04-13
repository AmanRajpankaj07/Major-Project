import Image from "next/image";

interface LanguageCardProps {
  src?: string;
  label?: string;
  isMore?: boolean;
}

export const LanguageCard = ({ src, label, isMore = false }: LanguageCardProps) => {
  return (
    <div className="bg-[#23426C] border-2 border-[#C7972B] rounded-xl w-[362px] h-[140px] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-[1.09] transition-all">
      {isMore ? (
        <span className="text-white text-3xl font-semibold underline underline-offset-4 decoration-blue-500">
          More +
        </span>
      ) : (
        <>
          <Image src={src || ""} alt={label || "Logo"} width={40} height={50} className="mr-4 " />
          <span className="text-xl font-medium tracking-wide">{label}</span>
        </>
      )}
    </div>
  );
};