import { useTestNames } from "../hooks/UseTestNames.tsx";

export const TestPage = () => {
    const { loading, error, testNames } = useTestNames();

    const renderTestNames = () => {
        if (testNames.length === 0) {
            return <div>No test names found.</div>;
        }
        return (
            <ul>
                {testNames.map((testName) => (
                    <div key={testName.id}>
                        <p>Name: {testName.name}</p>
                        <p>Age: {testName.age}</p>
                    </div>
                ))}
            </ul>
        );
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Test Page</h1>
            {renderTestNames()}
        </div>
    )
};