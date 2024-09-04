import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
    id: z.string(),
    image: z.string(),
    info: z.string(),
    name: z.string(),
    price: z.string(),
    //something: z.number(), // runtime error
});

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
    try {
        const response = await fetch(url);

        // Manual Check
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const rawData: Tour[] = await response.json();

        // Runtime check
        const result = tourSchema.array().safeParse(rawData);

        console.log(result);

        if (!result.success) {
            throw new Error(`Invalid data: ${result.error}`);
        }

        return result.data;
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
