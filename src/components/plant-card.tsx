import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Thermometer, Droplets } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PlantCardProps {
  name: string;
  arabicName: string;
  image: string;
  soilTemp: number;
  humidity: number;
  status: 'healthy' | 'warning' | 'danger';
  isSelected?: boolean;
  onClick?: () => void;
}

export function PlantCard({ 
  name, 
  arabicName, 
  image, 
  soilTemp, 
  humidity, 
  status, 
  isSelected,
  onClick 
}: PlantCardProps) {
  const statusColors = {
    healthy: 'bg-primary text-primary-foreground',
    warning: 'bg-warning text-warning-foreground',
    danger: 'bg-destructive text-destructive-foreground'
  };

  const statusLabels = {
    healthy: 'صحي',
    warning: 'تحذير',
    danger: 'خطر'
  };

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-300 hover:shadow-nature hover:scale-105",
        "border-2",
        isSelected 
          ? "border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-nature" 
          : "border-border hover:border-primary/50"
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-32 object-cover rounded-lg mb-3"
          />
          <Badge 
            className={cn(
              "absolute top-2 right-2",
              statusColors[status]
            )}
          >
            {statusLabels[status]}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="text-right">
            <h3 className="font-semibold text-foreground">{arabicName}</h3>
            <p className="text-sm text-muted-foreground">{name}</p>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-1">
              <Thermometer className="h-4 w-4 text-primary" />
              <span>{soilTemp}°م</span>
            </div>
            <div className="flex items-center gap-1">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span>%{humidity}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}