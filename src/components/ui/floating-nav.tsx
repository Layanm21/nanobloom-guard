import React from 'react';
import { Button } from './button';
import { Home, User, Shield, Zap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface FloatingNavProps {
  className?: string;
}

const navItems = [
  { path: '/', icon: Home, label: 'الرئيسية' },
  { path: '/profile', icon: User, label: 'ملف النبات' },
  { path: '/control', icon: Shield, label: 'مركز التحكم' },
  { path: '/radiation', icon: Zap, label: 'الإشعاعات' },
];

export function FloatingNav({ className }: FloatingNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={cn(
      "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50",
      "bg-card/80 backdrop-blur-lg border border-border rounded-full shadow-nature",
      "px-4 py-3 flex gap-2",
      className
    )}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <Button
            key={item.path}
            variant={isActive ? "default" : "ghost"}
            size="sm"
            onClick={() => navigate(item.path)}
            className={cn(
              "relative h-12 w-12 rounded-full transition-all duration-300",
              isActive 
                ? "bg-gradient-nature text-primary-foreground shadow-nature scale-110" 
                : "hover:bg-muted hover:scale-105"
            )}
            title={item.label}
          >
            <Icon className="h-5 w-5" />
            {isActive && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-glow rounded-full animate-pulse" />
            )}
          </Button>
        );
      })}
    </div>
  );
}