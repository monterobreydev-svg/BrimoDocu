import { Button } from "@/components/ui/Button";

interface DashboardHeaderProps {
  title: string;
  action?: {
    label: string;
    href: string;
  };
}

export function DashboardHeader({ title, action }: DashboardHeaderProps) {
  return (
    <header className="h-16 border-b border-gray-100 bg-white flex items-center justify-between px-6 shrink-0">
      <h1 className="text-base font-bold text-gray-900">{title}</h1>
      <div className="flex items-center gap-3">
        {action && (
          <a href={action.href}>
            <Button size="sm">{action.label}</Button>
          </a>
        )}
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">
          U
        </div>
      </div>
    </header>
  );
}
