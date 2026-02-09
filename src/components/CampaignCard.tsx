type CampaignCardProps = {
  status: string;
  title: string;
  description: string;
  image: string;
  link: string;
  linkLabel: string;
};

export const CampaignCard = ({
  status,
  title,
  description,
  image,
  link,
  linkLabel,
}: CampaignCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
      
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />

      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
          {status}
        </span>

        <h3 className="text-xl font-bold text-[#1B5E20] mb-3">
          {title}
        </h3>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <a
          href={link}
          className="inline-flex items-center text-[#1B5E20] font-semibold hover:underline"
        >
          {linkLabel}
        </a>
      </div>
    </div>
  );
};
