import OfferCard from "./OfferCard";

const Offers = ({ data }) => {
  //   console.log(data);
  return (
    <section className="Offers">
      {data.map((elem) => {
        const { account } = elem.owner;
        return <OfferCard key={elem._id} elem={elem} account={account} />;
      })}
    </section>
  );
};

export default Offers;
