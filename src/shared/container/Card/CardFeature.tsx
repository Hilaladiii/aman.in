interface CardFeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
}
export default function CardFeature({
  title,
  description,
  icon,
}: CardFeatureProps) {
  const Icon = icon;
  return (
    <div className="flex max-w-[255px] flex-col items-center gap-2">
      {<Icon className="text-primary500" />}
      <h3 className="p-3 text-center text-20 font-bold text-baseblack">
        {title}
      </h3>
      <p className="text-center text-18 text-neutral600">{description}</p>
    </div>
  );
}
