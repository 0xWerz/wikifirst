try {
  chrome.storage.local.get({ isActive: true }, (result) => {
    if (!result.isActive) {
      console.log('Wikifirst: Wikifirst is inactive');
      return;
    }

    const results = document.querySelector('.v7W49e');
    if (!results) {
      console.log('Wikifirst: no results found');
      return;
    }

    const wikiResult = Array.from(results.children || []).find(
      (child) => child.textContent?.includes('Wikipedia') || false
    );

    if (!wikiResult) {
      console.log('Wikifirst: no Wikipedia result found');
      return;
    }
    results.prepend(wikiResult);
  });
} catch (e) {
  console.error(e);
}
