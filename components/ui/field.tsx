import { LucideIcon } from "lucide-react";

export function Field({ children, label, icon: Icon, iconClassName }: FieldProps) {
  return (
    <div className="flex flex-col">
      <div className="text-sm flex flex-row gap-2 items-center">
        {Icon && <Icon className={iconClassName} size={12} />}
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}

type FieldProps = React.PropsWithChildren<{ icon?: LucideIcon; iconClassName?: string; label: React.ReactNode }>;
