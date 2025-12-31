'use client';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';

const data = [
    { month: 'Jul', marketAvg: 2100000, askingPrice: null },
    { month: 'Aug', marketAvg: 2150000, askingPrice: null },
    { month: 'Sep', marketAvg: 2180000, askingPrice: null },
    { month: 'Oct', marketAvg: 2200000, askingPrice: null },
    { month: 'Nov', marketAvg: 2220000, askingPrice: null },
    { month: 'Dec', marketAvg: 2200000, askingPrice: 1850000 },
];

export function PriceComparisonChart() {
    return (
        <div className="h-[300px] w-full mt-6">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#064e3b" stopOpacity={0.1} />
                            <stop offset="95%" stopColor="#064e3b" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#888' }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#888' }}
                        tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                    />
                    <Tooltip
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        formatter={(value: any) => [value?.toLocaleString() + ' AED', '']}
                    />
                    <Area
                        type="monotone"
                        dataKey="marketAvg"
                        stroke="#064e3b"
                        fillOpacity={1}
                        fill="url(#colorMarket)"
                        strokeWidth={2}
                        name="Market Average"
                    />
                    <Line
                        type="monotone"
                        dataKey="askingPrice"
                        stroke="#ef4444"
                        strokeWidth={0}
                        dot={{ r: 6, fill: '#ef4444', strokeWidth: 2, stroke: '#fff' }}
                        name="Asking Price"
                    />
                </AreaChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4 text-xs font-medium">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary"></div>
                    <span className="text-muted-foreground">Market Average (DLD Data)</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-white shadow-sm"></div>
                    <span className="text-muted-foreground">Asking Price (Distress)</span>
                </div>
            </div>
        </div>
    );
}
