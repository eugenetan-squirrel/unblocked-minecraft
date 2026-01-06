const url = "https://cdn.jsdelivr.net/gh/PlanetDogeCodes/Eagletcraft-1.12@main/source%20file/egc1-12.xml";

async function openUndetectable() {
    try {
        const html = await fetch(url).then(r=>r.text());
        const newTab = window.open("", "_blank");
        if(!newTab){ alert("Pop-up blocked!"); return; }
        newTab.document.open();
        newTab.document.write(html);
        newTab.document.close();
        newTab.document.documentElement.requestFullscreen?.();
    } catch(e) {
        console.error(e);
        alert("Failed to load game.");
    }
}
