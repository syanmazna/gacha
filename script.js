 // Fetch quotes from your API
    async function fetchQuotes() {
        try {
            const response = await fetch('https://test001-2425.vercel.app/api/quotes');
            if (!response.ok) {
                throw new Error('Failed to fetch quotes');
            }
        }
    }