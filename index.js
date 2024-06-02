



const JustFood = (pocetLidi) => {
    return `nejlevnější catering od společnosti Just Food pro ${(pocetLidi).toLocaleString("cs-CZ")} lidí za ${Math.round(pocetLidi * 120).toLocaleString("cs-CZ")} Kč. 
    S příplatkem jen za 1 000 Kč/osobu můžete příště získat mnohem lepší kvalitu a Vaši hosté budou nadmíru spokojeni.`;
  };
  const YourMama = (pocetLidi) => {
    return `průměrný catering za rozumnou cenu od společnosti Your Mama pro ${(pocetLidi).toLocaleString("cs-CZ")} lidí za ${Math.round(pocetLidi * 1120).toLocaleString("cs-CZ")} Kč.
     Chcete svým hostům dopřát to nejlepší? Můžete to mít a to jen za cenu 5 000 Kč/osobu. Stačí si příště vybrat vyšší kategorii`;
  };
  const FlavourHaven = (pocetLidi) => {
    return `nejlepší, nejúžasnější, nej nej nejcatering od Flavour Haven pro ${(pocetLidi).toLocaleString("cs-CZ")} lidí za ${Math.round(pocetLidi * 5000).toLocaleString("cs-CZ")} Kč`;
  };
  

//Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu://
 //Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč//

  const createEvent = (nazevUdalosti, pocetLidi, catering) => {
    return `Pro událost ${nazevUdalosti} byl dodán ${catering(pocetLidi)}`;
  };
  
  document.body.innerHTML = createEvent(
    "Inaugurace prezidenta",
    1000,
    YourMama
  );
  //nazevUdalosti - můj název Inaugurace prezidenta, pocetLidi - moje číslo 1000, catering -const YourMama//