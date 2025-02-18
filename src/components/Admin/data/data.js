// Mock data with YAML frontmatter
export const data = [
    {
        id: "1",
        title: "Getting Started Guide",
        content: "# Getting Started\n\nWelcome to our platform! This guide will help you get started...",
        yaml: {
            title: "Getting Started Guide",
            author: "John Doe",
            date: "2024-01-27",
            tags: "guide, introduction",
            status: "published"
        }
    },
    {
        id: "2",
        title: "API Documentation",
        content: "# API Documentation\n\n## Authentication\n\nTo authenticate your requests...",
        yaml: {
            title: "API Documentation",
            author: "Jane Smith",
            date: "2024-01-26",
            tags: "api, documentation",
            status: "draft"
        }
    },
    {
        id: "3",
        title: "Release Notes v1.0",
        content: "# Release Notes - v1.0\n\n## New Features\n\n- Feature 1\n- Feature 2",
        yaml: {
            title: "Release Notes v1.0",
            author: "Mike Johnson",
            date: "2024-01-25",
            tags: "release, changelog",
            status: "archived"
        }
    }
]