window.addEventListener("DOMContentLoaded", async () => {




    // DICHIARAZIONE VARIABILI HTML
    const charSelect = document.getElementById("character");
    const xpInput = document.getElementById("xpInput");
    const notesArea = document.getElementById("notesArea");
    const healthBox = document.getElementById("healthBoxes");
    const exportBtn = document.getElementById("exportBtn")
    const importInput = document.getElementById("importInput")


    const characters = {
        Aaron: {
            attributes: {
                Forza: 4, Destrezza: 3, Stamina: 3, Carisma: 2,
                Persuasione: 1, Autocontrollo: 2, Intelligenza: 2,
                Prontezza: 2, Fermezza: 3
            },
            skills: {
                Athletics: 3, Brawl: 4, Firearms: 1, Larceny: 3,
                Melee: 4, Stealth: 2, Survival: 3, Insight: 1, Intimidation: 1, streetwise: 1, Awarness: 2
            },
            weapons: {
                "Spadone di Akrasiel (+4 aggravati)": false,
                "Scimitarra Sabbat (+3 superficiali)": false,
                "Pugnale Argento (+2 superficiali)": false,
                "Pistola (+3 superficiali)": false,
                "Coltello a Serramanico (+2 superficiali)": false
            },
            disciplines: {
                Proteide: [
                    "Occhi della Bestia",
                    "Armi Ferali",
                    "Peso della Piuma",
                    "Forma Bestiale",
                    "Metamorfosi"
                ],
                Robustezza: ["Resilienza", "Robustezza"]
            }
        },
        Katherine: {
            attributes: {
                Forza: 1, Destrezza: 2, Stamina: 2, Carisma: 4,
                Persuasione: 3, Autocontrollo: 2, Intelligenza: 3,
                Prontezza: 3, Fermezza: 2
            },
            skills: {
                Athletics: 1, Firearm: 1, Melee: 4,
                Elysium: 2, Insight: 3, intimidation: 1, Leadership: 1, Performance: 2,
                Persuasion: 3, Subterfuge: 4, Academics: 2, Awarness: 3, Investigazione: 1
            },
            weapons: {
                "Pugnale di Akkad (+2 aggravati)": false,
                "Pugnale d’Argento (+2 superficiali)": false,
                "Pistola (+3 superficiali)": false
            },
            disciplines: {
                Auspex: ["Sensi Aumentati", "Premonizione"],
                Ascendente: ["Soggezione", "Spaventare"],
                Celerità: ["Grazia Felina", "Blink", "Fleetness"]
            }
        }
    };

    // === POPOLO IL SELECT DINAMICAMENTE ===  // <--- ho commentato questa funzione perchè era ridondante e creava doppioni
    // function populateCharacterSelect() {
    //     charSelect.innerHTML = '<option value="">-- Seleziona un personaggio --</option>';
    //     for (const name in characters) {
    //         const option = document.createElement("option");
    //         option.value = name;
    //         option.textContent = name;
    //         charSelect.appendChild(option);
    //     }
    // }

    // populateCharacterSelect() //// <--- commentata invocazione perchè creava doppioni nel selettore personaggi e un errore in console, in attesa di trovare un fix


    // === EXPORT JSON ===
    exportBtn.addEventListener("click", () => {
        const charName = charSelect.value;
        if (!charName) {
            alert("Seleziona un personaggio da esportare.");
            return;
        }

        const weaponsList = document.getElementById("weaponsList")

        // 1. Leggi le armi da #weaponsList
        const predefined = {};
        const custom = {};
        const liElements = weaponsList.querySelectorAll("li");

        liElements.forEach(li => {
            const input = li.querySelector("input[type='checkbox']");
            if (!input) return;

            const name = input.value || input.nextSibling?.textContent?.trim() || "Sconosciuto";

            if (li.dataset.custom === "true") {
                custom[name] = input.checked;
            } else {
                predefined[name] = input.checked;
            }
        });

        // 2. Crea il JSON finale
        const data = {
            name: charName,
            xp: parseInt(xpInput.value) || 0,
            note: notesArea.value || "",
            health: Array.from(healthBox.children).map(b => b.dataset.state || "vuoto"),
            weapons: {
                predefined,
                custom
            }
        }
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${charName}_backup.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    });