import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip,
    Cell
} from 'recharts';

const data = [
    { name: "Completed", value: 12 },
    { name: "Pending", value: 5 },
    { name: "In progress", value: 3 },
];

const COLORS = [
    "#06b6d4",
    "#8b5cf6",
    "#10b981"
];

const ProjectsChart = () => {
    return (
        <div>
            <div>
                <h2>
                    Projects Overview
                </h2>

                <p>
                    Project status distribution
                </p>
            </div>

            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={120}
                        label
                    >
                        {
                            data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />
                            ))
                        }
                    </Pie>

                    <Tooltip />

                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ProjectsChart;