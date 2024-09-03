const url = "https://www.course-api.com/react-tours-project";

type Tour = {
    id: string;
    image: string;
    info: string;
    name: string;
    price: string;
};

async function fetchData(url: string): Promise<Tour[]> {
    try {
        const response = await fetch(url);

        // Manual Check
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Tour[] = await response.json();

        // console.log(data);

        return data;
    } catch (error) {
        const errorMsg =
            error instanceof Error ? error.message : "there was an error";

        console.log(errorMsg);

        return [];
    }
}

const tours = await fetchData(url);

console.log(tours);

tours.map((tour) => {
    console.log(tour);
});
