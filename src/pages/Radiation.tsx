import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StatsCard } from '@/components/stats-card';
import { 
  Zap, 
  AlertTriangle, 
  Shield, 
  TrendingUp,
  Sun,
  Activity,
  Timer,
  ThermometerSun
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

// Mock data
const radiationData = [
  { time: '06:00', uva: 2, uvb: 0, uvc: 0, total: 2 },
  { time: '08:00', uva: 4, uvb: 1, uvc: 0, total: 5 },
  { time: '10:00', uva: 6, uvb: 3, uvc: 1, total: 10 },
  { time: '12:00', uva: 5, uvb: 8, uvc: 4, total: 17 },
  { time: '14:00', uva: 4, uvb: 9, uvc: 5, total: 18 },
  { time: '16:00', uva: 5, uvb: 5, uvc: 2, total: 12 },
  { time: '18:00', uva: 3, uvb: 1, uvc: 0, total: 4 },
  { time: '20:00', uva: 1, uvb: 0, uvc: 0, total: 1 }
];

const uvTypes = [
  { name: 'UV-A (نافع)', value: 35, color: 'hsl(var(--primary))' },
  { name: 'UV-B (ضار)', value: 45, color: 'hsl(var(--warning))' },
  { name: 'UV-C (خطير)', value: 20, color: 'hsl(var(--destructive))' }
];

const growthData = [
  { week: 'الأسبوع 1', growth: 100, protection: 85 },
  { week: 'الأسبوع 2', growth: 115, protection: 90 },
  { week: 'الأسبوع 3', growth: 125, protection: 95 },
  { week: 'الأسبوع 4', growth: 140, protection: 88 }
];

export default function Radiation() {
  const currentUV = 15;
  const isHarmful = currentUV > 10;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-right mb-6">
          <h1 className="text-3xl font-bold mb-2">مراقبة الإشعاعات</h1>
          <p className="text-muted-foreground">تحليل الأشعة فوق البنفسجية وتأثيرها على النبات</p>
        </div>

        {/* Alert Banner */}
        {isHarmful && (
          <Card className="mb-6 border-destructive bg-destructive/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 text-right">
                <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0 animate-pulse" />
                <div>
                  <h4 className="font-bold text-destructive text-lg">تحذير: أشعة ضارة!</h4>
                  <p className="text-sm">
                    مستوى الأشعة الحالي ({currentUV}) ضار للورد. تم تفعيل الحماية القوية.
                  </p>
                </div>
                <Badge className="bg-destructive text-destructive-foreground">
                  خطر عالي
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard
            title="مؤشر الأشعة الحالي"
            value={currentUV}
            subtitle="من أصل 20"
            icon={Sun}
            variant={isHarmful ? "danger" : "success"}
          />
          <StatsCard
            title="وقت الحماية النشط"
            value="4.5 ساعة"
            subtitle="اليوم"
            icon={Timer}
            variant="warning"
          />
          <StatsCard
            title="فعالية الحماية"
            value="94%"
            subtitle="تم حجب الأشعة الضارة"
            icon={Shield}
            variant="success"
          />
          <StatsCard
            title="تأثير على النمو"
            value="+12%"
            subtitle="تحسن مع الحماية"
            icon={TrendingUp}
            variant="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Radiation Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-right">مستويات الأشعة خلال اليوم</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={radiationData}>
                    <XAxis dataKey="time" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Area
                      type="monotone"
                      dataKey="uva"
                      stackId="1"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.8}
                    />
                    <Area
                      type="monotone"
                      dataKey="uvb"
                      stackId="1"
                      stroke="hsl(var(--warning))"
                      fill="hsl(var(--warning))"
                      fillOpacity={0.8}
                    />
                    <Area
                      type="monotone"
                      dataKey="uvc"
                      stackId="1"
                      stroke="hsl(var(--destructive))"
                      fill="hsl(var(--destructive))"
                      fillOpacity={0.8}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>UV-A</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span>UV-B</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span>UV-C</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* UV Type Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-right">توزيع أنواع الأشعة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={uvTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {uvTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {uvTypes.map((type, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="font-medium">{type.value}%</span>
                    <span className="text-right">{type.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Growth Analysis */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-right">تحليل النمو مع الحماية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={growthData}>
                  <XAxis dataKey="week" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Bar dataKey="growth" fill="hsl(var(--primary))" name="النمو" />
                  <Bar dataKey="protection" fill="hsl(var(--accent))" name="الحماية" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>معدل النمو (%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>فعالية الحماية (%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-right">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Activity className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">حالة الدرع</h3>
                  <p className="text-primary font-medium">نشط - حماية قوية</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                يحجب 95% من UV-B و 98% من UV-C
              </p>
            </CardContent>
          </Card>

          <Card className="text-right">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <ThermometerSun className="h-8 w-8 text-warning" />
                <div>
                  <h3 className="font-semibold">درجة الحرارة</h3>
                  <p className="text-warning font-medium">32°م</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                أعلى من المعدل الطبيعي بـ 5 درجات
              </p>
            </CardContent>
          </Card>

          <Card className="text-right">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Zap className="h-8 w-8 text-destructive" />
                <div>
                  <h3 className="font-semibold">مستوى الخطر</h3>
                  <p className="text-destructive font-medium">عالي</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                يُنصح بتجنب التعرض المباشر
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}