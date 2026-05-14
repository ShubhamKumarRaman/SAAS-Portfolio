const users = [
    {
        name: "Portfolio Website",
        visitors: "2.4k",
        growth: "+18%"
    },
    {
        name: "Admin Dashboard",
        visitors: "1.1k",
        growth: "+10%"
    }
];

const AnalyticsTable = () => {
    return (
        <div>
            <div>
                <h1>
                    Top Projects
                </h1>

                <p>
                    Most visited portfolio projects
                </p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>
                            Project
                        </th>
                        <th>
                            Visitors
                        </th>
                        <th>
                            Growth
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => (
                            <tr
                                key={index}
                            >
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.visitors}
                                </td>
                                <td>
                                    {item.growth}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default AnalyticsTable;