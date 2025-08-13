import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Power, 
  Settings, 
  Zap, 
  Sun, 
  Moon,
  Activity,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export default function ControlCenter() {
  const [nanoShieldActive, setNanoShieldActive] = useState(true);
  const [sensitivity, setSensitivity] = useState([75]);
  const [autoMode, setAutoMode] = useState(true);
  const [protectionLevel, setProtectionLevel] = useState<'light' | 'medium' | 'strong'>('medium');

  const protectionLevels = {
    light: { 
      label: 'حماية خفيفة', 
      color: 'bg-primary', 
      description: 'تسمح بمرور UV-A النافعة' 
    },
    medium: { 
      label: 'حماية متوسطة', 
      color: 'bg-warning', 
      description: 'حماية من معظم الأشعة الضارة' 
    },
    strong: { 
      label: 'حماية قوية', 
      color: 'bg-destructive', 
      description: 'حماية كاملة من UV-B & UV-C' 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4 pb-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-right mb-6">
          <h1 className="text-3xl font-bold mb-2">مركز التحكم</h1>
          <p className="text-muted-foreground">إدارة نظام الحماية النانوي</p>
        </div>

        {/* Main Control Panel */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-right flex items-center gap-2">
              <span>الدرع النانوي</span>
              <Shield className="h-6 w-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Shield Status */}
            <div className="flex items-center justify-between">
              <div className="text-right">
                <h3 className="text-lg font-semibold mb-1">حالة النظام</h3>
                <div className="flex items-center gap-2">
                  {nanoShieldActive ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-primary">نشط</span>
                    </>
                  ) : (
                    <>
                      <Power className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">غير نشط</span>
                    </>
                  )}
                </div>
              </div>
              <Switch
                checked={nanoShieldActive}
                onCheckedChange={setNanoShieldActive}
                className="scale-125"
              />
            </div>

            {/* Protection Level */}
            {nanoShieldActive && (
              <div className="space-y-4">
                <div className="text-right">
                  <h3 className="text-lg font-semibold mb-2">مستوى الحماية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {Object.entries(protectionLevels).map(([key, level]) => (
                      <Button
                        key={key}
                        variant={protectionLevel === key ? "default" : "outline"}
                        onClick={() => setProtectionLevel(key as any)}
                        className="h-auto p-4 text-right"
                      >
                        <div>
                          <div className="font-medium">{level.label}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {level.description}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center py-4">
                  <Badge 
                    className={`text-white ${protectionLevels[protectionLevel].color} px-4 py-2`}
                  >
                    {protectionLevels[protectionLevel].label}
                  </Badge>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Sensitivity Control */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-right flex items-center gap-2">
              <span>الحساسية</span>
              <Settings className="h-6 w-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-right">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-primary">{sensitivity[0]}%</span>
                <h3 className="text-lg font-semibold">مستوى الحساسية</h3>
              </div>
              <Slider
                value={sensitivity}
                onValueChange={setSensitivity}
                max={100}
                min={0}
                step={5}
                className="w-full"
                dir="rtl"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>حساسية عالية</span>
                <span>حساسية منخفضة</span>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg p-4 text-right">
              <p className="text-sm">
                <span className="font-medium">التوصية:</span> {
                  sensitivity[0] >= 80 ? 'مثالي للنباتات الحساسة مثل الورد' :
                  sensitivity[0] >= 50 ? 'مناسب لمعظم المحاصيل' :
                  'للنباتات المقاومة للأشعة'
                }
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Auto Mode & Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-right flex items-center gap-2">
                <span>الوضع التلقائي</span>
                <Activity className="h-6 w-6" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Switch
                  checked={autoMode}
                  onCheckedChange={setAutoMode}
                />
                <span className="text-right">تفعيل الوضع التلقائي</span>
              </div>
              
              {autoMode && (
                <div className="space-y-3 text-right text-sm">
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-warning" />
                    <span>حماية قوية: 11:00 ص - 3:00 م</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Moon className="h-4 w-4 text-primary" />
                    <span>حماية خفيفة: باقي اليوم</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-right flex items-center gap-2">
                <span>حالة الطاقة</span>
                <Zap className="h-6 w-6" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-primary mb-1">92%</div>
                <p className="text-sm text-muted-foreground">طاقة البطارية</p>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>استهلاك حالي</span>
                  <span className="text-primary">متوسط</span>
                </div>
                <div className="flex justify-between">
                  <span>وقت التشغيل المتبقي</span>
                  <span>24 ساعة</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Status Alert */}
        <Card className="mt-6 border-warning bg-warning/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 text-right">
              <AlertTriangle className="h-6 w-6 text-warning flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-warning">تحذير: أشعة قوية متوقعة</h4>
                <p className="text-sm text-muted-foreground">
                  سيتم تفعيل الحماية القوية تلقائياً خلال 30 دقيقة
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}