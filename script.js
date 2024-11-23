const careerData = {
    biology: {
        highschool: {
            path: "Start with Biology courses. Consider pursuing a Bachelor's in Biology or Environmental Science.",
            universities: ["Harvard University", "Stanford University", "UC Berkeley"],
            route: ["High School: Study Biology", "Bachelor's in Biology", "Master's/PhD in Biological Sciences"]
        },
        bachelor: {
            path: "A Master's in Biology or Biotechnology is recommended for research or a lab-based career.",
            universities: ["MIT", "Johns Hopkins University", "Caltech"],
            route: ["Bachelor's in Biology", "Master's in Biological Sciences", "Work in Research Labs"]
        },
        mastersPhd: {
            path: "After completing a PhD in Biology, pursue advanced research roles or become a university professor.",
            universities: ["Harvard University", "Stanford University", "Oxford University"],
            route: ["PhD in Biological Sciences", "Postdoctoral Research", "Become a Professor or Senior Researcher"]
        }
    },
    business: {
        highschool: {
            path: "Start by studying business-related subjects like economics. Pursue a Bachelor's in Business Administration (BBA).",
            universities: ["Harvard Business School", "Stanford Graduate School of Business", "Wharton School"],
            route: ["High School: Study Business Basics", "Bachelor's in Business Administration", "MBA for Advanced Roles"]
        },
        bachelor: {
            path: "Consider an MBA to strengthen your managerial and business strategy skills.",
            universities: ["London Business School", "INSEAD", "Kellogg School of Management"],
            route: ["Bachelor's in Business", "MBA", "Work as a Business Consultant or Manager"]
        },
        mastersPhd: {
            path: "A PhD in Business Administration is ideal for those aiming for academic careers or high-level consultancy.",
            universities: ["Harvard Business School", "MIT Sloan School of Management", "Stanford Graduate School of Business"],
            route: ["PhD in Business Administration", "Consulting or Academic Research", "Senior Management or Professor"]
        }
    },
    commerce: {
        highschool: {
            path: "Start with accounting and finance basics. Pursue a Bachelor's in Commerce (B.Com) or related field.",
            universities: ["University of Chicago", "London School of Economics", "University of Pennsylvania"],
            route: ["High School: Focus on Finance", "Bachelor's in Commerce or Accounting", "Professional Certifications (CPA, CFA)"]
        },
        bachelor: {
            path: "Consider a Master's in Finance or Accounting for leadership roles in corporate finance.",
            universities: ["MIT Sloan School of Management", "University of Cambridge", "Columbia University"],
            route: ["Bachelor's in Commerce", "Master's in Finance", "CFA/CPA for Senior Finance Roles"]
        },
        mastersPhd: {
            path: "A Master's or PhD in Finance will help you become a financial expert or work in high-level consultancy.",
            universities: ["University of Chicago", "Harvard Business School", "London Business School"],
            route: ["Master's/PhD in Finance", "Financial Consultant", "Work in Hedge Funds, Banks, or Corporations"]
        }
    },
    astronomy: {
        highschool: {
            path: "Take physics and math courses in high school. Pursue a Bachelor's in Astronomy or Astrophysics.",
            universities: ["Harvard University", "Princeton University", "Caltech"],
            route: ["High School: Study Physics and Math", "Bachelor's in Astronomy or Astrophysics", "Master's/Ph.D. in Astronomy"]
        },
        bachelor: {
            path: "A Master's in Astrophysics or a related field is recommended for research roles.",
            universities: ["MIT", "UC Berkeley", "Cambridge University"],
            route: ["Bachelor's in Astronomy", "Master's in Astrophysics", "Work in Research Institutes"]
        },
        mastersPhd: {
            path: "A PhD in Astrophysics or Astronomy prepares you for high-level research and academic careers.",
            universities: ["Caltech", "Harvard University", "Oxford University"],
            route: ["PhD in Astrophysics", "Research Roles in Space Agencies", "University Professor or Researcher"]
        }
    },
    computerScience: {
        highschool: {
            path: "Learn programming languages and take computer science courses. Consider a Bachelor's in Computer Science.",
            universities: ["MIT", "Stanford University", "Carnegie Mellon University"],
            route: ["High School: Learn Programming", "Bachelor's in Computer Science", "Master's/Ph.D. in Computer Science"]
        },
        bachelor: {
            path: "A Master's in Computer Science or AI is recommended for advanced software development roles.",
            universities: ["MIT", "UC Berkeley", "University of Cambridge"],
            route: ["Bachelor's in Computer Science", "Master's in Computer Science", "Software Engineering or AI Research"]
        },
        mastersPhd: {
            path: "A PhD in Computer Science can lead to careers in AI, machine learning, or academic research.",
            universities: ["MIT", "Stanford University", "UC Berkeley"],
            route: ["PhD in Computer Science", "AI/ML Research or Academia", "Senior Tech Roles or Professor"]
        }
    },
    writer: {
        highschool: {
            path: "Start writing short stories or blogs. Pursue a Bachelor's in English or Creative Writing.",
            universities: ["University of Iowa", "Oxford University", "New York University"],
            route: ["High School: Build Your Portfolio", "Bachelor's in Creative Writing", "Intern at Publishing Companies"]
        },
        bachelor: {
            path: "A Master's in Creative Writing can help you publish books or become a professional writer.",
            universities: ["University of Iowa Writers' Workshop", "Columbia University", "Cambridge University"],
            route: ["Bachelor's in Writing", "Master's in Creative Writing", "Publish Your Work or Freelance"]
        },
        mastersPhd: {
            path: "A Master's or PhD in Creative Writing is great for aspiring authors or academic careers in writing.",
            universities: ["University of Iowa", "Columbia University", "University of Cambridge"],
            route: ["Master's/PhD in Creative Writing", "Publish Books or Work as an Author", "Become a Writing Professor or Editor"]
        }
    }
};

// Form submission event
document.getElementById('careerForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const qualification = document.getElementById('qualification').value;
    const interest = document.getElementById('interest').value;

    // Check if qualification and interest are valid
    if (qualification && interest) {
        const careerInfo = careerData[interest][qualification];
        
        if (careerInfo) {
            displayCareerRoute(careerInfo);
        } else {
            displayError("No data available for the selected combination.");
        }
    } else {
        alert("Please fill in all fields.");
    }
});

// Function to display career route information
function displayCareerRoute(careerInfo) {
    const output = document.getElementById('careerOutput');
    output.innerHTML = `
        <h3>Career Path</h3>
        <p>${careerInfo.path}</p>

        <h3>Top Universities</h3>
        <ul>
            ${careerInfo.universities.map(uni => `<li>${uni}</li>`).join('')}
        </ul>

        <h3>Career Route Map</h3>
        <ol>
            ${careerInfo.route.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
}

// Function to display an error message
function displayError(message) {
    const output = document.getElementById('careerOutput');
    output.innerHTML = `<p class="error">${message}</p>`;
}
