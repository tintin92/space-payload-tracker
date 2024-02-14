async function fetchLatestLaunch() {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/launches/latest');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data; // This will return the latest launch data as a JavaScript object
    } catch (error) {
        console.error("Could not fetch the latest launch data:", error);
    }
}
  
  // Call the function to fetch the data
  fetchLatestLaunch();