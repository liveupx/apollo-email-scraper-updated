setTimeout(() => {
    const rows = document.querySelectorAll('table tr');
    const results = [];
    rows.forEach(row => {
        const cols = row.querySelectorAll('td');
        if (cols.length > 0) {
            const name = cols[0]?.innerText.trim();
            const email = cols[3]?.innerText.includes('Access email') ? 'Email Hidden (Requires Credit)' : cols[3]?.innerText.trim();
            results.push({ name, email });
        }
    });
    console.log("Scraped Data:", results);
    window.postMessage({ type: 'SCRAPED_EMAILS', data: results }, '*');
}, 3000);
