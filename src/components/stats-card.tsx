import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: 'default' | 'warning' | 'danger' | 'success';
  className?: string;
}

export function StatsCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  variant = 'default',
  className 
}: StatsCardProps) {
  const variants = {
    default: 'border-border',
    warning: 'border-warning bg-warning/5',
    danger: 'border-destructive bg-destructive/5',
    success: 'border-primary bg-primary/5'
  };

  const iconColors = {
    default: 'text-muted-foreground',
    warning: 'text-warning',
    danger: 'text-destructive',
    success: 'text-primary'
  };

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-soft",
      variants[variant],
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-right">{title}</CardTitle>
        <Icon className={cn("h-5 w-5", iconColors[variant])} />
      </CardHeader>
      <CardContent>
        <div className="text-right">
          <div className="text-2xl font-bold">{value}</div>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}