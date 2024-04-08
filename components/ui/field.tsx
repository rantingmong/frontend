import { LucideIcon } from "lucide-react";

export function Field({
  children,
  label,
  icon: Icon,
  iconStyles,
  orientation,
}: FieldProps) {
  return (
    <div
      className="flex flex-col data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:gap-2"
      data-orientation={orientation ?? "vertical"}
    >
      <div className="flex flex-row items-center gap-2 text-sm">
        {Icon && <Icon size={12} style={iconStyles} />}
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}

type FieldProps = React.PropsWithChildren<{
  icon?: LucideIcon;
  iconStyles?: React.CSSProperties;
  label: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}>;
