import {
  Wind,
  Droplets,
  Zap,
  Shield,
  Palette,
  Hammer,
  Wrench,
  CalendarCheck,
  ClipboardList,
  Building2
} from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
  wind: <Wind className="h-4 w-4" />,
  droplets: <Droplets className="h-4 w-4" />,
  zap: <Zap className="h-4 w-4" />,
  shield: <Shield className="h-4 w-4" />,
  palette: <Palette className="h-4 w-4" />,
  hammer: <Hammer className="h-4 w-4" />,
  wrench: <Wrench className="h-4 w-4" />,
  "calendar-check": <CalendarCheck className="h-4 w-4" />,
  "clipboard-list": <ClipboardList className="h-4 w-4" />,
  "building-2": <Building2 className="h-4 w-4" />
};

export default function CategoryIcon({ name }: { name: string }) {
  return ICONS[name] ?? <Wrench className="h-4 w-4" />;
}
