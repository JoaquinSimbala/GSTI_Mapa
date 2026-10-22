import React from 'react';
import {
  Sparkles,
  TrendingUp,
  RotateCw,
  Headset,
  ShieldAlert,
  Calculator,
  Target,
  Cpu,
  CheckCircle2,
  Compass,
  FileSpreadsheet,
  Wrench,
  BarChart3,
  Award,
  Network,
  ListChecks,
  SlidersHorizontal,
  FileCheck,
  AlertTriangle,
  Layers,
  HelpCircle,
  Database,
  Globe,
  Server,
  Zap,
  Users,
  Shield,
  Code,
  Workflow,
  BookOpen,
  Rocket,
  CheckSquare,
  Scale,
  Activity,
  Boxes,
  LucideProps
} from 'lucide-react';

const ICON_MAP: Record<string, React.FC<LucideProps>> = {
  Sparkles,
  TrendingUp,
  RotateCw,
  Headset,
  ShieldAlert,
  Calculator,
  Target,
  Cpu,
  CheckCircle2,
  Compass,
  FileSpreadsheet,
  Wrench,
  BarChart3,
  Award,
  Network,
  ListChecks,
  SlidersHorizontal,
  FileCheck,
  AlertTriangle,
  Layers,
  HelpCircle,
  Database,
  Globe,
  Server,
  Zap,
  Users,
  Shield,
  Code,
  Workflow,
  BookOpen,
  Rocket,
  CheckSquare,
  Scale,
  Activity,
  Boxes
};

interface IconRendererProps extends LucideProps {
  name: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, ...props }) => {
  const Component = ICON_MAP[name] || HelpCircle;
  return <Component {...props} />;
};
