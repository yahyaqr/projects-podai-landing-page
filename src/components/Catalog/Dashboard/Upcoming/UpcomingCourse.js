// upcomingCourses.js
export const upcomingCourses = [
    {
        id: 2,
        title: "Intellectual Property Dispute: Traditional Knowledge vs. Modern Patents",
        status: "Upcoming",
        eventDate: "2025-03-15",  // Event date for the course
        subject: "Intellectual Property Law",
        color: "bg-blue-500",
        href: "/course/intellectual-property",
        daysUntilEvent: calculateDaysUntilEvent("2025-03-15"),  // Add the computed days here
    },
    // Add more Upcoming courses here if needed
];

// Function to calculate the number of days until the event
function calculateDaysUntilEvent(eventDate) {
    const event = new Date(eventDate);
    const now = new Date();
    const diffTime = event - now;  // Difference in milliseconds
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));  // Convert to days
}
