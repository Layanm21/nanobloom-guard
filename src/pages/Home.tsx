import React, { useState } from 'react';
import { PlantCard } from '@/components/plant-card';
import { Button } from '@/components/ui/button';
import { Plus, Leaf } from 'lucide-react';
import heroImage from '@/assets/hero-nanobloom.jpg';
import roseSample from '@/assets/rose-sample.jpg';
import lavenderSample from '@/assets/lavender-sample.jpg';
import watermelonSample from '@/assets/watermelon-sample.jpg';
import grapesSample from '@/assets/grapes-sample.jpg';

const plants = [
  {
    id: 1,
    name: 'Taif Rose',
    arabicName: 'الورد الطائفي',
    image: roseSample,
    soilTemp: 22,
    humidity: 65,
    status: 'healthy' as const
  },
  {
    id: 2,
    name: 'Lavender',
    arabicName: 'الخزامى',
    image: lavenderSample,
    soilTemp: 25,
    humidity: 45,
    status: 'warning' as const
  },
  {
    id: 3,
    name: 'Watermelon',
    arabicName: 'البطيخ',
    image: watermelonSample,
    soilTemp: 28,
    humidity: 70,
    status: 'healthy' as const
  },
  {
    id: 4,
    name: 'Grapes',
    arabicName: 'العنب',
    image: grapesSample,
    soilTemp: 24,
    humidity: 55,
    status: 'danger' as const
  }
];

export default function Home() {
  const [selectedPlant, setSelectedPlant] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted pb-20">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={heroImage} 
          alt="NanoBloom Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-6 right-6 text-right">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-4xl font-bold text-foreground">NanoBloom</h1>
            <Leaf className="h-8 w-8 text-primary" />
          </div>
          <p className="text-muted-foreground">حماية ذكية للنباتات من الأشعة الضارة</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-8">
        <div className="text-right mb-6">
          <h2 className="text-2xl font-bold mb-2">اختر النبات أو المحصول</h2>
          <p className="text-muted-foreground">راقب وتحكم في حماية نباتاتك من الأشعة فوق البنفسجية</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              {...plant}
              isSelected={selectedPlant === plant.id}
              onClick={() => setSelectedPlant(plant.id)}
            />
          ))}
          
          {/* Add New Plant Card */}
          <div className="flex items-center justify-center min-h-[200px]">
            <Button 
              variant="outline" 
              className="h-32 w-full border-dashed border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <div className="text-center">
                <Plus className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <span className="text-muted-foreground">إضافة نبات جديد</span>
              </div>
            </Button>
          </div>
        </div>

        {selectedPlant && (
          <div className="bg-card rounded-lg shadow-soft p-6 text-right">
            <h3 className="text-lg font-semibold mb-4">النبات المختار: {plants.find(p => p.id === selectedPlant)?.arabicName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium mb-2">حالة الحماية</h4>
                <p className="text-primary">نشط - حماية متوسطة</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium mb-2">مستوى الأشعة الحالي</h4>
                <p className="text-warning">متوسط (UV-A)</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium mb-2">التوقع القادم</h4>
                <p className="text-muted-foreground">حماية قوية خلال 2 ساعة</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}