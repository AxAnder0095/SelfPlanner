import { useState, useEffect } from "react";
import axios from "axios";

interface TestName {
    id: string,
    name: string,
    age: number
}

export const useTestNames = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [testNames, setTestNames] = useState<TestName[]>([]);


    const fetchTestNames = async () => {
        setLoading(true);
        try {
            const response = await axios.get<TestName[]>("/api/testclass");
            setTestNames(response.data);
            console.log("Fetched test names:", response.data);
        }catch (error) {
            console.error("Error fetching test names:", error);
            setError("Error fetching test names");
        }finally{
            setLoading(false);
        }
    };

    const fetchById = async (id: string): Promise<TestName | undefined> => {
        setLoading(true);
        try {
            const response = await axios.get<TestName>(`/api/testclass/${id}`);
            return response.data;
        }catch (error) {
            console.error("Error fetching test name by id:", error);
            setError("Error fetching test name by id");
        }finally{
            setLoading(false);
        }
    };

    const addTestName = async (name: string, age: number) => {
        try {
            const response = await axios.post<TestName>("/api/testclass", { name, age });
            setTestNames(prev => [...prev, response.data]);
        }catch (error) {
            console.error("Error adding test name:", error);
            setError("Error adding test name");
        }
    };

    useEffect(() => {
        fetchTestNames();
    }, [])
    return {
        loading,
        error,
        testNames,
        addTestName,
        fetchById
    }
}