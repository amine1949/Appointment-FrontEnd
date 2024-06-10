import Header from "./Header";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Charts 1
import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer as ResponsiveContainerLine,
} from 'recharts';

// Chart 2
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer as ResponsiveContainerRadar,
} from 'recharts';

// Data for chart 1
const dataChart1 = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

// Data for chart 2
const dataChart2 = [
    {
        subject: 'Math',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Chinese',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'English',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Geography',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Physics',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'History',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

const Dashboard = () => {
    return (
        <>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header />
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    {/* Charts */}
                    <div className="grid grid-cols-2 gap-10 pl-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Chart Number 1</CardTitle>
                                <CardDescription>Simple Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {/* Container for the first chart */}
                                <div style={{ width: '100%', height: 300 }}>
                                    <ResponsiveContainerLine>
                                        <LineChart data={dataChart1}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    </ResponsiveContainerLine>
                                </div>
                            </CardContent>
                            <CardFooter />
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Chart Number 2</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {/* Container for the second chart */}
                                <div style={{ width: '100%', height: 300 }}>
                                    <ResponsiveContainerRadar>
                                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataChart2}>
                                            <PolarGrid />
                                            <PolarAngleAxis dataKey="subject" />
                                            <PolarRadiusAxis />
                                            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                        </RadarChart>
                                    </ResponsiveContainerRadar>
                                </div>
                            </CardContent>
                            <CardFooter />
                        </Card>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Dashboard;
