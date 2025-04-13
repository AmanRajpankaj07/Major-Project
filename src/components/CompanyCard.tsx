import Image from "next/image";

interface CompanyCardProps {
  src?: string;
  name?: string;
  isMore?: boolean;
}

export const CompanyCard = ({ src, name, isMore = false }: CompanyCardProps) => {
  return (
    <div className="bg-[#23426C] border-2 border-[#C7972B] rounded-xl w-[362px] h-[140px] p-6 flex flex-col items-center shadow-lg hover:shadow-xl hover:scale-[1.09] transition-all">
      {isMore ? (
        <span className="text-white text-2xl font-semibold underline underline-offset-4 decoration-blue-500 py-10">
          More +
        </span>
      ) : (
        <div>
          <Image src={src || ""} alt={name || "Company"} width={80} height={20} />
          <p className="text-2xl ">{name}</p>
        </div>
      )}
    </div>
  );
};