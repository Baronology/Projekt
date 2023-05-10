import Feed from '@components/Feed';
import Nav from '@components/Nav';
const Home = () => {
  return (
    <sectio>
      <Nav />

      <h1 className="text-center">Fruition</h1>
      <p className="text-center">
        Ihr Online-Shop für hochwertige Produkte zu erschwinglichen Preisen.
        Unsere Mission ist es, unseren Kunden qualitativ hochwertige Produkte zu
        wettbewerbsfähigen Preisen anzubieten. Wir sind bestrebt, Ihre
        Erwartungen zu übertreffen und Ihnen ein Einkaufserlebnis zu bieten, das
        Sie nicht vergessen werden. Stöbern Sie durch unsere Kategorien, um das
        perfekte Produkt zu finden, das Ihren Bedürfnissen entspricht. Wir
        bieten schnelle und zuverlässige Lieferung an, damit Sie Ihre Bestellung
        so schnell wie möglich erhalten. Wenn Sie Fragen zu unseren Produkten
        oder Services haben, zögern Sie bitte nicht, uns zu kontaktieren. Unser
        freundliches Kundenservice-Team steht Ihnen jederzeit zur Verfügung, um
        Ihnen zu helfen. Vielen Dank, dass Sie sich für Fruition entschieden
        haben. Wir hoffen, dass Sie mit Ihrem Einkaufserlebnis zufrieden sind
        und freuen uns darauf, Sie bald wiederzusehen.
      </p>
      <Feed />
    </sectio>
  );
};

export default Home;
