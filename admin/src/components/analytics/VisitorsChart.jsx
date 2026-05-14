import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    Tooltip
} from "recharts";

const data = [
    { month: "Jan", visitors: 400 },
    { month: "Feb", visitors: 790 },
    { month: "Mar", visitors: 1200 },
    { month: "Apr", visitors: 1700 },
    { month: "May", visitors: 240 },
];

const VisitorsChart = () => {
    return (
        <div>
            <div>
                <h2>
                    Visitor Analytics
                </h2>

                <p>
                    Monthly visitor growth
                </p>
            </div>

            <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={data}>
                    <XAxis dataKey="month" />

                    <Tooltip />

                    <Area
                        type="monotone"
                        dataKey="visitors"
                        stroke="#06b6d4"
                        fill="#0891b2"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div >
    )
}

export default VisitorsChart;