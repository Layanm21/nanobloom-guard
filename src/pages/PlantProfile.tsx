import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/stats-card';
import { Sun, Clock, Shield, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts';

// Mock data for UV radiation over time
const uvData = [
  { time: '06:00', uv: 1, harmful: false },
  { time: '08:00', uv: 3, harmful: false },
  { time: '10:00', uv: 6, harmful: false },
  { time: '12:00', uv: 9, harmful: true },
  { time: '14:00', uv: 11, harmful: true },
  { time: '16:00', uv: 8, harmful: false },
  { time: '18:00', uv: 4, harmful: false },
  { time: '20:00', uv: 1, harmful: false },
];

export default function PlantProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-right mb-6">
          <h1 className="text-3xl font-bold mb-2">ملف النبات</h1>
          <p className="text-muted-foreground">الورد الطائفي - Taif Rose</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="متطلبات الضوء"
            value="شمس كاملة"
            subtitle="6-8 ساعات يومياً"
            icon={Sun}
            variant="success"
          />
          <StatsCard
            title="وقت الحماية النشط"
            value="4 ساعات"
            subtitle="من 11 ص - 3 م"
            icon={Clock}
            variant="warning"
          />
          <StatsCard
            title="حالة الدرع النانوي"
            value="نشط"
            subtitle="حماية متوسطة"
            icon={Shield}
            variant="success"
          />
          <StatsCard
            title="معدل النمو"
            value="+15%"
            subtitle="مقارنة بالأسبوع الماضي"
            icon={TrendingUp}
            variant="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* UV Radiation Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-right">توقع الأشعة فوق البنفسجية اليوم</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={uvData}>
                    <XAxis 
                      dataKey="time" 
                      axisLine={false} 
                      tickLine={false}
                      fontSize={12}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false}
                      fontSize={12}
                      label={{ value: 'UV Index', angle: -90, position: 'insideLeft' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="hsl(var(--warning))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 4 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <span className="text-right">أشعة ضارة متوقعة من 12 ظهراً - 2 مساءً</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-right">توصيات الذكاء الاصطناعي</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 text-right">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">تفعيل الحماية القوية</h4>
                  <p className="text-sm text-muted-foreground">في الساعة 11:30 ص لحماية من UV-B & UV-C</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-right">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">السماح بمرور UV-A</h4>
                  <p className="text-sm text-muted-foreground">الأشعة النافعة للنمو من 6-10 صباحاً</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-right">
                <AlertTriangle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">زيادة الري</h4>
                  <p className="text-sm text-muted-foreground">بسبب ارتفاع درجة الحرارة المتوقع</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-right">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">إعدادات مثلى</h4>
                  <p className="text-sm text-muted-foreground">حساسية الدرع: متوسطة، تبديل تلقائي</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Plant Requirements */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-right">متطلبات النبات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">الضوء</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">النوع:</span> شمس كاملة</p>
                  <p><span className="font-medium">المدة:</span> 6-8 ساعات</p>
                  <p><span className="font-medium">الأشعة النافعة:</span> UV-A صباحاً ومساءً</p>
                  <p><span className="font-medium">الأشعة الضارة:</span> UV-B, UV-C ظهراً</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">التربة</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">النوع:</span> جيدة التصريف</p>
                  <p><span className="font-medium">pH:</span> 6.0 - 7.0</p>
                  <p><span className="font-medium">الرطوبة:</span> 60-70%</p>
                  <p><span className="font-medium">درجة الحرارة:</span> 20-25°م</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">الحماية</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">وقت التفعيل:</span> 11:00 ص</p>
                  <p><span className="font-medium">وقت الإيقاف:</span> 3:00 م</p>
                  <p><span className="font-medium">نوع الحماية:</span> درع نانوي متكيف</p>
                  <p><span className="font-medium">الحساسية:</span> متوسطة إلى عالية</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}