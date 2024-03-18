// import { useState, useEffect } from 'react';

// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch(url)
//             .then(res => {
//                 if (!res.ok) { // error coming back from server
//                     throw Error('could not fetch the data for that resource');
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 setIsPending(false);
//                 setData(data);
//                 setError(null);
//             })
//             .catch(err => {
//                 // auto catches network / connection error
//                 setIsPending(false);
//                 setError(err.message);
//             })
//     }, [url])

//     return { data, isPending, error };
// }

// export default useFetch;
// import { useState, useEffect } from 'react';

// const useFetch = (url, autoRefresh = false) => {
//     const [data, setData] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchData = () => {
//         fetch(url)
//             .then(res => {
//                 if (!res.ok) {
//                     throw Error('Could not fetch the data for that resource');
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 setIsPending(false);
//                 setData(data);
//                 setError(null);
//             })
//             .catch(err => {
//                 setIsPending(false);
//                 setError(err.message);
//             });
//     };

//     useEffect(() => {
//         fetchData();

//         if (autoRefresh) {
//             const interval = setInterval(fetchData, 2000); // Auto-refresh every 2 seconds (adjust as needed)
//             return () => {
//                 clearInterval(interval);
//             };
//         }
        
       
//     }, [url, autoRefresh]);

//     return { data, isPending, error };
// };

// export default useFetch;
import { useState, useEffect } from 'react';

const useFetch = (url, autoRefresh ,setRefresh) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const [refreshInterval, setRefreshInterval] = useState(null); // Store interval reference




    
    const fetchData = () => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
                if (autoRefresh) {
                    setRefresh(false);
                }
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            });
    };
   
    useEffect(() => {
        console.log('useEffect is triggered');
        console.log(url)
        fetchData();
        let interval = null;
        if (autoRefresh) {
            console.log('Setting interval...');
            interval = setInterval(fetchData, 2000);
            setRefreshInterval(interval);
        }
        return () => {
            console.log('Cleaning up...');
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [autoRefresh]);
    
    return { data, isPending, error };
};

export default useFetch;
