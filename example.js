const LANG = {
    "headers": {
        "education": "Education",
        "experience": "Experience",
        "projects": "Projects",
        "skills": "Skills"
    },
    "personal": {
        "name": "John Doe",
        "mail": "john@doe.com",
        "phone": "+00 0 00000000",
        "linkedin": "https://www.linkedin.com",
        "github": "https://github.com",
        "portrait": { // Optional
            "src": "./path-to-image.png",
            "scale": "220%",
            "position": {
                "x": "45%",
                "y": "60%"
            }
        },
        "description": `
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
        `,
    },
    "education": [
        {
            "date-range": [ "present", "2023" ],
            "grade": "msc",
            "title": "Resume Science",
            "institution": "University of Place",
            "location": "Place",
            "notes": "Thesis: How to create a resume in the modern era.",
            "description": `
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas.
            `
        },
        {
            "date-range": [ "2023", "2020" ],
            "short-bar": true,
            "grade": "bsc",
            "title": "HTML and CSS Technology",
            "institution": "University of Other Place",
            "location": "Other Place",
            "notes": `
                With honours:
                <a target="blank" href="">
                    Simple Resume Template using Web Technologies</a>.
            `,
        },
        {
            "date-range": [ "2019", "2013" ],
            "short-bar": true,
            "title": "High School",
            "institution": "Somewhere HS",
            "location": "Somewhere",
            "notes": "Cum laude."
        }
    ],
    "experience": [
        {
            "date-range": [ "2025" ],
            "title": "Internship",
            "institution": "Company",
            "location": "Place",
            "description": `
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas.
            `
        },
        {
            "date-range": [ "2024", "2021" ],
            "title": "Embedded Web Development",
            "institution": "Freelance",
            "location": "Remote",
            "notes": "Lorem ipsum dolor sit amet.",
            "description": `
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas. Iaculis massa nisl malesuada lacinia integer nunc
                posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
                Ad litora torquent per conubia nostra inceptos himenaeos.
            `
        },
    ],
    "projects": [
        {
            "title": "Project number 1",
            "description": `
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem.
            `
        },
        {
            "title": "Project number 2",
            "notes": `<a href="">Repository with source code</a>.`,
            "description": `
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
            `
        },
        {
            "title": "Project number 3",
            "description": `
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem.
            `
        }
    ],
    "skills": [
        {
            "title": "Languages",
            "description": "Fluent in at least one."
        },
        {
            "title": "Technical - Software",
            "description": "HTML/CSS, Javascript, SCSS"
        },
        {
            "title": "Technical - Systems & Tools",
            "description": "GNU/Linux, Nix, Git, Webbrowsing"
        },
        {
            "title": "Soft",
            "items": [
                `<span style="display: grid; grid-template-columns: 1fr 1fr">
                    <span>Presentations</span>
                    <span>• Something else</span>
                </span>
                `,
                `<span style="display: grid; grid-template-columns: 1fr 1fr">
                    <span>A third skill</span>
                    <span>• Maybe a fourth</span>
                </span>
                `
            ] 
        }
    ]
}

