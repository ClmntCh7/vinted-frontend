const Offers = ({ data }) => {
  console.log(data);
  const { _id, product_name, product_description } = data;
  return (
    <section className="Offers">
      {data.map((elem) => {
        console.log(elem);
        return (
          <div key={_id}>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <span>{elem.owner.account.username}</span>
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Offers;
