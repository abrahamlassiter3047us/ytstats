import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
  customClass?: string;
}

const DetailSection = ({ heading, children, customClass }: Props) => {
  return (
    <span className={"flex gap-4 lg:text-lg " + customClass}>
      <p className="text-secondary font-medium text-nowrap">{heading}</p>
      <pre className={customClass + " text-wrap "}>{children}</pre>
    </span>
  );
};

export default DetailSection;
