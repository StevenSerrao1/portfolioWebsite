export interface Image {
    imageUrl: string;
    caption: string;
    altText: string;
    additionalInfo: string;
    projectId: number;
}

export interface Project {
    title: string;
    shortDescription: string;
    fullDescription: string;
    projectURL: string;
    dateCreatedFormatted: string;
    gitHubViews: string;
    gitHubRepoName: string;
    images: Image[];
}

// NEXT UP, import these types at ProjectSection.tsx
// Use the API call (axios) to retrieve info from the backend and create project model with above interface
// Style it properly
// THEN TWEAK THE BACKEND AS MUCH AS POSSIBLE TO ENSURE MULTIPLE PIC UPLOAD AND NON-SHIT ADMIN PANEL